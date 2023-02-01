function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
        elemento.play();
   }
   
   else {
    console.log('Elemento nao encontrado ou seletor invalido')
   }
   
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {


        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
