<template>
    <div class="position-sticky">
        <h4 class="fst-italic">{{ tituloPrincipal }}</h4>
        <ul class="list-unstyled">
            <li v-for="item in items" :key="item.id">
                <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <img :src="item.img" alt="" class="bd-placeholder-img"> 
                    <div class="col-lg-8">
                        <h6 class="mb-0">{{ item.titulo }}</h6>
                        <small class="text-body-secondary">{{ item.data }}</small>
                    </div>
                </a>
            </li>
        </ul>

        <div class="p-4">
            <h4 class="fst-italic">Arquivos</h4>
            <ol class="list-unstyled mb-0">
                <li v-for="arquivo in arquivos" :key="arquivo.id">
                    <a href="#" target="_blank">{{ arquivo.mes }}</a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AsideComponent',
        data() {
            return {
                items: [
                    { id: 1, img: require ('../assets/img/noticias/img-noticias-recentes.png'), titulo: 'Cronologia Universo da Marvel', data: new Date().toLocaleString() },
                    { id: 2, img: require ('../assets/img/noticias/img-noticias-recentes.png'), titulo: 'Teoria da Pixar', data: new Date().toLocaleString() },
                    { id: 3, img: require ('../assets/img/noticias/img-noticias-recentes.png'), titulo: 'Melhores Séries da Nickelodeon', data: new Date().toLocaleString() },
                    { id: 4, img: require ('../assets/img/noticias/img-noticias-recentes.png'), titulo: 'Relembre dos desenhos da Cartoon Network', data: new Date().toLocaleString() }
                ],
                arquivos: [
                    { id: 1, mes: 'Janeiro' },
                    { id: 2, mes: 'Fevereiro' },
                    { id: 3, mes: 'Março' },
                    { id: 4, mes: 'Abril' },
                    { id: 5, mes: 'Maio' },
                    { id: 6, mes: 'Junho' },
                    { id: 7, mes: 'Julho' },
                    { id: 8, mes: 'Agosto' },
                    { id: 9, mes: 'Setembro' },
                    { id: 10, mes: 'Outubro' },
                    { id: 11, mes: 'Novembro' },
                    { id: 12, mes: 'Dezembro' },
                ]
            }
        },
        props: {
            tituloPrincipal: {
                type: String,
                require: true
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #282828;
    }

    a:hover {
        border-bottom: 2px solid #282828;
        padding: 2px;
        color: #0d6efd;
    }
</style>