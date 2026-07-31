//console.log("oi")
import express from 'express'//type module
//const express = require("express") // type commun JS


// inicializando o express - new
const app = express()

app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({message: num1 + num2 })
     //const exemplo = "batata"
    //let exemploalterar = 0 
    //exemploalterar = 1
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})