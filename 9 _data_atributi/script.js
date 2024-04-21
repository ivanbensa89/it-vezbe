const kvadrat = document.getElementById("kvadrat");

for (var i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    if (i % 2 == 0) {
        square.style.backgroundColor = "blue";
    } else {
        square.style.backgroundColor = "red";
    }

    square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
    });

    kvadrat.appendChild(square);
}
