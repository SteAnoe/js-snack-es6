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

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//object array
const teams = [
    { teamName: "team1", goals: 0, fouls: 0 },
    { teamName: "team2", goals: 0, fouls: 0 },
    { teamName: "team3", goals: 0, fouls: 0 },
];

//deframmentazione
const { teamName, goals, fouls } = teams

//funzione per generare goal e falli random
teams.forEach(team => {
    team.goals = Math.floor(Math.random() * 100) + 1
    team.fouls = Math.floor(Math.random() * 100) + 1
});
  
//funzione per generare array contenente team e falli 
const teamNamesAndFouls = teams.map(({teamName, fouls}) => ({teamName, fouls}));

//stampa in console
console.log(teamNamesAndFouls);

// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esempio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

//funzione filtrante
function filterByPosition(array, a, b) {
    const filteredArray = array.filter((element, index) => {
        return index > a && index < b;
    })
    return filteredArray
}

//array nomi
const originalArray = ['nome0', 'nome1', 'nome2', 'nome3']
console.log(originalArray)

//genero nuovo array filtrato
const newArray = filterByPosition(originalArray, 1, 3)

//stampa
document.querySelector("#snack-3").innerHTML += `
    <span>${newArray}</span>
`

