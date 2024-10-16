<template>
    <head>
        <title :html="tituloPagina"></title>
    </head>
    <cabecalho-component />
    <destaques-component />
    <div class="container">
        <h2>Críticas</h2>
        <div class="row">
            <div class="col-6">
                <noticia-horizontal-component 
                    assuntoNoticia="Filmes" 
                    tituloNoticia="Os melhores filmes do ano 2000" 
                    :dataNoticia="dataNoticia"
                    resumoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
                    :imagemNoticia="imagemNoticiaHorizontal"
                    nomeAutor="Oliveto Vinicius"
                    :linkNoticia="linkAcesso"
                />
                <noticia-horizontal-component 
                    assuntoNoticia="Filmes" 
                    tituloNoticia="Os melhores filmes do ano 2000" 
                    :dataNoticia="dataNoticia"
                    resumoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
                    :imagemNoticia="imagemNoticiaHorizontal"
                    nomeAutor="Oliveto Vinicius"
                    :linkNoticia="linkAcesso"
                />
                <noticia-horizontal-component 
                    assuntoNoticia="Filmes" 
                    tituloNoticia="Os melhores filmes do ano 2000" 
                    :dataNoticia="dataNoticia"
                    resumoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
                    :imagemNoticia="imagemNoticiaHorizontal"
                    nomeAutor="Oliveto Vinicius"
                    :linkNoticia="linkAcesso"
                />
            </div>
        </div>
    </div>
    <rodape-component />
</template>

<script>
    import CabecalhoComponent from '../components/CabecalhoComponent.vue'
    import RodapeComponent from '../components/RodapeComponent.vue'
    import DestaquesComponent from '../components/DestaquesComponent.vue'
    import NoticiaHorizontalComponent from '../components/noticias/NoticiaHorizontalComponent.vue'

    export default {
        name: 'CriticasView',
        components: {
            CabecalhoComponent,
            RodapeComponent,
            DestaquesComponent,
            NoticiaHorizontalComponent
        },
        data() {
            return {
                tituloPagina: 'CINEMA! | Críticas',
                dataNoticia: new Date().toLocaleString(),
                imagemNoticiaHorizontal: require('../assets/img/noticias/img-noticia-horizontal.png'),
                linkAcesso: '/noticia'
            }
        },
        mounted() {
            document.title = this.tituloPagina
        },
    }
</script>

<style scoped>

</style>