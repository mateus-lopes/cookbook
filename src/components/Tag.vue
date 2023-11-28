<script lang="ts">
export default {
    props: {
        texto: {
            type: String,
            required: true,
        },
        ativa: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
    <span :class="['tag', { ativa }]">
        {{ texto }}
    </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background-color: var(--cinza-claro);
  font-weight: 400;
  animation: fadeIn 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.tag:hover {
  background: var(--coral, #f0633c);
  color: var(--branco, #fff);
}
.tag.ativa {
  background: var(--coral, #f0633c);
  color: var(--branco, #fff);
}

@keyframes fadeIn {
  from {
    margin-left: -50px;
    opacity: 0;
  }
  to {
    margin-left: 0px;
    opacity: 1;
  }
}
</style>
