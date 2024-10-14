<template>
    <p>{{ primeiroParagrafo }}</p>
    <p>{{ segundoParagrafo }}</p>
    <ul v-for="posicao in posicoes" :key="posicao.id">
        <li>
            <img :src="posicao.imgLista" alt="" class="mb-3">
            <h3>{{ posicao.id }}° {{ posicao.tituloPosicao }}</h3>
            <p>{{ posicao.descricaoPosicao }}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CorpoNoticiaComponent',
        data() {
            return {
                primeiroParagrafo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                segundoParagrafo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                posicoes: [
                    { id: 1, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 2, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 3, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 4, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 5, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 6, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 7, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 8, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 9, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 10, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' }
                ]
            }
        }
    }
</script>

<style scoped>
    p {
        text-align: justify;
    }

    ul {
        list-style: none;
        margin-left: -30px;
    }

    img {
        border-radius: 5px;
        margin-top: 20px;
    }

    h3 {
        font-weight: 900;
        letter-spacing: -1px;
        border-bottom: 3px solid #0d6efd;
        padding: 10px;
        margin-bottom: 20px;
        margin-top: 10px
    }
</style>