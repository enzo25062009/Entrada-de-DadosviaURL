export function Switch() {
    const dia = 9;
    let nomedia;

    switch (dia) {
        case 1:
            nomedia = "domingo";
            break;
        case 2:
            nomedia = "segunda";
            break;
        case 3:
            nomedia = "terça";
            break;
        case 4:
            nomedia = "quarta";
            break;
        case 5:
            nomedia = "quinta";
            break;
        case 6:
            nomedia = "sexta";
            break;
        case 7:
            nomedia = "sábado";
            break;
        default:
            nomedia = "inválido";
    }

    return {
        dia,
        resultado: nomedia
    }
}