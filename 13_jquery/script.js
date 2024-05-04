$(document).ready(function () {

    $("#saberi").click(function () {
        var broj1 = $("#broj1").val();
        var broj2 = $("#broj2").val();
        broj1 = parseInt(broj1);
        broj2 = parseInt(broj2);
        var rezultat = broj1 + broj2;
        $("#rezultat").text(rezultat);
    });

    $("#pomnozi").click(function () {
        var broj1 = $("#broj1").val();
        var broj2 = $("#broj2").val();
        broj1 = parseInt(broj1);
        broj2 = parseInt(broj2);
        if (broj1 === 0 && broj2 === 0) {
            rezultat = "Ne mozete mnoziti sa 0";
        } else if (broj2 === 0) {
            rezultat = "Ne mozete mnoziti sa 0";
        } else if (broj1 === 0) {
            rezultat = "Ne mozete mnoziti sa 0";
        } else {
            rezultat = broj1 * broj2;
        }
        $("#rezultat").text(rezultat);
    });

    $("#podeli").click(function () {
        var broj1 = $("#broj1").val();
        var broj2 = $("#broj2").val();
        broj1 = parseInt(broj1);
        broj2 = parseInt(broj2);
        if (broj1 === 0 && broj2 === 0) {
            rezultat = "Ne mozete deliti sa 0";
        } else if (broj2 === 0) {
            rezultat = "Ne mozete deliti sa 0";
        } else if (broj1 === 0) {
            rezultat = "Ne mozete deliti sa 0";
        } else {
            rezultat = broj1 / broj2;
        }
        $("#rezultat").text(rezultat);
    });

    $("#oduzmi").click(function () {
        var broj1 = $("#broj1").val();
        var broj2 = $("#broj2").val();
        broj1 = parseInt(broj1);
        broj2 = parseInt(broj2);
        var rezultat = broj1 - broj2;
        $("#rezultat").text(rezultat);
    });

});
