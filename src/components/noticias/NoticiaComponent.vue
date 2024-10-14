<template>
    <div class="largura-componente">
        <img :src="imagemNoticia" alt="">
        <small class="mb-3 d-block"><i class="far fa-clock"></i> {{ dataNoticia }}</small>
        <h2>{{ tituloNoticia }}</h2>
        <h5 class="text-primary-emphasis">{{ subTituloNoticia }}</h5>
        <p>{{ assuntoNoticia }}</p>
        <a :href="linkNoticia" class="btn btn-outline-primary" target="_blank">Ver mais</a>
    </div>
</template>

<script>
    export default {
        name: 'NoticiaComponent',
        props: {
            assuntoNoticia: {
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
            dataNoticia: {
                type: String,
                required: true
            },
            imagemNoticia: {
                type: String,
                required: true
            },
            linkNoticia: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    img {
        border-radius: 5px;
        margin-bottom: 5px;
    }

    h2 {
        font-weight: 900;
        color: #0d6efd;
        margin-top: 20px;
        letter-spacing: -1px;
    }

    h2:hover {
        font-weight: 900;
        color: #000;
        margin-top: 20px;
        cursor: pointer;
        letter-spacing: -1px;
    }

    small {
        font-size: 13px;
    }

    .largura-componente {
        width: 500px;
    }
</style>