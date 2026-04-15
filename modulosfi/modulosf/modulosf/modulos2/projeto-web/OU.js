export function ou() {
    const temIngresso = false;
    const nomeNaLista = true;
    let resposta
    if (temIngresso || nomeNaLista) {
        resposta = {
            "temIngresso":temIngresso,
            "nomeNaLista":nomeNaLista,
            "resultado": "pode entrar"
        }
    } else {
        resposta = {
            "temIngresso":temIngresso,
            "nomeNaLista":nomeNaLista,
            "resultado": "não pode entrar"
        }
    }

    return resposta

}