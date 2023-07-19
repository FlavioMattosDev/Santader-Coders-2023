function verifyCheckbox() {
	let checkbox = document.getElementById("terms");
	let botao = document.getElementById("btn");

	if (checkbox.checked) {
		botao.disabled = false;
	} else {
		botao.disabled = true;
	}
}

function exibirAlert() {
	alert("Registro confirmado!");
}
