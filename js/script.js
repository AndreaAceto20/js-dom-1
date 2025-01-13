// prendo l'immagine della lampadina accesa

const lampadinaOn = document.getElementById("on")

// prendo l'immagine della lampadina spenta

const lampadinaOff = document.getElementById("off")

// prendo il buttone

const button = document.getElementById("onOff")

// creo la funzione èer scambiare le classi delle immagini

function on(){
    lampadinaOff.className = "nascosto";
    lampadinaOn.className = "vedi";
    
}

// quando si preme il bottone si chiama la funzione

button.addEventListener('click', on)



    
