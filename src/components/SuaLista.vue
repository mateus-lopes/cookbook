<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto">Sua Lista:</span>

    <div v-if="ingredientes.length > 0" class="ingredientes-sua-lista">
      <Tag v-for="ingrediente in ingredientes" :key="ingrediente" :texto="ingrediente" :ativa="true" />
    </div>

    <p v-else class="paragrafo lista-vazia">
      <img src="../assets/imagens/icones/lista-vazia.svg" alt="icone de pesquisa" />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<script lang="ts">
import Tag from './Tag.vue';
import type { PropType } from 'vue';

export default {
  components: {
    Tag,
  },
  props: {
    ingredientes: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
};
</script>

<style scoped>

section {
  width: 80%;
}
.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media screen and (min-width: 1600px) {
  .ingredientes-sua-lista {
    width: 80%;
  }
}
</style>
