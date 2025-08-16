// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeUsuario = []
let listaAmigos = document.getElementById("listaAmigos")
listaAmigos.innerHTML =""
for (let i =0; i < nombresDeUsuario.length; i++ )
listaAmigos.innerHTML +=`<li> ${nombresDeUsuario[i]}</li>`;
function agregarAmigo() {
    //obtener el valor del campo de texto
    let nombreAgregado = document.getElementById("amigo").value;
    //Verificar que el campo no este vacio 
    if (nombreAgregado) {
        nombresDeUsuario.push(nombreAgregado);     
    console.log(nombresDeUsuario)
     }
    else{
        alert('Por favor, ingrese un nombre')
    }
    limpiarCaja()

}
function limpiarCaja(){
    document.getElementById("amigo").value='';
}
function sortearAmigo () {
    if (nombresDeUsuario.length === 0) {
    alert('Ingrese un nombre para continuar')
return;}
let aletoriedad = Math.floor(Math.random()*nombresDeUsuario.length)
let amigoSorteado = nombresDeUsuario[aletoriedad];
document.getElementById('resultado').innerHTML = `El amigo secreto es : ${amigoSorteado}`
 nombresDeUsuario.length = 0;
document.getElementById("listaAmigos").innerHTML = "";
console.log(amigoSorteado)}
