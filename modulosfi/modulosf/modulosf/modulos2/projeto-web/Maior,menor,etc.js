export function MaiorMenor() {
    const a = 10;
    const b = 5;

      let resposta = {
        num1:a,
        num2:b,
        maior: a > b,
        menor: a < b,
        maiorOuIgual: a >= b,
        menorOuIgual: a <= b,
        igual: a === b,
        diferente: a !== b
        }

        return resposta
        
}