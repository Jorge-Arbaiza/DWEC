
function crearQuery(){
    var nombre=document.getElementById("nombre").value
    var apellidos=document.getElementById("apellidos").value
    var dni=document.getElementById("dni").value

    return "nombre="+encodeURIComponent(nombre) +
           "&apellidos="+encodeURIComponent(apellidos) +
           "&dni="+encodeURIComponent(dni) + 
           "&nocache"+Math.random()
}

var XMLHttpRequestObject = false;
 if (window.XMLHttpRequest) {
 XMLHttpRequestObject = new XMLHttpRequest()
 } else if (window.ActiveXObject) {
 XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP")
 }
 function sacardatos(datos, idDiv){
if(XMLHttpRequestObject) {
var objeto = document.getElementById(idDiv);
XMLHttpRequestObject.open("POST", datos)
XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {
objeto.innerHTML = XMLHttpRequestObject.responseText
 }

 }
XMLHttpRequestObject.send(crearQuery());
 }
 }