<script lang="ts">
import Btn from './Btn.vue';
import Ingredientes from './Ingredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'Selecionar ingredientes' | 'Mostrar receitas';

export default {
  data() {
      return {
        ingredientes: [] as string[],
        conteudo: 'Selecionar ingredientes' as Pagina,
      }
  },
  components: {
    Ingredientes,
    Tag,
    Btn,
    SuaLista,
    MostrarReceitas
},
  methods: {
    adicionar(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },
    remover(ingrediente: string) {
      const indice = this.ingredientes.indexOf(ingrediente);
      this.ingredientes.splice(indice, 1);
    },
    navegar(pagina: Pagina) {
      this.conteudo = pagina;
    },
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista
      :ingredientes="ingredientes"
    />
    <KeepAlive include="Ingredientes">
      <Ingredientes 
        v-if="conteudo === 'Selecionar ingredientes'"
        @adicionar="adicionar"
        @remover="remover"
        @buscar="navegar('Mostrar receitas')"
        :ingredientes="ingredientes"
      />
      <MostrarReceitas 
        v-else-if="conteudo === 'Mostrar receitas'" 
        :ingredientes="ingredientes"
        @buscar="navegar('Selecionar ingredientes')"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}


</style>
