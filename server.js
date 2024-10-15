const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
})

connection.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Conectado ao Banco de Dados!')
})

app.post('/cadastrar', (req, res) => {
    const { DS_USUARIO, DS_NOME, DS_SOBRENOME, DT_NASCIMENTO, DS_EMAIL, DS_ENDERECO, DS_BAIRRO, DS_COMPLEMENTO, DS_CIDADE, DS_ESTADO, DS_CEP, X_TERMOS_DE_USO, X_LOGIN_SALVO } = req.body

    const sql = 'INSERT INTO TBL_USUARIOS (DS_USUARIO, DS_NOME, DS_SOBRENOME, DT_NASCIMENTO, DS_EMAIL, DS_ENDERECO, DS_BAIRRO, DS_COMPLEMENTO, DS_CIDADE, DS_ESTADO, DS_CEP, X_TERMOS_DE_USO, X_LOGIN_SALVO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

    connection.query (sql, [DS_USUARIO, DS_NOME, DS_SOBRENOME, DT_NASCIMENTO, DS_EMAIL, DS_ENDERECO, DS_BAIRRO, DS_COMPLEMENTO, DS_CIDADE, DS_ESTADO, DS_CEP, X_TERMOS_DE_USO, X_LOGIN_SALVO], (err, result) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.send({ message: 'Usuário registrado com sucesso!' })
    })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})