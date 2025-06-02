/*let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}*/

let count = 1;
let interval = setInterval(nextImage, 5000);

function nextImage() {
    count++;
    if (count > 4) count = 1;
    document.getElementById("radio" + count).checked = true;
}

// Reinicia o timer quando o usuário clica manualmente nos botões
document.querySelectorAll(".manual-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        count = index + 1; // Atualiza a contagem com base no botão clicado
        clearInterval(interval); // Para o antigo
        interval = setInterval(nextImage, 5000); // Inicia novo
    });
});

class Contador {
    constructor() {
        this.tempoJuntosDiv = document.querySelector('.tempo-juntos')
        this.dataInicial = new Date("2024-01-14 15:15").getTime();
        this.intervalo = null;
    }

    tempoJuntos() {
        this.intervalo = setInterval(() => {
            const dataAtual = new Date().getTime();
            const subtracao = dataAtual - this.dataInicial;
            const segundos = Math.floor(subtracao / 1000);
            const minutos = Math.floor(segundos / 60);
            const horas = Math.floor(minutos / 60);
            const dias = Math.floor(horas / 24);
            const ano = Math.floor(dias / 365);

            const diferenca = (`${ano} ano, ${dias % 365} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos`)

            this.tempoJuntosDiv.innerHTML = diferenca;
        }, 1000)   
    }
}

const nossoTempoJuntos = new Contador();
nossoTempoJuntos.tempoJuntos();