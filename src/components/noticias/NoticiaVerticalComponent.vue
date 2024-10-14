<template>
    <div>
        <img :src="imagemNoticia" alt="">
        <h3>Título Notícia</h3>
        <p>Descrição Notícia</p>
        <small>Data Notícia</small>
    </div>
</template>

<script>
    export default {
        name: 'NoticiaVerticalComponent',
        props: {
            imagemNoticia: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>