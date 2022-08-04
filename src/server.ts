import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'


//Ddotenv para nossa porta
dotenv.config()

//configurando servidor
const server = express()

//configurando o mustache
server.set('view engine', 'mustache')
//diretorio em que colocaremos nossos arquivos mustache
server.set('views',path.join(__dirname, 'views'))
//template engines do mustache
server.engine('mustache',mustache())

//diretorio da pasta estatica
server.use(express.static(path.join(__dirname,'../public')))

//habilitando servidor
server.listen(process.env.PORT)