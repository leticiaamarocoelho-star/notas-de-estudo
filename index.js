import express from 'express'
const app = express()
app.use(express.json()) 

//atividade 1
app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ resultado: num1 + num2})
})


//atividade 2
app.get("/api/salario", (req, res) =>{
    const qtde = Number(req.query.qtde)
    const valor = Number(req.query.valor)
    res.send({ resultado:qtde*valor})
})


//atividade 3
app.get("/api/pessoa/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
    const pessoapeso1 = Number(req.params.peso1)
    const pessoapeso2 = Number(req.params.peso2)
    const pessoapeso3 = Number(req.params.peso3)
    const pessoapeso4 = Number(req.params.peso4)
    const pessoapeso5 = Number(req.params.peso5)

    const resultado = pessoapeso1 + pessoapeso2 + pessoapeso3 + pessoapeso4 + pessoapeso5
    const media = resultado / 5
    res.send( ressultado = resultado / 5)
})


//atividade 4 
app.get("/api/celsius-fahrenheit", (req, res) => {
    const celsius = Number(req.query.celsius)
    const fahrenheit = (9*celsius + 160) / 5
    res.send({resultado: fahrenheit})
})
//atividade 5
app.get("/api/distancia/:milha", (req, res) => {
    const milhas = Number(req.params.milha)
    const km = mmilhas * 1.60934
    res.send({resultado: km})
})

//atividade 6 
app.get("/api/tempo/:segundos", (req, res) => {
    const segundosTotais = Number(req.params.segundos)
    const horas = Math.floor(segundosTotais / 3600)
    const minutos = Math.floor((segundosTotais % 3600) / 60)
    const segundos = segundosTotais % 60
    res.send({ resultado: `${horas} horas, ${minutos} minutos, ${segundos} segundos`})
})




//atividade 7
app.get("/api/medidas/:quilometro", (req, res) => {
    const km = Number(req.params.quilometro)
    const metros = km * 1000
    const centimetros = metros * 100
    res.send({resultado: { quilometros: km, metros, sentimetros} })
})



//atividade 8
app.get("/api/tabuada/:numero", (req, res) => {
    const numero = Number(req.params.numero)
    const tabela = []
    for (let i = 0; i <= 10; i++) {
        tabela.push(`${numero} x ${i} = ${numero * i}`)
    }
    res.send({resultado: tabela})
})





// POST e PULL

// Exemplo Post
app.post("/api/somar", (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2

  res.send({ mesage: num1 + num2 })
})




//atividade 9
app.post("/api/medianotas", (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    const n3 = req.body.n3

    if (media >= 7){
        console.log("aprovado")
    } else {
        console.log("reprovado")
    }

    const resultado = n1 + n2 + n3
    const media = resultado / 3
    res.send({resultado: media})
})






//subtracao teste
app.get("/api/:subtracao/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    res.send({message: num1 - num2})
})
  
//divisao teste
app.get("/api/:divisao/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    res.send({message: num1 / num2 })
    
})

//multiplicacao teste

app.get("/api/multiplicacao/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)

    const resultadoMultip = (num1 * num2);

    res.send({message:resultadoMultip})
})


app.listen(3000, () => {
    console.log('Server is on http://localhost:3000')
})

