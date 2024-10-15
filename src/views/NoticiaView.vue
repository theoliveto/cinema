<template>
    <head>
        <title :html="tituloPagina"></title>
    </head>
    <cabecalho-component />
    <destaques-component />
    <div class="container">
        <cabecalho-noticia-component 
            :imgNoticia="imagem"
            :tituloNoticia="titulo"
            :subTituloNoticia="subTitulo"
            :tempoLeituraNoticia="tempoLeitura"
            :autorNoticia="autor"
            :linkAutor="link"
            :dataNoticia="data"
        />

        <div class="row">
            <div class="col-8">
                <corpo-noticia-component />
            </div>
            <div class="col-1"></div>
            <div class="col-3">
                <aside-component />
            </div>
        </div>
    </div>
    <rodape-component />
</template>

<script>
    import CabecalhoComponent from '../components/CabecalhoComponent.vue'
    import RodapeComponent from '../components/RodapeComponent.vue'
    import DestaquesComponent from '../components/DestaquesComponent.vue'
    import CabecalhoNoticiaComponent from '../components/noticias/CabecalhoNoticiaComponent.vue'
    import CorpoNoticiaComponent from '../components/noticias/CorpoNoticiaComponent.vue'
    import AsideComponent from '../components/AsideComponent.vue'

    export default {
        name: 'NoticiaView',
        components: {
            CabecalhoComponent,
            RodapeComponent,
            DestaquesComponent,
            CabecalhoNoticiaComponent,
            CorpoNoticiaComponent,
            AsideComponent
        },
        mounted() {
            document.title = this.tituloPagina
        },
        data() {
            return {
                noticia: {},
                tituloPagina: 'CINEMA! | Filmes',
                imagem: require('../assets/img/noticias/img-noticia.png'),
                titulo: 'Os melhores filmes do ano 2000',
                subTitulo: 'Missão: Impossível 2, Gladiador e muito mais.',
                tempoLeitura: '10 min de leitura',
                autor: 'Oliveto Vinicius',
                link: 'https://www.instagram.com/_oliveto/',
                data: new Date().toLocaleString(),
            }
        },
    }
</script>

<style scoped>
    
</style>