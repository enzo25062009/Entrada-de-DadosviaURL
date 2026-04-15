export function foreach() {
    const frutas = ['maçã', 'banana', 'uva']
    let rest = ""

    frutas.forEach((fruta, index) => {  
        rest += `${index}: ${fruta} `
    })

    let resposta = {
        frutas: frutas,
        resultado: rest.trim()
    }

    return resposta
}