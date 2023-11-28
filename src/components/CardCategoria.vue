<script lang="ts">
import type { PropType } from "vue";
import type { ICategoria } from "@/interfaces/categoria";
import Tag from "./Tag.vue";
import IngredienteSelecionavel from "./IngredienteSelecionavel.vue";

export default {
  props: {
    categoria: {
      type: Object as PropType<ICategoria>,
      required: true,
    },
  },
  components: { 
    Tag, 
    IngredienteSelecionavel 
  },
  emits: ['adicionar', 'remover'],
};
</script>

<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img
        class="categoria__imagem"
        :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`"
        :alt="categoria.nome"
      />
      <h2 class="categoria__nome">{{ categoria.nome }}</h2>
    </header>
    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionavel 
          :ingrediente="ingrediente"
          @adicionar="$emit('adicionar', $event)"
          @remover="$emit('remover', $event)"
        />
      </li>
    </ul>
  </article>
</template>

<style scoped>
.categoria {
  width: 18rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #fff);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3d6d4a);
  font-weight: 700;
  font-size: 1.25rem;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

@media screen and (min-width: 1600px) {
  .categoria__imagem {
    width: 5rem;
  }
  .categoria {
    width: 20rem;
  }
  .categoria__nome {
    font-size: 1.3rem;
  }
}
</style>
