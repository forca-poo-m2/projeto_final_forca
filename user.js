let paisesAmericaDoSul = ["brasil", "argentina" , "chile"];
let linguagensDeProgramacao = ["java", "python", "javascript"];
let frutas = ["morango", "abacaxi", "laranja"];

let temas = [paisesAmericaDoSul, linguagensDeProgramacao, frutas];

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

class forca {
    constructor(contadorWin = 0, contadorLoss = 0){
        this.contadorWin = contadorWin,
        this.contadorLoss = contadorLoss
    }

    jogar () {
        alert("Temos 3 temas: \n- Países da América do Sul\n- Linguagens de Programação\n- Frutas\nVocê pode errar a letra somente 5 vezes.");
        const sorteiaTema = temas[Math.floor(Math.random() * temas.length)];
        console.log(sorteiaTema);

        if (sorteiaTema == paisesAmericaDoSul) {
            alert("O tema é Países da América do Sul");
        }

        if (sorteiaTema == linguagensDeProgramacao) {
            alert("O tema é Linguagens de Programação");
        }

        if (sorteiaTema == frutas) {
            alert("O tema é Frutas");
        }

        const palavra = sorteiaTema[Math.floor(Math.random() * sorteiaTema.length)];
        console.log(palavra);

        let letrasErradas = [];
        let letrasCorretas = [];
        let erros = 1;
        let palavraInc = "";

        while(erros <= 5) {
            let letra = prompt(`A palavra tem ${palavra.length} letras\nDigite a letra: `);

            if (palavra.includes(letra)) {
                letrasCorretas.push(letra);
                palavraInc = letrasCorretas.join();
                alert(`Parabéns, contém a letra ${letra}\nPalavra: ${palavraInc}`);
            } else if (palavra.length === palavraInc.length) {
                alert(`Parabéns, Você ganhou!\nA palavra era ${palavra}`);
                erros = 5;
            } else {
                alert(`Poxa, não contém a letra ${letra}`);
                letrasErradas.push(letra);
                erros ++;
            }
        }
    }
}

const usuario1 = new Usuario();
usuario1.criaUsuario();
const primeiroJogo = new forca();
primeiroJogo.jogar();
console.log(usuario1);
