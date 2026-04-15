//na barra de pesquisa coloque get ao inves de let pq n funcionou com o nome let
import express from 'express'
export function get() {
    let nome = "Paola"
     
    let resposta = {
        "nome": nome,
    }

    return resposta

}