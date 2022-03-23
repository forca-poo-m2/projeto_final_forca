// - Fazer um jogo da forca (não precisa mostrar nada no DOM, somente usando alert e prompt é suficiente)
// - O usuário deve inserir informações de cadastro antes de jogar (nome, email)
// - O usuário deve dizer se ele quer jogar novamente ou não
// - Ter um conjunto de palavras possíveis, cada uma com um tema associado (no mínimo 3 temas)
// - Deve ter um contador de vitórias e derrotas
// - Fazer todas as validações necessárias (Prever erros do usuário, como digitar um número ao invés de uma letra, dentre outros)

// - EXTRA: CRIAR A INTERFACE GRÁFICA

// Classe usuário
// Classe palavras
// Classe forca

let paisesAmericaDoSul = ["brasil", "argentina" , "chile", "equador", "uruguai"];
let linguagensDeProgramacao = ["java","python","javascript","typescript","csharp"];
let frutas = ["morango", "pitaya", "abacaxi", "laranja","goiaba"];

class Usuario {
    constructor(nome, email) {
        this.nome = nome,   
        this.email = email
    }

    criaUsuario () {
        const sejaBemVindo = alert("Seja bem vindo ao Jogo da Forca do Squad Verde!\nPara jogar faça seu cadastro.");
        this.nome = prompt("Digite seu nome: ");
        this.email = prompt("Digite seu email: ");
        alert(`Nome: ${this.nome}\nEmail: ${this.email}`);
    }
}