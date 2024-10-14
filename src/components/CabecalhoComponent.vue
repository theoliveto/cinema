<template>
    <header class="text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <div class="col-md-3 mb-2 mb-md-0 text-start">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src="../assets/img/logo-branco.png" alt="" width="90">
                    </a>
                </div>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 me-2 linha">Filmes</a></li>
                    <li><a href="#" class="nav-link px-2 me-2 linha">Séries</a></li>
                    <li><a href="#" class="nav-link px-2 me-2 linha">HQS</a></li>
                    <li><a href="#" class="nav-link px-2 me-2 linha">Música</a></li>
                    <li><a href="#" class="nav-link px-2 linha">Livros</a></li>
                </ul>

                <div class="col-md-3 text-end">
                    <a href="/entrar" target="_blank" class="btn btn-outline-light btn-entrar me-2">Entrar</a>
                    <a href="/cadastrar" target="_blank" class="btn btn-primary text-light">Cadastrar</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'CabecalhoComponent'
    }
</script>

<style scoped>
    a {
        color: var(--bs-light);
    }

    a:hover {
        color: var(--bs-primary);
    }

    .btn-entrar:hover {
        color: var(--bs-dark);
    }

    .linha {
        border-bottom: 2px solid #0d6efd;
        padding: 2px;
    }
</style>