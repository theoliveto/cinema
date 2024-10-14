<template>
    <div>
        <img :src="imagemNoticia" alt="" width="300">
        <small class="mb-3 linha">{{ dataNoticia }}</small>
        <h3>{{ tituloNoticia }}</h3>
        <p>{{ assuntoNoticia }} <a :href="linkNoticia" target="_blank">Ver mais</a></p>
    </div>
</template>

<script>
    export default {
        name: 'NoticiaVerticalComponent',
        props: {
            assuntoNoticia: {
                type: String,
                required: true
            },
            tituloNoticia: {
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

    small {
        font-size: 13px;
    }

    h3 {
        font-weight: 900;
        color: #0d6efd;
        margin-top: 20px;
        text-align: justify;
        letter-spacing: -1px;
    }

    h3:hover {
        font-weight: 900;
        color: #000;
        margin-top: 20px;
        text-align: justify;
        cursor: pointer;
        letter-spacing: -1px;
    }

    p {
        text-align: justify;
    }

    a {
        text-decoration: none;
        color: #0d6efd;
    }

    a:hover {
        text-decoration: underline;
        color: #000;
    }

    .linha {
        border-bottom: 2px solid #0d6efd;
        padding: 2px;
    }
</style>