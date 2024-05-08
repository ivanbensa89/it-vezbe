$(document).ready(function () {
    $("#sirinaElementa, #visinaElementa").on("input", function () {
        var sirinaElementa = $("#sirinaElementa").val();
        var visinaElementa = $("#visinaElementa").val();

        $("#manipulacioniDiv").css({
            width: sirinaElementa,
            height: visinaElementa
        });
    });

    $("#bojaElementa").on("input", function () {
        var boja = $(this).val();
        $("#manipulacioniDiv").css({
            backgroundColor: boja
        });
    });

    $("#radiusElementa").on("input", function () {
        var radius = $(this).val();
        $("#manipulacioniDiv").css({
            borderRadius: radius + "%"
        });
    });
});
