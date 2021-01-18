
   window.onload = function () {
   var boton = document.getElementById("boton")
    boton.onclick = sacardatos
   }
var XMLHttpRequestObject = false;
 if (window.XMLHttpRequest) {
 XMLHttpRequestObject = new XMLHttpRequest();
 } else if (window.ActiveXObject) {
 XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
 }

 function sacardatos(datos, idDiv){
     datos="json/prueba.json"
     idDiv="contenedor"
if(XMLHttpRequestObject) {
var objeto = document.getElementById(idDiv);
XMLHttpRequestObject.open("GET", datos);
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {
var text = XMLHttpRequestObject.responseText;
var obj = JSON.parse(text)
objeto.innerHTML = "Nombre: " + obj.nombreColor + "<br>" + "Color Hexadecimal: " + obj.valorHexadec
 }

 }
XMLHttpRequestObject.send(null);
 }
 }
