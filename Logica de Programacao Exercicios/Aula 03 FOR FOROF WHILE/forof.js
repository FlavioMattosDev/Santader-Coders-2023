const listaDeAlunos = [
	{ nome: "João", notas: [7, 5] },
	{ nome: "Maria", notas: [9, 8] },
	{ nome: "Carlos", notas: [6, 5] },
	{ nome: "Ana", notas: [7, 6] },
	{ nome: "Pedro", notas: [10, 9] },
	{ nome: "Lúcia", notas: [8, 7] },
	{ nome: "Fernando", notas: [7, 6] },
	{ nome: "Camila", notas: [9, 8] },
	{ nome: "Rafael", notas: [6, 5] },
	{ nome: "Juliana", notas: [10, 9] },
];

for (const aluno of listaDeAlunos) {
	const notas = aluno.notas;
	const media = (notas[0] + notas[1]) / 2;

	console.log(aluno.nome, "Média:" + media);
}
