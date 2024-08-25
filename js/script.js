/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1 ok
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/


/*
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, 
vengono generate 100 celle in 10 righe da 10 celle ciascuna.
*/

//Dichiarazioni funzioni


//Fase di preparazione


//richiamo gli elemnti dal dom
const grid = document.getElementById('grid')
const buttun = document.querySelector('button')

//Elementi inizialai

const rows = 10;
const cols = 10;
const totalCell = rows * cols;

//Regiamo al click
buttun.addEventListener('click', function (){
    // creco un ciclo per il numero di totalCell
    for ( let i = 1; i <=totalCell; i++ ){
        //creo le cell
        const cell = document.createElement('div');
        //aggiungo la classe
        cell.className = 'cell';
        //inserisco in oagina
        grid.appendChild(cell)

    }

})

