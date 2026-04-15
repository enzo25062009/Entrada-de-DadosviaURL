// use o / + o nome da pagina q vc quer


// modulos externos
import express from 'express'

const app = express() 

// modulos internos
import { get } from './let.js' 
import { While } from './while.js'
import { div } from './arimetica_divisao.js'
import { soma } from './arimetica_soma.js'
import { mult } from './arimetica_multiplicacao.js'
import { potencia } from './arimetica_potencia.js'
import { raiz } from './arimetica_raiz.js'
import { busca } from './busca.js'
import { sub } from './arimetica_subtracao.js' // consegui arrumar
import { Const } from './const.js'
import { do_while } from './do_while.js'
import { For } from './for.js'
import { foreach } from './foreach.js' // consegui tbm
import { IfComposto } from './if_composto.js'
import { IfSimples } from './if_simples.js'
import { IfTradicional } from './if_tradicional.js'
import { MaiorMenor } from './Maior,menor,etc.js'
import { mapNumeros } from './map.js'
import { not } from './Not.js'
import { ou } from './OU.js'
import { Var } from './var.js'
import { Switch } from './switch_case.js'


app.get('/sub/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)

    res.json(sub(num1, num2))
})

app.get('/while', (req, res) => {
    res.json(While())
})

app.get('/div/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)

    res.json(div(num1, num2))
})

app.get('/soma', (req, res) => {
    let num1 = Number(req.query.num1)
    let num2 = Number(req.query.num2)

    res.json(soma(num1, num2))
})

app.get('/mult', (req, res) => {
    let num1 = Number(req.query.num1)
    let num2 = Number(req.query.num2)

    res.json(mult(num1, num2))
})

app.get('/potencia', (req, res) => {
    let base = Number(req.query.base)
    let expoente = Number(req.query.expoente)

    res.json(potencia(base, expoente))
})

app.get('/raiz', (req, res) => {
    let num = Number(req.query.num)

    res.json(raiz(num))
})

app.get('/sub', (req, res) => {
    res.json(sub())
})

app.get('/busca', (req, res) => {
    let valor = req.query.valor

    res.json(busca(valor))
})

app.get('/const', (req, res) => {
    res.json(Const())
})

app.get('/do_while', (req, res) => {
    res.json(do_while())
})

app.get('/for', (req, res) => {
    res.json(For())
})

app.get('/foreach', (req, res) => {
    res.json(foreach())
})

app.get('/ifcomposto', (req, res) => {
    res.json(IfComposto())
})

app.get('/ifsimples/:num', (req, res) => {
    let num = Number(req.params.num)

    res.json(IfSimples(num))
})

app.get('/iftradicional', (req, res) => {
    res.json(IfTradicional())
})


app.get('/maiormenor/:a/:b', (req, res) => {
    let a = Number(req.params.a)
    let b = Number(req.params.b)

    res.json(MaiorMenor(a, b))
})

app.get('/map', (req, res) => {
    res.json(mapNumeros())
})

app.get('/not', (req, res) => {
    res.json(not())
})

app.get('/ou', (req, res) => {
    res.json(ou())
})

app.get('/var', (req, res) => {
    res.json(Var())
})

app.get('/switch', (req, res) => {
    res.json(Switch())
})


//--------------------------------------------------------------

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})