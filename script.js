// ik wil de li's selecteren

const ListElements = document.querySelectorAll("li");

const selectieSteen = ListElements[0];
const selectiePapier = ListElements[1];
const selectieSchaar = ListElements[2];

console.log(ListElements, selectieSteen, selectiePapier, selectieSchaar);
let turn = 1;

selectieSteen.addEventListener("click", (e) => {
    nakeuze("Steen")
})

selectiePapier.addEventListener("click", (e) => {
    nakeuze("Papier")
})

selectieSchaar.addEventListener("click", (e) => {
    nakeuze("Schaar")
})

function nakeuze(keuze){
    if (turn == 1) {
         waarde1 = keuze;  
         console.log(keuze, turn);
         changeTekst("Speler 2 mag nu:");
        turn++;

    } else if (turn = 2) { 
        waarde2 = keuze; 
        console.log(keuze, turn);
        changeTekst(logica());  
    }
}

function changeTekst(string) {
    document.querySelector("h1").innerText = string;
}

function changeSmallTekst(string) {
    document.querySelector("h2").innerText = string;
}

function logica() {
    if (waarde1 == waarde2) {
        return "Gelijkspel, probeer het opnieuw!"
    } else if (waarde1 == "Steen" && waarde2 == "Papier" ||
        waarde1 == "Papier" && waarde2 == "Schaar" ||
        waarde1 == "Schaar" && waarde2 == "Steen") {
            changeSmallTekst(waarde2 + " verslaat " + waarde1);
        return "Speler 2 heeft gewonnen!";
    } else {
        changeSmallTekst(waarde2 + " verslaat " + waarde1);
        return "Speler 1 heeft gewonnen!"
    }
}