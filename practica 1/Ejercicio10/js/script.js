
   window.onload = function () {
   var boton = document.getElementById("boton")
   
   boton.onclick = sacardatos

   }
var XMLHttpRequestObject = false
 if (window.XMLHttpRequest) {
 XMLHttpRequestObject = new XMLHttpRequest()
 } else if (window.ActiveXObject) {
 XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP")
 }

 function sacardatos(datos, idDiv){
    
     datos="php/datos.php"
     imagen_carga="cargando"
     idDiv="contenedor"
if(XMLHttpRequestObject) {
var objeto = document.getElementById(idDiv)
var cargando=document.getElementById(imagen_carga)
cargando.style.display = "block";
XMLHttpRequestObject.open("GET", datos);
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {


objeto.innerHTML = XMLHttpRequestObject.responseText
cargando.style.display = "none"
 }

 }
XMLHttpRequestObject.send(null)
 }
 }
