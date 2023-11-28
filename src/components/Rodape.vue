<template>
    <div class="rodape">
        <p>Desenvolvido por <a target="_blank" href="https://github.com/mateus-lopes">mateus-lopes</a> | 2023 - Projeto fictício sem fins comerciais.</p>
        <small>Desing retirado de <a target="_blank" href="https://www.alura.com.br/">Alura</a></small>
    </div>
</template>

<style>
.rodape {
    text-align: center;
    width: 100%;
    padding: 2em;
    color: white;
    background-color: #263A29;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.rodape a {
    color: var(--coral, #f0633c);
    text-decoration: none;
}

.rodape small {
    font-size: 1em;
    padding-top: 1em;
}

</style>