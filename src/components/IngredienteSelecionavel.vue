<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: {
            type: String,
            required: true,
        },
    },
    data(){
        return {
            selecionado: false,
        }
    },
    methods: {
        selecionar(){
            this.selecionado = !this.selecionado;
            if (this.selecionado) {
                this.$emit('adicionar', this.ingrediente);
            } else {
                this.$emit('remover', this.ingrediente);
            }
       }
    },
    emits: ['adicionar', 'remover'],
}
</script>

<template>
    <button
        class="ingrediente"
        @click="selecionar"
        :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>