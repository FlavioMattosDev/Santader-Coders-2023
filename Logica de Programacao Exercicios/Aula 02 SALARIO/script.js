let salario = 1500;
let percentualAumento;
let valorAumento;
let novoSalario;

if (salario <= 1500) {
	percentualAumento = 20;
} else if (salario >= 1501 && salario <= 1700) {
	percentualAumento = 15;
} else if (salario >= 1701 && salario <= 2000) {
	percentualAumento = 10;
} else {
	percentualAumento = 5;
}

valorAumento = (salario * percentualAumento) / 100;
novoSalario = salario + valorAumento;

console.log("Seu salário antes do reajuste: R$", salario);
console.log("O percentual de reajuste:", percentualAumento + "%");
console.log("O valor do aumento: R$", valorAumento);
console.log("Seu salário após o reajuste: R$", novoSalario);
