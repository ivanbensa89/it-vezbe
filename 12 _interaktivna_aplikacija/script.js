var gradovi = [];

document.getElementById("dodajGrad").addEventListener("click", function () {
    var grad = prompt("Unesite ime grada i temperaturu")
    grad = grad.split(" ")

    var privremeniGrad = {
        ime: grad[0],
        temperatura: grad[1]
    };

    gradovi.push(privremeniGrad);
});

document.getElementById("prikaziTopleGradove").addEventListener("click", function () {
    var topliGradovi = gradovi.filter(function(grad) {
        return grad.temperatura >= 12;
    });
    displayGradovi(topliGradovi, "#EE3E34", "topli-gradovi");
});

document.getElementById("prikaziHladneGradove").addEventListener("click", function () {
    var hladniGradovi = gradovi.filter(function(grad) {
        return grad.temperatura <= 11;
    });
    displayGradovi(hladniGradovi, "#3151D8", "hladni-gradovi");
});

function displayGradovi(gradovi, color, targetElementId) {
    var targetElement = document.getElementById(targetElementId);
    targetElement.innerHTML = "";

    gradovi.forEach(function(grad) {
        var span = document.createElement("span");
        span.style.color = color;
        span.textContent = grad.ime + " " + grad.temperatura + ", ";
        targetElement.appendChild(span);
    });
};
