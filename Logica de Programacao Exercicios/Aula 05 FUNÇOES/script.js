// ---===== VARIÁVEIS =====---
let time = "14:25";
let horarioConvertido = converter24para12(time);

// ---===== EXECUÇÃO =====---

imprimirHorario(horarioConvertido);

// ---===== FUNÇÕES =====---
function converter24para12(time) {
    let partes = time.split(":");
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);

    if (horas > 12) {
        horas -= 12;
        return horas + ":" + minutos + " PM";
    } else {
        return horas + ":" + minutos + " AM";
    }
}

function imprimirHorario(time) {
    console.log(time);
}
