$(document).ready(function() {
    $("#validar").click(function() {
        var dni = $("#dni").val()
        var digitosletra = /^\d{8}[A-Z]$/
        if (digitosletra.test(dni)) {
            window.location = "ejercicio2.html"
        } else {
            alert("No es correcto")
        }
    })
})