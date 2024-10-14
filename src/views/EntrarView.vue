<template>
    <head>
        <title :html="tituloPagina"></title>
    </head>
    <section class="mt-5">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="../assets/img/login.png" class="img-fluid" alt="" width="600">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4">
                    <form>
                        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p class="lead fw-normal mb-0 me-3">Entre com</p>
                        
                            <a href="" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>

                            <a href="" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </a>

                            <a href="" class="btn btn-primary btn-floating mx-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0">Ou</p>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="email" id="email" class="form-control form-control-lg" placeholder="exemplo@email.com" />
                        </div>

                        <div class="form-outline mb-3 input-container">
                            <input :type="inputType" v-model="password" @input="handleInput" id="senha" class="form-control form-control-lg" placeholder="Senha" />
                            <span @click="togglePasswordType">
                                <i class="fa fa-eye" v-if="!showPassword"></i>
                                <i class="fa fa-eye-slash" v-else></i>
                            </span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="lembre" />
                                <label class="form-check-label" for="lembre">Lembre-me</label>
                            </div>
                            <a href="#!" class="text-body">Esqueci minha senha</a>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button  type="button" class="btn btn-primary btn-lg px-3">Login</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Não Possui uma conta? <a href="/cadastrar" class="link-danger" target="_blank">Cadastre-se</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'EntrarView',
        components: {

        },
        data() {
            return {
                tituloPagina: 'CINEMA! | Entrar',
                password: '',
                showPassword: false,
                inputType: 'password',
            }
        },
        mounted() {
            document.title = this.tituloPagina
        },
        methods: {
            togglePasswordType() {
                this.showPassword = !this.showPassword;
                this.inputType = this.showPassword ? 'text' : 'password';
            },
            handleInput(event) {
                this.password = event.target.value;
            },
        },
    }
</script>

<style scoped>
    .divider:after, .divider:before {
        content: "";
        flex: 1;
        height: 1px;
        background: #eee;
    }

    .h-custom {
        height: calc(100% - 73px);
    }

    @media (max-width: 450px) {
        .h-custom {
            height: 100%;
        }
    }

    .input-container {
        position: relative;
    }

    .input-container input {
        padding-right: 30px; 
    }

    .input-container span {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
</style>