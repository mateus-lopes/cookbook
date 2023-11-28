
<script lang="ts">
import { obterReceitas } from '@/http/index';
import type { IReceita } from '@/interface/IReceitas';
import { verificaItens } from '@/operacoes/listas';
import CardCategoria from './CardCategoria.vue';
import CardReceita from './CardReceita.vue';
import Btn from './Btn.vue';
import type { PropType } from 'vue';

export default {
    components: {
      CardCategoria,
      Btn,
      CardReceita,
    },
    data() {
      return {
        receitas: [] as IReceita[],
        resposta: false,
      }
    },
    props: {
      ingredientes: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
    async created() {
      await obterReceitas()
        .then((receitasEncontradas) => {
          console.log(receitasEncontradas);
          this.receitas = receitasEncontradas.filter((receitaEncontrada) => {
            const receita =  verificaItens(receitaEncontrada.ingredientes, this.ingredientes);
            return receita;
          });
          this.resposta = true;
        })
        .catch((erro) => {
          console.log(erro);
        });
    },
}
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">
      Receitas
    </h1>
    <div v-if="resposta">
      <div class="text-center" v-if="receitas.length > 0">
        <h4 class="paragrafo titulo-sm">
          Resultados encontrados: {{ receitas.length  }}
        </h4>
        <p class="paragrafo-lg instrucoes">
          Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
        </p>
        <ul class="categorias">
          <li v-for="receita in receitas" :key="receita.nome">
            <card-receita :receita="receita" />
          </li>
        </ul>
      </div>
      <div class="text-center" v-else>
        <h4 class="paragrafo titulo-sm">
          Resultados encontrados: 0
        </h4>
        <p class="paragrafo-lg instrucoes">
          Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
        </p>
        <img src="../assets/imagens/sem-receitas.png" alt="ovo quebrado, sem receitas">
      </div>
    </div>
    <div v-else>
      <div style="padding: 5em;">
        <div class="custom-loader"></div>
      </div>
    </div>
  </section>
  <Btn 
      @click="$emit('buscar', 'Selecionar ingredientes')"
      texto="Editar ingredientes"
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

.titulo-sm {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
  font-weight: 400;
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