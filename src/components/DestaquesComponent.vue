<template>
    <div class="bg-secondary">
        <div class="container p-3 d-flex justify-content-center">
            <span class="fst-italic fw-semibold">Destaques: </span> <a href="#" class="mx-2" target="_blank">LOBOS NA APPLE TV+: COMECE SEU TESTE GRÁTIS. CONFIRA CONDIÇÕES.</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DestaquesComponent'
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        letter-spacing: -1px;
        color: #f1f1f1;
    }

    a:hover {
        text-decoration: underline;
        letter-spacing: -1px;
        color: #282828;
    }
</style>