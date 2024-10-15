<template>
    <head>
        <title :html="tituloPagina"></title>
    </head>
    <div class="container">
        <form @submit.prevent="cadastrarUsuario">
            <div class="py-5">
                <img class="d-block mx-auto mb-3" src="../assets/img/logo-preto.png" alt="" width="150">
                <h2>Faça seu cadastro</h2>
                <p class="text-primary-emphasis text-center">Preencha o formulário abaixo para criar sua conta e acessar todas as funcionalidades exclusivas do nosso site.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-8 card p-4">
                    <h4 class="d-flex justify-content-between mb-3">Seus Dados</h4>
                    <form action="" method="POST" class="row g-3 text-start">
                        <div class="col-sm-4">
                            <label for="nome" class="form-label">Nome</label>
                            <input v-model="formData.nome" type="text" class="form-control" id="nome" required>
                        </div>

                        <div class="col-sm-4">
                            <label for="sobrenome" class="form-label">Sobrenome</label>
                            <input v-model="formData.sobrenome" type="text" class="form-control" id="sobrenome" required>
                        </div>

                        <div class="col-sm-4">
                            <label for="nascimento" class="form-label">Data de Nascimento</label>
                            <input v-model="formData.nascimento" type="date" class="form-control" id="nascimento" required>
                        </div>

                        <div class="col-sm-6">
                            <label for="usuario" class="form-label">Usuário</label>
                            <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input v-model="formData.usuario" type="text" class="form-control" id="usuario" required>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="email" class="form-label">E-mail</label>
                            <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="exemplo@email.com" required>
                        </div>
                    </form>
                </div>
                <div class="col-md-8 mt-3 card p-4">
                    <h4 class="d-flex justify-content-between mb-3">Localização</h4>
                    <form action="" method="POST" class="row g-3 text-start">
                        <div class="col-md-12">
                            <label for="endereco" class="form-label">Endereço</label>
                            <input v-model="formData.endereco" type="text" class="form-control" id="endereco" required>
                        </div>
                        <div class="col-md-6">
                            <label for="bairro" class="form-label">Bairro</label>
                            <input v-model="formData.bairro" type="text" class="form-control" id="bairro" required>
                        </div>
                        <div class="col-md-6">
                            <label for="complemento" class="form-label">Complemento</label>
                            <input v-model="formData.complemento" type="text" class="form-control" id="complemento" required>
                        </div>
                        <div class="col-md-4">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input v-model="formData.cidade" type="text" class="form-control" id="cidade" required>
                        </div>
                        <div class="col-md-4">
                            <label for="estado" class="form-label">Estado</label>
                            <select v-model="formData.estado" id="estado" class="form-select" required>
                                <option selected value="">Escolha...</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="cep" class="form-label">CEP</label>
                            <input v-model="formData.cep" type="text" class="form-control" id="cep" required>
                        </div>
                    </form>
                </div>
                <div class="col-md-8 mt-1">
                    <form class="row mt-2">
                        <div class="col-12 text-start">
                            <div class="form-check mt-3">
                                <input v-model="formData.termos" type="checkbox" class="form-check-input" id="termos">
                                <label class="form-check-label" for="termos">Li e Concordo com os Termos de Uso e Responsabilidade</label>
                            </div>

                            <div class="form-check">
                                <input v-model="formData.login" type="checkbox" class="form-check-input" id="login">
                                <label class="form-check-label" for="login">Manter meu login salvo para próximos acessos</label>
                            </div>
                        </div>
                    </form>
                    <form class="row mt-3 mb-5">
                        <div class="col-12">
                            <button class="w-100 btn btn-primary btn-lg mt-3" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'CadastrarView',
        data() {
            return {
                tituloPagina: 'CINEMA! | Cadastro',
                formData: {
                    nome: '',
                    sobrenome: '',
                    nascimento: '',
                    usuario: '',
                    email: '',
                    endereco: '',
                    bairro: '',
                    complemento: '',
                    cidade: '',
                    estado: '',
                    cep: '',
                    termos: '',
                    login: ''
                }
            }
        },
        mounted() {
            document.title = this.tituloPagina
        },
        methods: {
            cadastrarUsuario() {
                axios.post('http://localhost:8080/cadastrar', this.formData)
                    .then(response => {
                        alert(response.data.message)
                    })
                    .catch(error => {
                        console.error(error)
                        alert('Ocorreu um erro ao registrar o usuário.')
                    })
            }
        }
    }
</script>

<style scoped>
    h2 {
        font-weight: 900;
        color: #0d6efd;
        text-align: center;
        letter-spacing: -1px;
        margin-top: 50px;
    }
</style>