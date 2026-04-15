export function do_while() {
    let i = 1
    let resultado = ""

    do {
        resultado += i + " "
        i++
    } while (i < 5)

    return {
        resultado
    }
}