$(document).ready(function () {
    $("#box1").click(function () {
        
        if($("#box1").prop("checked")){
        
            var numero1 = $("#txt1").val();
            var numero2 = $("#txt2").val();
            var suma =parseInt(numero1) + parseInt(numero2);
            var txt3 = "<input type='text' name='texto3' id='txt3'></input>";
            $("#formulario").append(txt3);
            $("#txt3").val(suma);
        }else{
            $("#txt3").remove();
        }
    })
});