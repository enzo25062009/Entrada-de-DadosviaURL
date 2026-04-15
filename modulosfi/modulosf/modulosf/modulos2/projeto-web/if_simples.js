export function IfSimples() {
    let idade = 18
    let resposta
    if (idade < 18) {
        resposta = {
            "idade": idade,
            faixaEtaria: "menor de idade"
        }
    }else {
        resposta = {
            "idade": idade,
            faixaEtaria: "maior de idade"
        }
    }

    return resposta
}