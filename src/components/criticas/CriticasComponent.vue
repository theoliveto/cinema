<template>
    <div class="card mt-5 mb-5 p-3 bg-dark">
        <div class="card-body">
            <h4 class="fw-bolder mb-3 ">Últimas Criticas</h4>
            <grupo-criticas-component />
        </div>
    </div>
</template>

<script>
    import GrupoCriticasComponent from './GrupoCriticasComponent.vue';

    export default {
        name: 'CriticasComponent',
        components: {
            GrupoCriticasComponent
        },
        data() {
            return {
                
            }
        }
    }   
</script>

<style scoped>
    h4 {
        letter-spacing: -1px;
        color: #f1f1f1;
    }
</style>