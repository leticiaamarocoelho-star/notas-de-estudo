//console.log("oi")
import express from 'express'//type module
//const express = require("express") // type commun JS

// inicializando o express - new
const app = express()
app.use(express.json())


//ativiadade 1
app.post("/api/somar", (req, res) => {
   const num1 = req.body.num1
   const num2 = req.body.num2
   res.send({resultado: num1 + num2 })
    //const exemplo = "batata"
   //let exemploalterar = 0
   //exemploalterar = 1
})
//atividade 2
app.post("/api/salario", (req, res) => {
   const qtde = req.body.qtde
   const valor = req.body.valor
   res.send({ resultado: qtde * valor })
})
//atividade 3 - media do peso de 5 pessoas
app.post("/api/media-peso", (req, res) => {
   const pesos = req.body.pesos // array com 5 pesos
   const soma = pesos.reduce((acc, p) => acc + p, 0)
   const media = soma / pesos.length
   res.send({ resultado: media })
})
//atividade 4 - celsius para fahrenheit
app.post("/api/celsius-fahrenheit", (req, res) => {
   const celsius = req.body.celsius
   const fahrenheit = (9 * celsius + 160) / 5
   res.send({ resultado: fahrenheit })
})
//atividade 5 - milhas para km
app.post("/api/milhas-km", (req, res) => {
   const milhas = req.body.milhas
   const km = milhas * 1.60934
   res.send({ resultado: km })
})
//atividade 6 - segundos para horas, minutos e segundos
app.post("/api/segundos-para-hms", (req, res) => {
   const totalSegundos = req.body.segundos
   const horas = Math.floor(totalSegundos / 3600)
   const minutos = Math.floor((totalSegundos % 3600) / 60)
   const segundos = totalSegundos % 60
   res.send({ horas, minutos, segundos })
})
//atividade 7 - km para metros e centimetros
app.post("/api/km-para-m-cm", (req, res) => {
   const km = req.body.km
   const metros = km * 1000
   const centimetros = km * 100000
   res.send({ metros, centimetros })
})
//atividade 8 - tabuada de um numero (0 a 10)
app.post("/api/tabuada", (req, res) => {
   const numero = req.body.numero
   const tabuada = []
   for (let i = 0; i <= 10; i++) {
       tabuada.push({ multiplicador: i, resultado: numero * i })
   }
   res.send({ resultado: tabuada })
})
//desafio 0 - idade em anos, meses e dias
app.post("/api/idade-meses-dias", (req, res) => {
   const anos = req.body.anos
   const meses = anos * 12
   const dias = anos * 365
   res.send({ anos, meses, dias })
})
//desafio 1 - trocar valores de A e B
app.post("/api/trocar-valores", (req, res) => {
   let a = req.body.a
   let b = req.body.b
   const original = { a, b }
   const aux = a
   a = b
   b = aux
   res.send({ original, aposTroca: { a, b } })
})
//desafio 2 - qual dos dois numeros e o maior
app.post("/api/maior-dois", (req, res) => {
   const a = req.body.a
   const b = req.body.b
   const maior = a > b ? a : b
   res.send({ resultado: maior })
})
//atividade 9 - situacao do aluno (media de tres notas)
app.post("/api/situacao-aluno", (req, res) => {
   const { nota1, nota2, nota3 } = req.body
   const media = (nota1 + nota2 + nota3) / 3
   let situacao = ""
   if (media >= 7) {
       situacao = "Aprovado"
   } else if (media >= 5) {
       situacao = "Recuperação"
   } else {
       situacao = "Reprovado"
   }
   res.send({ media, situacao })
})
//atividade 10 - peso ideal
app.post("/api/peso-ideal", (req, res) => {
   const { sexo, altura } = req.body
   let pesoIdeal = 0
   if (sexo === "H") {
       pesoIdeal = (72.7 * altura) - 58
   } else {
       pesoIdeal = (62.1 * altura) - 44.7
   }
   res.send({ resultado: pesoIdeal })
})
//atividade 11 - operacao matematica
app.post("/api/operacao-matematica", (req, res) => {
   const { num1, num2, operacao } = req.body
   let resultado = 0
   if (operacao === "+") {
       resultado = num1 + num2
   } else if (operacao === "-") {
       resultado = num1 - num2
   } else if (operacao === "*") {
       resultado = num1 * num2
   } else if (operacao === "/") {
       resultado = num1 / num2
   }
   res.send({ resultado })
})
//atividade 12 - positivo ou negativo
app.post("/api/positivo-negativo", (req, res) => {
   const numero = req.body.numero
   const resultado = numero >= 0 ? "positivo" : "negativo"
   res.send({ resultado })
})
//atividade 13 - par ou impar
app.post("/api/par-impar", (req, res) => {
   const numero = req.body.numero
   const resultado = numero % 2 === 0 ? "par" : "ímpar"
   res.send({ resultado })
})
//atividade 15 - qual dos dois numeros e o maior
app.post("/api/maior-numero", (req, res) => {
   const { num1, num2 } = req.body
   const maior = num1 > num2 ? num1 : num2
   res.send({ resultado: maior })
})
//atividade 16 - triangulo
app.post("/api/triangulo", (req, res) => {
   const { valor1, valor2, valor3 } = req.body
   const formaTriangulo =
       valor1 + valor2 > valor3 &&
       valor1 + valor3 > valor2 &&
       valor2 + valor3 > valor1
   if (!formaTriangulo) {
       res.send({ formaTriangulo, valoresLidos: { valor1, valor2, valor3 } })
       return
   }
   const { base, altura } = req.body
   const area = (base * altura) / 2
   res.send({ formaTriangulo, area })
})
//atividade 17 - imposto de renda
app.post("/api/imposto-renda", (req, res) => {
   const { cpf, dependentes, renda } = req.body
   const salarioMinimo = 1412 // valor de referencia
   const descontoDependentes = dependentes * (0.05 * salarioMinimo)
   const rendaTributavel = renda - descontoDependentes
   const smRenda = rendaTributavel / salarioMinimo
   let aliquota = 0
   if (smRenda <= 2) {
       aliquota = 0
   } else if (smRenda <= 3) {
       aliquota = 0.05
   } else if (smRenda <= 5) {
       aliquota = 0.10
   } else if (smRenda <= 7) {
       aliquota = 0.15
   } else {
       aliquota = 0.20
   }
   const imposto = rendaTributavel * aliquota
   res.send({ cpf, imposto })
})
//desafio 3 - menor dos tres numeros
app.post("/api/menor-tres", (req, res) => {
   const { num1, num2, num3 } = req.body
   const menor = Math.min(num1, num2, num3)
   res.send({ resultado: menor })
})
//desafio 4 - ano bissexto
app.post("/api/ano-bissexto", (req, res) => {
   const ano = req.body.ano
   const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
   res.send({ resultado: bissexto })
})
//atividade 17 (matematica) - media ponderada
app.post("/api/media-ponderada", (req, res) => {
   const { nota1, nota2, nota3 } = req.body
   const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5)
   res.send({ resultado: media })
})
//atividade 18 - valor final do carro ao consumidor
app.post("/api/valor-carro", (req, res) => {
   const custoFabrica = req.body.custoFabrica
   const comLucro = custoFabrica * 1.28
   const valorFinal = comLucro * 1.45
   res.send({ resultado: valorFinal })
})
//atividade 19 - juros simples
app.post("/api/juros-simples", (req, res) => {
   const { capital, taxa, dias } = req.body
   const juros = capital * taxa * dias
   const montante = capital + juros
   res.send({ capital, juros, montante })
})
//atividade 20 - valor com IPI
app.post("/api/valor-ipi", (req, res) => {
   const { ipi, valor1, quant1, valor2, quant2 } = req.body
   const total = (valor1 * quant1 + valor2 * quant2) * (1 + ipi / 100)
   res.send({ resultado: total })
})
//atividade 21 - classificar suspeito de crime
app.post("/api/classificar-crime", (req, res) => {
   const respostas = req.body.respostas // array com 8 respostas booleanas (true = "sim")
   const qtdeSim = respostas.filter((r) => r === true).length
   let classificacao = ""
   if (qtdeSim === 8) {
       classificacao = "Assassino"
   } else if (qtdeSim >= 5) {
       classificacao = "Possível criminoso"
   } else if (qtdeSim === 4) {
       classificacao = "Suspeito"
   } else {
       classificacao = "Inocente"
   }
   res.send({ resultado: classificacao })
})

app.listen(3000, () => {
 console.log('Server is on http://localhost:3000')
})