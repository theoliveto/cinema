<template>
    <footer class="text-bg-dark mt-5">
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-6 col-md-2 mb-3">
                    <h5 class="linha mb-3">Filmes</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Oscar</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Bilheteria</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Críticas</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Notícias</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5 class="linha mb-3">Séries e TV</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Emmy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Críticas</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Notícias</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5 class="linha mb-3">HQs e Livros</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Comic Con</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Críticas</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">Notícias</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0" target="_blank">CCXP</a></li>
                    </ul>
                </div>

                <div class="col-md-5 offset-md-1 mb-3">
                    <form>
                        <h5>Inscreva-se para receber a nossa newsletter</h5>
                        <p>Semanalmente o melhor do mundo do cinema!</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <input id="newsletter" type="text" class="form-control" placeholder="Seu E-mail">
                            <button class="btn btn-primary" type="button">Inscrever</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="row py-3 border-top">
                <div class="col">
                    <img src="../assets/img/logo-branco.png" alt="" width="80">
                </div>
                <div class="col">
                    <p class="text-start">&copy; 2024. Todos os direitos reservados.</p>
                </div>
                <div class="col text-end">
                    <ul class="list-unstyled d-flex justify-content-end">
                        <li class="ms-3">
                            <a href="https://www.youtube.com/@olivetovinicius" target="_blank">
                                <i class="fa-brands fa-youtube fa-2xl"></i>
                            </a>
                        </li>
                        <li class="ms-3">
                            <a href="https://www.instagram.com/_oliveto/" target="_blank">
                                <i class="fa-brands fa-instagram fa-2xl"></i>
                            </a>
                        </li>
                        <li class="ms-3">
                            <a href="https://www.facebook.com/theoliveto/" target="_blank">
                                <i class="fa-brands fa-facebook fa-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'RodapeComponent'
    }
</script>

<style scoped>
    a {
        color: var(--bs-light);
    }

    a:hover {
        color: var(--bs-primary);
    }

    .linha {
        border-bottom: 2px solid #0d6efd;
        padding: 5px;
    }
</style>