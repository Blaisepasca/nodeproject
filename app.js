const express = require('express')
const app = express()
const port =3500

app.get('/',(req,res)=>{
    const page =__dirname + '/index.html'
    res.status(200)
    res.sendFile(page)
})
app.get('/contact',(req,res)=>{
    const page =__dirname + '/contact.html'
    res.status(200)
    res.sendFile(page)
}) 
app.get('/formulaire',(req,res)=>{
    const page = __dirname + '/formulaire.html'
    res.status(201)
    res.sendFile(page)
})
    


app.listen(port, ()=>{
    console.log('server on localhost:'+port.toString())
})