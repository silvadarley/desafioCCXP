const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const lancamento = "2023 12 01 22:27:00"

function contadorRegreccivo() {

    const dataLanc = new Date(lancamento)
    const hoje = new Date();
    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML = formataTempo(finalDias+'D');
    horas.innerHTML = formataTempo(finalHoras+'H');
    minutos.innerHTML = formataTempo(finalMinutos+'M');
    segundos.innerHTML = formataTempo(finalSegundos+'S');
}

function formataTempo(tempo) {
    if (tempo < 10) {
        return `0${tempo}`;
    } else {
        return tempo ;
    }
    //return tempo <10? `0${tempo}` : tempo
}

contadorRegreccivo();

setInterval(contadorRegreccivo, 1000)