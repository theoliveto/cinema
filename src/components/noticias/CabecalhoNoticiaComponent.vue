<template>
    <div class="mt-3 d-flex justify-content-center">
        <img :src="imgNoticia" alt="" class="mb-3">
    </div>
    <h1>{{ tituloNoticia }}</h1>
    <h3>{{ subTituloNoticia }}</h3>
    <p class="mt-3 mb-3"><i class="far fa-clock"></i> {{ tempoLeituraNoticia }}</p>
    <p><a :href="linkAutor" class="autor fst-italic" target="_blank">{{ autorNoticia }}</a></p>
    <p><small>{{ dataNoticia }}</small></p>
</template>

<script>
    export default {
        name: 'CabecalhoNoticiaComponent',
        props: {
            imgNoticia: {
                type: String,
                required: true
            },
            tituloNoticia: {
                type: String,
                required: true
            },
            subTituloNoticia: {
                type: String,
                required: true
            },
            tempoLeituraNoticia: {
                type: String,
                required: true
            },
            autorNoticia: {
                type: String,
                required: true
            },
            linkAutor: {
                type: String,
                required: true
            },
            dataNoticia: {
                type: String,
                required: true
            },
        }
    }
</script>

<style scoped>
    img {
        border-radius: 5px;
    }

    h1 {
        letter-spacing: -1px;
        color: #0d6efd;
        font-weight: 900;
    }

    h3 {
        letter-spacing: -1px;
        color: #282828;
        font-weight: 900;
    }

    a.autor {
        text-transform: uppercase;
        border-bottom: 3px solid #0d6efd;
        text-decoration: none;
        padding: 3px;
        font-weight: 900;
        color: #282828;
        margin-bottom: -50px;
    }

    small {
        font-size: 12.5px;
    }
</style>