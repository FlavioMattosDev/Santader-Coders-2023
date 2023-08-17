

let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
let dataFormatada = dia + "/" + mes + "/" + ano;

let peso = 65;
let altura = 1.85;
let imc = peso / (altura * altura);
imc = imc.toFixed(2);

console.log("Hoje, " + dataFormatada + " seu imc é de " + imc);

if (imc < 18.5) {
	console.log("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 25) {
	console.log("Você está com o peso ideal.");
} else if (imc >= 25 && imc <= 29.9) {
	console.log("Você está com o pré-obesidade.");
} else if (imc >= 30 && imc <= 34.9) {
	console.log("Você está com obesidade grau 1");
} else if (imc >= 35 && imc <= 39.9) {
	console.log("Você está com obesidade grau 2");
} else {
	console.log("Você está com obesidade grau 3");
}
