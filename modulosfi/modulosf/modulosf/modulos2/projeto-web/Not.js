export function not() {
    const chovendo = false;
    let resposta
    // use ! para inverter o valor
    if (!chovendo) {
        resposta = {
            "chovendo": chovendo,
            aviso: "não leve guarda-chuva"
        }
    } else {
         resposta = {
            "chovendo": chovendo,
            aviso: "leve guarda-chuva"
        }
    }

    return resposta

}