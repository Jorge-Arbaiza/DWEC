

var XMLHttpRequestObject = false;
 if (window.XMLHttpRequest) {
 XMLHttpRequestObject = new XMLHttpRequest()
 } else if (window.ActiveXObject) {
 XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP")
 }
 function sacardatos(datos, idDiv){
     
if(XMLHttpRequestObject) {


XMLHttpRequestObject.open("GET", datos);
XMLHttpRequestObject.send(null);
XMLHttpRequestObject.onreadystatechange = function(){
 
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {
var documento_xml = XMLHttpRequestObject.responseXML
var ruta = documento_xml.getElementsByTagName("Catalog")[0]

var tope = ruta.getElementsByTagName("Book").length

for(var i = 0; i < tope; i++){
    libro = ruta.getElementsByTagName("Book")[i]
    
    autor = libro.getElementsByTagName("Author")[0].firstChild.nodeValue
    
    titulo = libro.getElementsByTagName("Title")[0].firstChild.nodeValue
    
    muestraHTML(idDiv,"Autor: "+autor+", Título: "+titulo+".<br/>")
    
               }

          }
        }

    }

 }
 function muestraHTML(id, texto){
    if(document.getElementById){
      document.getElementById(id).innerHTML += texto;
    }
  }



