export function For() {
    let resultado = ""

    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            resultado += i + " "
        }
    }

    let resposta = {
        "resultado": resultado,
    }

    return resposta
}