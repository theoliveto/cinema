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
          :linkNoticia="linkAcesso"
        />
      </div>
      <div class="col-3">
        <noticia-vertical-component 
          :imagemNoticia="imagemNoticiaVertical" 
          tituloNoticia="Os melhores filmes do ano 2000"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
      </div>
      <div class="col-3">
        
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <noticia-component 
          :imagemNoticia="imagemNoticiaVertical" 
          tituloNoticia="Os melhores filmes do ano 2000"
          subTituloNoticia="Confira a lista completa"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
      </div>
    </div>
  </div>
  <rodape-component />
  <cookies-component />
</template>

<script>
  import CabecalhoComponent from '../components/CabecalhoComponent.vue'
  import RodapeComponent from '../components/RodapeComponent.vue'
  import NoticiaHorizontalComponent from '../components/noticias/NoticiaHorizontalComponent.vue'
  import NoticiaVerticalComponent from '../components/noticias/NoticiaVerticalComponent.vue'
  import NoticiaComponent from '../components/noticias/NoticiaComponent.vue'
  import CookiesComponent from '../components/CookiesComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      CabecalhoComponent,
      RodapeComponent,
      NoticiaHorizontalComponent,
      NoticiaVerticalComponent,
      NoticiaComponent,
      CookiesComponent  
    },
    data() {
      return {
        dataNoticia: new Date().toLocaleString(),
        imagemNoticiaHorizontal: require('../assets/img/img-noticia-horizontal.png'),
        imagemNoticiaVertical: require('../assets/img/img-noticia-vertical.png'),
        linkAcesso: 'https://www.omelete.com.br/'
      }
    }
  }
</script>
