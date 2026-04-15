export function IfComposto() {
    let idade = 18
    let resposta

    if (idade < 18) {
        resposta = {
            idade: 17,
            faixaEtaria: "criança"
        }
    } else if (idade < 60) {
        resposta = {
            idade: 18,
            faixaEtaria: "adulto"
        }
    } else {
        resposta = {
            idade: 60,
            faixaEtaria: "idoso"
        }
    }

    return resposta
}