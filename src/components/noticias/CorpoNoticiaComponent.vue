<template>
    <ul v-for="posicao in posicoes" :key="posicao.id" class="list-unstyled">
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
                posicoes: [
                    { id: 1, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2 (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 2, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: '60 Segundos (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 3, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Duelo de Titãs (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 4, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'A Fuga das Galinhas (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 5, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Jogo Duro (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 6, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Velozes e Furiosos (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 7, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Jogo de Espiões (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 8, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Monstros S.A (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 9, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Hora do Rush 2 (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 10, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Shrek (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 11, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Missão: Impossível 2 (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 12, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: '60 Segundos (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 13, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Duelo de Titãs (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 14, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'A Fuga das Galinhas (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 15, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Jogo Duro (2000)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 16, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Velozes e Furiosos (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 17, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Jogo de Espiões (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 18, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Monstros S.A (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 19, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Hora do Rush 2 (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                    { id: 20, imgLista: require('../../assets/img/noticias/img-lista.png'), tituloPosicao: 'Shrek (2001)', descricaoPosicao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' }
                ]
            }
        }
    }
</script>

<style scoped>
    p {
        text-align: justify;
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