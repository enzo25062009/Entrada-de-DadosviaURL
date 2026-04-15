export function mapNumeros() {
    const numeros = [1, 2, 3, 4];

    const tabuada = numeros.map(n => n * 2);

    return {
        numeros,
        tabuada
    }
}