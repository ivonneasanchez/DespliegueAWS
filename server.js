import Express from 'express'
import Path from 'path'
import {connect_SQL, insertar_usuario} from './db.js'

const app = Express()
const dir = Path.resolve()
const dir_front = "frontend/build"

app.use(Express.static(dir_front))
app.use(Express.json())
app.use(Express.urlencoded({}))

app.listen('80', function(){
    console.log ("El Servidor ha iniciado...")
    //connect_SQL()
})

app.get('/', function(req, res){
    console.log (dir)
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.get("/registro_page", function(req, res){
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.get("/consulta_page", (req, res) =>{
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.get("/contacto_page", function(req, res){
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.post("/registrar_Usuario", function(req,res){
    connect_SQL()
    let {id, nombre, email, passw} = req.body
   console.log(id + " " + nombre + " " + email)
    connect_SQL()
    insertar_usuario(id, nombre, email, passw)
    res.redirect("/")
})
