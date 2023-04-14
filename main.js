// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


//object array
const bikes = [
    { name: "Bike-model-1", weight: 10 },
    { name: "Bike-model-2", weight: 9 },
    { name: "Bike-model-3", weight: 8 },
];

//indice
let bikeLeggera = bikes[0];

//funzione per calcolare la più leggera
bikes.forEach((bike) => {
    if (bike.weight < bikeLeggera.weight) {
        bikeLeggera = bike;
    }
});

//deframmentazione
const { name, weight } = bikeLeggera;

//stampa
document.querySelector("#snack-1").innerHTML += `
    <span>La bici più leggera è ${name} e il suo peso è ${weight}.</span>
`

