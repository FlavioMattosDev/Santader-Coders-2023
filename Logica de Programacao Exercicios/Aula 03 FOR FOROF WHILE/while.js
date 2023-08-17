const sorteio = [];

while (sorteio.length < 6) {
	const numAleatorio = Math.floor(Math.random() * 60 + 1);

	if (!sorteio.includes(numAleatorio)) {
		sorteio.push(numAleatorio);
	}
}

console.log("Números sorteados: " + sorteio);
