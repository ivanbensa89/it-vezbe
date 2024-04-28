function izracunajSaPDV(cena) {
    var pdv = cena * 0.18;
    var ukupnaCena = cena + pdv;
    return ukupnaCena;
}

document.getElementById("btn").addEventListener("click", function() {
    var cena = 150;
    var ukupnaCena = izracunajSaPDV(cena);
    alert("Cena sa PDV-om (18%): " + ukupnaCena + "€");
});
