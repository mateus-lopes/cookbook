<script lang="ts">
export default {
    props: {
        texto: {
            type: String,
            required: true,
        },
        desabilitado: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<template>
    <main>
        <button 
            class="botao"
            :class="{desabilitado}"
            type="submit"
            :disabled="desabilitado"
        >
            {{ texto }}
        </button>
        <small class="inicial" :class="{'texto-desabilitado':desabilitado}">
            *Sua lista está vazia, selecione ingredientes para iniciar.
        </small>
    </main>
</template>

<style scoped>
.desabilitado {
    cursor: not-allowed;
    background: #666;
    color: var(--cinza-claro, #999);
    transition: all .2s ease-in-out;
}
.inicial{
    color: #888;
    font-size: 0.75rem;
    display: block;
    text-align: center;
    margin-top: 0.5rem;
    opacity: 0;
    transition: all .5s ease-in-out;

}
.texto-desabilitado {
    opacity: 1 !important;
}
</style>