<template>
  <article class="receita">
    <img 
      :src="`/imagens/receitas/${receita.imagem}`" 
    >
    <h3>{{ receita.nome  }}</h3>
    <p>Ingredientes</p>
    <ul>
      <li 
        v-for="ingrediente in receita.ingredientes"
        :key="ingrediente"
      >
        {{ingrediente}}
      </li>
    </ul>
  </article>
</template>
<script lang="ts">
export default {
  props: {
    receita: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

h3 {
  margin: 0;
  padding: 1em 1.5em;
  color: black;
}
li {
  list-style: inside;
}
ul {
  padding: 1em 2em 2em;
  text-align: left;
}

p {
  font-size: 18px;
  padding: 0 1.5em;
}

.receita {
  display: flex;
  width: 282px;
  max-width: 312px;
  flex-direction: column;
  align-items: start;
  border-radius: 16px;
  background: var(--Branco, #FFF);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita img {
  width: 100%;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
}
</style>