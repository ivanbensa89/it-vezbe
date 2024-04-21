document.getElementById("Btn").addEventListener("click", function() {
    var cena = 150;
    var pdv = cena * 0.18;
    var ukupnaCena = cena + pdv;
    alert("Cena sa PDV-om (18%): " + ukupnaCena + "€");
});
