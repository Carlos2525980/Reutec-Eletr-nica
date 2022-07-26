
function Enviar()
{

var nome = document.getElementById("nome")
var endereco = document.getElementById("Endereco")
var telefone = document.getElementById("Telefone")
var aparelho = document.getElementById("Aparelho")
var marca = document.getElementById("Marca")
var modelo = document.getElementById("Modelo")


var n = Number(nome.value)
var e = Number(endereco.value)
var t = Number(telefone.value)
var a = Number(aparelho.value)
var m1 = Number(marca.value)
var m2 = Number(modelo.value)

if(n == "" || e == "" || t == "" || a == "" || m1 == "" || m2 == ""){

alert("Campos Obrigatórios!")

}else{

  alert("Enviado")


}

}
