<template>
  <cabecalho-component />
  <destaques-component />
  <carousel-component />
  <div class="container-xxl mt-5 mb-4">
    <div class="row">
      <div class="col-3">
        <noticia-vertical-component 
          :imagemNoticia="imagemNoticiaVertical" 
          tituloNoticia="Os melhores filmes do ano 2000"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
        <noticia-vertical-component 
          :imagemNoticia="imagemNoticiaVertical" 
          tituloNoticia="Os melhores filmes do ano 2000"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
      </div>
      <div class="col-6">
        <noticia-component 
          :imagemNoticia="imagemNoticiaPrincipal" 
          tituloNoticia="Os melhores filmes do ano 2000"
          subTituloNoticia="Confira a lista completa"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
        <noticia-component 
          :imagemNoticia="imagemNoticiaPrincipal" 
          tituloNoticia="Os melhores filmes do ano 2000"
          subTituloNoticia="Confira a lista completa"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
        <noticia-component 
          :imagemNoticia="imagemNoticiaPrincipal" 
          tituloNoticia="Os melhores filmes do ano 2000"
          subTituloNoticia="Confira a lista completa"
          assuntoNoticia="Em 2000, Gladiador e O Tigre e o Dragão lideraram, são uns dos melhores filmes de 2000."
          :dataNoticia="dataNoticia"
          :linkNoticia="linkAcesso"
        />
      </div>
      <div class="col-3">
        <aside-component tituloPrincipal="Notícias Recentes" />
      </div>
      <div class="col-12">
        <criticas-component />
      </div>
    </div>
  </div>

  <div class="container-fluid divisor"></div>

  <div class="container-xxl mt-5">
    <h2>Últimas Noticias</h2>
    <a href="" class="fst-italic">Ver mais</a>
    <hr>
    <div class="row mt-5">
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
      <div class="col-1"></div>
      <div class="col-5">
        <aside-component tituloPrincipal="Listas" />
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
  import AsideComponent from '../components/AsideComponent.vue'
  import DestaquesComponent from '../components/DestaquesComponent.vue' 
  import CarouselComponent from '../components/CarouselComponent.vue'
  import CriticasComponent from '../components/criticas/CriticasComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      CabecalhoComponent,
      RodapeComponent,
      NoticiaHorizontalComponent,
      NoticiaVerticalComponent,
      NoticiaComponent,
      CookiesComponent,
      AsideComponent,
      DestaquesComponent,
      CarouselComponent,
      CriticasComponent
    },
    data() {
      return {
        dataNoticia: new Date().toLocaleString(),
        imagemNoticiaHorizontal: require('../assets/img/noticias/img-noticia-horizontal.png'),
        imagemNoticiaVertical: require('../assets/img/noticias/img-noticia-vertical.png'),
        imagemNoticiaPrincipal: require('../assets/img/noticias/img-noticia-principal.png'),
        linkAcesso: '/noticia'
      }
    }
  }
</script>

<style scoped>
  .divisor {
    background-color: #0d6efd;
    height: 20px;
    box-shadow: 1px 3px 3px #282828;
  }

  h2 {
    letter-spacing: -1px;
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: #0d6efd;
    text-transform: uppercase;
  }

  a:hover {
    text-decoration: none;
    color: #282828;
    text-transform: uppercase;
  }
</style>
