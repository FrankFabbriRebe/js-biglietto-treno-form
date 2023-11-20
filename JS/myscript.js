// slection prompt name
const inputName = document.querySelector(".nome");
//console.log(inputName);

// selction prompt age
const inputAge = document.querySelector(".age");
//console.log(inputAge);

// selection prompt km viaggio
const inputKm = document.querySelector(".distance");
//console.log(inputKm);

// selection button
const sendButton = document.querySelector(".genera");
// console.log(sendButton);

// creation some variables
let userName;

let etaPassegero;

let kmViaggio;


// evento al click
sendButton.addEventListener("click", function()  {
    //assegnazione del valore a userName 
    userName = inputName.value;
    //console.log(userName);
    // assegnazione del valore a etaPassegero
    etaPassegero = parseInt(inputAge.value);
    //console.log(etaPassegero);
    //assegnazione del valore a kmViaggio
    kmViaggio = parseInt(inputKm.value);
    //console.log(kmViaggio);

    // calcolo costo biglietto senza sconti
    let costoBigliettoIniziale = kmViaggio * 0.21;
    console.log("costo del biglietto senza sconti:", costoBigliettoIniziale,"€");

    // calcolo sconto 20%
    const scontoVenti = (costoBigliettoIniziale * 20 / 100).toFixed(2);
    console.log("questo è lo sconto del 20%:",scontoVenti,"€");

    // calcolo sconto 40%
    const scontoQuaranta = (costoBigliettoIniziale * 40 / 100).toFixed(2);
    console.log("questo è lo sconto del 40%:", scontoQuaranta,"€");

    // applicazione sconti
    if (etaPassegero < 18) {
        let costoBigliettoFinale = (costoBigliettoIniziale - scontoVenti).toFixed(2);
        //document.getElementById("biglietto").innerHTML = `Ciao, avendo meno di 18 anni hai diritto ad uno sconto del 20%, in questo caso pari a ${scontoVenti}€. Il prezzo finale del tuo biglietto sarà quindi di ${costoBigliettoFinale} €`;
        console.log("questo è il prezzo finale del biglietto:",costoBigliettoFinale,"€");
    } else if (etaPassegero >= 65) {
        let costoBigliettoFinale = (costoBigliettoIniziale - scontoQuaranta).toFixed(2);
        //document.getElementById("biglietto").innerHTML = `Ciao, avendo più di 65 anni hai diritto ad uno sconto del 40%, in questo caso pari a ${scontoQuaranta}€. Il prezzo finale del tuo biglietto sarà quindi di ${costoBigliettoFinale} €`;
        console.log("questo è il prezzo finale del biglietto:",costoBigliettoFinale,"€");
    } else {
        let costoBigliettoFinale = costoBigliettoIniziale;
        //document.getElementById("biglietto").innerHTML = `Ciao, purtroppo per la tua fascia di età non hai diritto a nessuno sconto. Il prezzo finale del tuo biglietto sarà quindi di ${costoBigliettoFinale} €`;
        console.log("questo è il prezzo finale del biglietto:",costoBigliettoFinale,"€");
    }
});




