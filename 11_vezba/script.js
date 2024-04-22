document.getElementById("imageHolder").addEventListener("click", function (e) {
    if (e.target.classList.contains("slika")) {
        e.target.classList.toggle("zoom");
    }
});
