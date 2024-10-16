<template>
    <div class="row">
        <div class="col-2">
            <a href="#" target="_blank">
                <img src="../../assets/img/noticias/img-criticas.png" alt="" class="mb-2 rounded">
                <p>Crítica</p>
            </a>
        </div>
        <div class="col-2">
            <a href="#" target="_blank">
                <img src="../../assets/img/noticias/img-criticas.png" alt="" class="mb-2 rounded">
                <p>Crítica</p>
            </a>
        </div>
        <div class="col-2">
            <a href="#" target="_blank">
                <img src="../../assets/img/noticias/img-criticas.png" alt="" class="mb-2 rounded">
                <p>Crítica</p>
            </a>
        </div>
        <div class="col-2">
            <a href="#" target="_blank">
                <img src="../../assets/img/noticias/img-criticas.png" alt="" class="mb-2 rounded">
                <p>Crítica</p>
            </a>
        </div>
        <div class="col-2">
            <a href="#" target="_blank">
                <img src="../../assets/img/noticias/img-criticas.png" alt="" class="mb-2 rounded">
                <p>Crítica</p>
            </a>
        </div>
        <div class="col-2">
            <a href="/criticas" target="_blank" class="fundo-criticas">
                <div>
                    <i class="fas fa-plus fa-3x"></i>
                    <p class="fst-italic">Ver todas as Críticas</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GrupoCriticasComponent',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #f1f1f1;
    }

    a:hover {
        text-decoration: none;
        color: #0d6efd;
    }

    img {
        border: 2px solid #282828;
    }

    img:hover {
        border: 2px solid #0d6efd;
    }

    .fundo-criticas {
        background-color: #282828;
        width: 128px;
        height: 214px;
        border: 2px solid #0d6efd;
        color: #0d6efd;
        text-align: center;
        display: flex;
        justify-content: center; 
        align-items: center;
        letter-spacing: -1px;
        font-size: 15.5px;
        border-radius: 5px;
    }

    .fundo-criticas:hover {
        background-color: #282828;
        width: 128px;
        height: 214px;
        border: 2px solid #f1f1f1;
        color: #f1f1f1;
        text-align: center;
        display: flex;
        justify-content: center; 
        align-items: center;
        letter-spacing: -1px;
        font-size: 15.5px;
        border-radius: 5px;
    }
</style>