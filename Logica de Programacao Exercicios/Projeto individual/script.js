const enviarEmail = require("./envia-email");

const listaClientes = [
	{
		nome: "José Flávio",
		email: "jose.flavio@email.com",
		receberEmail: true,
	},
	{
		nome: "Denize Mendes",
		email: "denize_mendes@email.com",
		receberEmail: false,
	},
	{
		nome: "João Da Silva",
		email: "joao_silva@email.com",
		receberEmail: false,
	},
];

// 1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.
function ehSegundaFeira() {
	const hoje = new Date();
	return hoje.getDay() === 1;
}

// 2. Criar uma função para montar o corpo do e-mail a ser enviado.
function juntarCorpoEmail(cliente) {
	const corpoEmail = `
    Olá, ${cliente.nome},
   
    Grandes novidades na CarStore!

    Chegaram os carros mais desejados:
    - Kia Cerato
    - Toyota Hilux
    - Honda Civic Type R
    
    Os carros mais vendidos são:
    - Fiat Uno com escada
    - Volkswagen Gol turbinado
    - Hyundai HB20 de dentista
    
    Venha conferir essas belezuras!
    Atenciosamente,
    CarStore
  `;
	return corpoEmail;
}

// 3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de Email.
function enviarEmails() {
	if (ehSegundaFeira()) {
		console.log("Hoje não é segunda-feira!");
		return;
	}

	listaClientes.forEach((cliente) => {
		if (cliente.receberEmail) {
			const corpoEmail = juntarCorpoEmail(cliente);
			const resultado = enviarEmail(
				cliente.email,
				"Novidades da CarStore",
				corpoEmail
			);
			console.log(resultado);
		}
	});
}

// Execução da Função
enviarEmails();
