<template>
  <cabecalho-component />
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <noticia-horizontal-component 
          assuntoNoticia="Filmes" 
          tituloNoticia="Os melhores filmes do ano 2000" 
          :dataNoticia="dataNoticia"
          resumoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :imagemNoticia="imagemNoticiaHorizontal"
          nomeAutor="Oliveto Vinicius"
        />
      </div>
      <div class="col-6">
        <noticia-vertical-component :imagemNoticia="imagemNoticiaVertical" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        
      </div>
      <div class="col-6">
        
      </div>
    </div>
  </div>
  <rodape-component />
</template>

<script>
  import CabecalhoComponent from '../components/CabecalhoComponent.vue'
  import RodapeComponent from '../components/RodapeComponent.vue'
  import NoticiaHorizontalComponent from '../components/noticias/NoticiaHorizontalComponent.vue'
  import NoticiaVerticalComponent from '../components/noticias/NoticiaVerticalComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      CabecalhoComponent,
      RodapeComponent,
      NoticiaHorizontalComponent,
      NoticiaVerticalComponent
    },
    data() {
      return {
        dataNoticia: new Date().toLocaleString(),
        imagemNoticiaHorizontal: require('../assets/img/img-noticia-horizontal.png'),
        imagemNoticiaVertical: require('../assets/img/img-noticia-vertical.png')
      }
    }
  }
</script>
