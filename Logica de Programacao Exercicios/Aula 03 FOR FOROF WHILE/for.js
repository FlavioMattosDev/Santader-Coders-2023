let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let par = [];
let impares = [];

for (let i = 0; i < lista.length; i++) {
	if (lista[i] % 2 === 0) {
		par.push(lista[i]);
	} else {
		impares.push(lista[i]);
	}
}

console.log("Pares:", par);
console.log("Impares:", impares);
