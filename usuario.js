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
let listaFrutas=["goiaba", "manga", "pitaya", "morango", "abacaxi"]

let temas =[paisesAmericaDosul, linguagensDeProgramacao, listaFrutas]


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
               let paises = paisesAmericaDosul[Math.floor(Math.random()*paisesAmericaDosul.length)]
               return paises

           }else if(numeroTema==1){
            alert ("Você escolheu o tema Linguagens de Programação" )
            let linguagem = linguagensDeProgramacao[Math.floor(Math.random()*linguagensDeProgramacao.length)]
            return linguagem

           }else if(numeroTema==2){
            alert ("Você escolheu o tema Frutas")

            let fruta = listaFrutas[Math.floor(Math.random()*listaFrutas.length)]
            return fruta

           }else{
               alert ("Escolha um valor válido")
               numeroTema=3
           }
           
        }
      
    }

}
class word{
    constructor(word, ){
        this.caracteres = word.split("");
        this.boxes = this.caracteres.map(cara =>{return"_"});
        this.vidas = 5;
        this.acertos=0;
    }
    


    checkCaracates(cara){
        let verificaLetra = false;
        for(let i =0; i <this.boxes.length; i++){
            if(cara==this.caracteres[i]){
                if(cara !== this.boxes[i]){
                    this.acertos++
                }
                this.boxes[i]=cara;
                console.log(this.boxes[i]);
                verificaLetra=true
            }else{
                console.log(this.boxes[i]);
            }
        }
        if(verificaLetra==false || this.vidas>0){this.vidas--};
        console.log("Acertou: "+verificaLetra);
        console.log(`Vidas restantes: ${this.vidas}`)
         
        if(this.vidas==0){
            
            }else {
                if(this.acertos== this.caracteres.length){
                console.log("Você venceu");
                }else{
              console.log("continue tentando")
              ;
            }
            console.log("Você Perdeu")
        
        }

    }
    }

    let novamente=true;
    while(novamente){
        const jogo = new forca()
        let opcaoEscolhida=jogo.jogar()
        let palavra2 = new word(opcaoEscolhida)
    
        /*console.log(palavra2.checkCaracates("a"));
        console.log(palavra2.checkCaracates("l"))
        console.log(palavra2.checkCaracates("m"))
        console.log(palavra2.checkCaracates("j"))
        console.log(palavra2.checkCaracates("p"));
        console.log(palavra2.checkCaracates("x"));
        console.log(palavra2.checkCaracates("w"));
        console.log(palavra2.checkCaracates("r"));*/
        let letra='';
        for (let i = 0; i < 5; i++) {
            letra = prompt("Digite uma letra:");
            palavra2.checkCaracates(letra)
            //Sleep de 5 milisegundos
            for (let i = 0; i < 50000; i++){
    
            }
            
        }
    
     
            let pergunta = prompt("Deseja jogar o Jogo da Forca do Squad Verde novamente?\nDigite 1 para SIM\nDigite 2 para NÃO");
            if (pergunta=="2"){
                novamente=false
        }
        
    }