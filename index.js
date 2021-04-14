const diaMaximo = new Date("2021-03-18");
const dataAtual = new Date();
let reserva = false;
var teste = window.prompt('Deseja fazer uma reserva no hotel ?'); 
var x = []
if(teste == 'sim') {
    if(dataAtual > diaMaximo) {
        alert('data ultrapassada');
    }
    reserva = true
}
