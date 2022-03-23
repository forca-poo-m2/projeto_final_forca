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

const usuario1 = new Usuario();
usuario1.criaUsuario();
console.log(usuario1);

let paisesAmericaDosul= ["brasil", "argentina" , "chile", "equador", "uruguai"]
let linguagensDeProgramacao=["java","python","javascript","typescript","csharp"]
let frutas=["morango", "pitaya", "abacaxi", "laranja","goiaba"]

let temas =[paisesAmericaDosul, linguagensDeProgramacao, frutas]


class forca {
    constructor(contV=0, contD=0){
        this.contV=contV;
        this.contD=contD;
    }
    
    jogar(){
        let numeroTema =3
        while (numeroTema>2) {
           numeroTema= prompt("Escolha o Tema:\n0 - Países da América do Sul\n1 - Linguagens de Programação\n2 - Frutas")

           if(numeroTema==0){
               alert ("Você escolheu o tema Países da América do Sul")
           }else if(numeroTema==1){
            alert ("Você escolheu o tema Linguagens de Programação" )
           }else if(numeroTema==2){
            alert ("Você escolheu o tema Frutas")
           }else{
               alert ("Escolha um valor válido")
               numeroTema=3
           }
           
        }

        function sorteaPalavra(){

        }
    }
}
const jogo= new forca()
jogo.jogar()
