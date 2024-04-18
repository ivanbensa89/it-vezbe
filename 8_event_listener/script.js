var pitanja = [
    "Koliko je 2+2?",
    "Glavni grad Srbije?",
    "Koja je najduža reka na svetu?"
];

document.getElementById("askMe").addEventListener("click", function() {
    var nasumicanBroj = Math.floor(Math.random() * 3);
    var odgovor = prompt(pitanja[nasumicanBroj]);
    if (nasumicanBroj === 0 && odgovor === "4") {
        console.log("TACAN ODGOVOR");
    } else if (nasumicanBroj === 1 && odgovor.toLowerCase() === "beograd") {
        console.log("TACAN ODGOVOR");
    } else if (nasumicanBroj === 2 && odgovor.toLowerCase() === "nil") {
        console.log("TACAN ODGOVOR");
    }
});
