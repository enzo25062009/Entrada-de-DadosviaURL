export function sub() {
    let ano_nasc = 2009
    let ano_atual = 2026

    let idade = ano_atual - ano_nasc

    let resposta = {
        num1:ano_atual,
        num2:ano_nasc,
        resultado: idade
    }

    return resposta
}