// slection prompt name
// const inputName = document.querySelector(".nome");
// console.log(inputName);

// selction prompt age
// const inputAge = document.querySelector(".age");
// console.log(inputAge);

// selection prompt km viaggio
const inputKm = document.querySelector(".distance");
console.log(inputKm);


// selection button
const sendButton = document.querySelector(".genera");
// console.log(sendButton);

// creation some variables
// let userName;

// let etaPassegero;

let kmViaggio;

// calcolo costo biglietto senza sconti
// let costoBigliettoIniziale = kmViaggio * 0.21;
// console.log("costo del biglietto senza sconti:", costoBigliettoIniziale,"€");

// evento al click
sendButton.addEventListener("click", function()  {
    // assegnazione del valore a userName 
    // userName = inputName.value;
    // console.log(userName);
    // assegnazione del valore a etaPassegero
    // etaPassegero = parseInt(inputAge.value);
    // console.log(etaPassegero);
    // assegnazione del valore a kmViaggio
    kmViaggio = parseInt(inputKm.value);
    console.log(kmViaggio);
});

// if (isNaN(kmViaggio)) {
//     console.error("L'input non è un numero valido");
// } else {
//     console.log("Valore valido: " + kmViaggio);
// }



