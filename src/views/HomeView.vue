<template>
  <cabecalho-component />

  <rodape-component />
</template>

<script>
  import CabecalhoComponent from '../components/CabecalhoComponent.vue'
  import RodapeComponent from '../components/RodapeComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      CabecalhoComponent,
      RodapeComponent
    }
  }
</script>
