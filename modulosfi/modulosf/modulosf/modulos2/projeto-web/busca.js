export function busca() {
    let nomes = ["Ana", "Sofia", "Paulo", "Daniel", "Enzo"]

    let nomeBusca = "Ana"
    let encontrado = false
    let resposta

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomeBusca) {
            encontrado = true
            break
        }
    }

    if (encontrado) {
        resposta = {
            nome: nomeBusca,
            aviso: "nome encontrado"
        }
    } else {
        resposta = {
            nome: nomeBusca,
            aviso: "nome não encontrado"
        }
    }

    return resposta
}