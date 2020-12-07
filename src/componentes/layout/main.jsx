import React from 'react';
import './main.css';


let segundos = 0;
let tempo;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
function iniciaRelogio() {
    tempo = setInterval(function () {
        segundos++;
        document.querySelector('.content_clock').innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

function inicia() {
    return {
        click() {
            this.confere();
        },

        confere() {
            document.addEventListener('click', x => {
                const xe = x.target;

                if (xe.classList.contains('inicia')) {
                    document.querySelector('.content_clock').classList.remove('red');
                    clearInterval(tempo);
                    iniciaRelogio();
                }

                if (xe.classList.contains('pause')) {
                    
                    document.querySelector('.content_clock').classList.add("red");
                    if (document.querySelector('.content_clock').innerText == '00:00:00') {
                        document.querySelector('.content_clock').classList.remove('red');
                    }
                    clearInterval(tempo);

                }

                if (xe.classList.contains('reset')) {
                    clearInterval(tempo);
                    document.querySelector('.content_clock').innerHTML = '00:00:00';
                    document.querySelector('.content_clock').classList.remove('red');
                    segundos = 0;

                }
            })
        }
    }
}

const root = inicia();
root.click();

export default main => {


    return (
        <div className='tudo'>
            <div><button className='inicia'>Iniciar</button> <button className='pause'>Pausar</button> <button className='reset'>Zerar</button></div>
            <div className='content_clock'>00:00:00</div>
        </div>
    )
}