<template>
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis">{{ assuntoNoticia }}</strong>
            <h4 class="mb-1">{{ tituloNoticia }}</h4>
            <small class="mb-4 text-body-secondary">{{ dataNoticia }}</small>
            <p class="card-text mb-auto">{{ resumoNoticia }}</p>
            <div class="row">
                <div class="col">
                    <a :href="linkNoticia" class="icon-link gap-1 icon-link-hover stretched-link" target="_blank">
                        Continue lendo
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
                <div class="col ms-5">
                    <small>Por: <strong>{{ nomeAutor }}</strong></small>
                </div>
            </div>
        </div>
        <div class="col-auto d-none d-lg-block">
            <img :src="imagemNoticia" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NoticiaHorizontalComponent',
        data() {
            return {
               
            }
        },
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
            resumoNoticia: {
                type: String,
                required: true
            },
            imagemNoticia: {
                type: String,
                required: true
            },
            nomeAutor: {
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
    a {
        text-decoration: none;
    }

    p {
        font-size: 14px;
    }

    small {
        font-size: 13px;
    }

    h4 {
        font-weight: 900;
        color: #0d6efd;
        text-align: justify;
        letter-spacing: -1px;
    }
</style>