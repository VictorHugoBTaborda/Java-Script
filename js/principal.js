var titulo = document.querySelector(".titulo");
titulo.textContext = "Aparecida Nutricionista";


var paciente = document.querySelectorAll("#.paciente);

    console.log(pacientes);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContext;

var tdAltura = paciente.querySelector("info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
console.log (imc);

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){

console.log("Peso Inválido!")
pesoEhValido = false;
tdImc.textContent = "Peso Inválido!";
}

if(altura <= 0 || altura >= 3.00){

console.log("Altura Inválida!")
pesoEhValido = false;
tdImc.textContent = "Altura Inválida!";
}

if(alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}

titulo.addEventListener("click", function() {
console.log("Olha só posso chamar uma função anonima.");


})


}


