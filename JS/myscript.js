// slection prompt name
const inputName = document.querySelector(".nome");
console.log(inputName);

// selction prompt age
const inputAge = document.querySelector(".age");
console.log(inputAge);

// selection prompt km viaggio
const inputKm = document.querySelector(".distance")
console.log(inputKm);

// selection button
const sendButton = document.querySelector(".genera");
console.log(sendButton);

// creation some variables
let userName;

let etaPassegero;

let kmViaggio;

// evento al click
sendButton.addEventListener("click", function()  {
    // assegnazione del valore a userName 
    userName = inputName.value;
    console.log(userName);
    // assegnazione del valore a etaPassegero
    etaPassegero = parseInt(inputAge.value);
    console.log(etaPassegero);
    // assegnazione del valore a kmViaggio
    kmViaggio = parseInt(inputKm.value);
    console.log(kmViaggio);
});




