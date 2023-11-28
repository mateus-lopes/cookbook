
<script lang="ts">
import { obterCategorias } from '@/http/index.ts';
import type { ICategoria } from '@/interface/categoria';
import CardCategoria from './CardCategoria.vue';
import Btn from './Btn.vue';

export default {
    name: 'Ingredientes',
    components: {
        CardCategoria,
        Btn,
    },
    data() {
        return {
            categorias: [] as ICategoria[],
        }
    },
    props: {
        ingredientes: {
            type: Array,
            required: true,
        },
    },
    async created() {
        await obterCategorias()
            .then((categorias) => {
                this.categorias = categorias;
            })
            .catch((erro) => {
                console.log(erro);
            });
    },
    emits: ['adicionar', 'remover', 'buscar'],
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>
        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>
        <ul v-if="categorias.length > 0" class="categorias">
            <li v-for="categoria in categorias" :key="categoria.nome">
                <CardCategoria 
                    @remover="$emit('remover', $event)" 
                    @adicionar="$emit('adicionar', $event)" 
                    :categoria="categoria" 
                />
            </li>
            <p class="paragrafo dica">
                *Atenção: consideramos que você tem em casa sal, pimenta e água.
            </p>
        </ul>
        <div v-else>
            <div style="padding: 5em;">
                <div class="custom-loader"></div>
            </div>
        </div>
    </section>
    <Btn 
        @click="$emit('buscar', 'Mostrar receitas')"
        texto="Buscar Receitas"
        :desabilitado="ingredientes.length > 0 ? false : true"
      />
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    width: 100%;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
    margin-bottom: 2.5rem;
    }
}

/* loaader */

.custom-loader {
  width:50px;
  height:50px;
  border-radius:50%;
  background:conic-gradient(#0000 10%,#F0633C);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;
}
@keyframes s3 {to{transform: rotate(1turn)}}

</style>