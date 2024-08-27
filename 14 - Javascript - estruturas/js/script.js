//variaveis - let, para definir o valor basta inicializa-la

let nome = "Léo";
console.log(nome);

nome = "daniel siqueira";
console.log(nome);

//constantes - const, valor nao pode ser mudado

const idade =26;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);


//Mais sobre variaveis - sao case sensitive, nao pode nomear variavel com numero no começo ou @ 
//EX: let 2teste ="valor";   
//EX: let @teste ="valor";   


//pode criar varias variaveis em sequencia
let a=5,b=3,c=10, e="2";
console.log(a,b,c,e);

//case Sensitive
const nomeCompleto ="leo s";
const nomecompleto ="daniel";
console.log(nomecompleto);
console.log(nomeCompleto);

//Simbolos permitidos para criar variaveis _ e $
let _teste = "ola";
let $teste="Tudo bem";
console.log(_teste+ ", "+$teste);


/* Nomes Reservados - breake, case, catch, class, const, continue, debugger, default,
delete, do, else, enum, export, extends, falsem finally, for, function, if, implements,
import, interface, in, instanceof, let, new, package, private, protected, public, return,
static, super, switch, this, throw, true, try, typeof, var, void, while, with, field


Porém é possivel unir elas:
Ex: let breakTest =1;
*/

//Funções
/*
//Função Prompt
    const x = prompt("Digite sua idade:");
    console.log(`Você tem ${x} anos.`);
/* 

//Alert
/* alert("teste");
const z = 10;
alert(`O número é ${z}`);
*/ 

/*Funções Math - max = numero maior,
 floor = arredonda pra baixo,
  ceil = arredonda pra cima 

console.log(Math.max(1,54,13,141));
console.log(Math.floor(11.6));
console.log(Math.ceil(11.6));
*/
/* Funções do JS: console.x
//console
console.log("teste!");
console.error("Mensagem informativa de erro");
console.warn("Mensagem de aviso teste");
*/
//Estruturas de controle
//if 
const m=10;
const user = "João";

if(m>2){
console.log("m é maior que 2!");
}

if(user == "João"){
    console.log("user é == a joao")
}

if(user == "maria"){
    console.log("user é == a maria")
}


//if e else
const user2 = "Leo";

if(user2 == "daniel"){
    console.log("user é == a daniel");
}else{
    console.log("user é ",user2);
}

const q=10;
const w=11;
if(q<8 && w>20){
    console.log("Numeros corretos")
}else{
    console.log("numeros incorretos")
}

//else if
if(1>2 ){
    console.log("teste");
}else if(1<2 && "a"=="b"){
    console.log("Correto");
}else{
    console.log("invalido");
}

//While

let p =0;
while(p< 10){
    console.log(`Repetindo ${p}`);
    p=p+1;
}

//while loop infinito
/*
let d=0;
while(p< 10){
    console.log(`Repetindo ${p}`);
  
} */

    //For

    for(let t=0; t<10; t++){
        console.log(`o valor foi ${t}`);
    }

    let r = 10;

    //for(r; r<=10;r--){
    //    console.log(`o valor foi ${r}`);

    //}


    // identação
    for(let u =0; u<10; u++){
        if(u *2 >10){
            console.log(`Maior que 10! ${u}`)
        }else{
            if(u/2 ===0){
                console.log("Deu 0");
            }
        }
    }


    //Break
    for(let g=20; g>10; g--){
        console.log(`O  valor de g é: ${g}`); 
    
        if(g ===12){
            console.log("O g é 12!");
            break;
        }
    }


    //CONTINUE
    for(let s=0; s<10; s=s+1){
        if(s %2 ===0){
            console.log("Numero par");
            continue;
        }
        console.log(s);
    }


    //switch case

    const job = "advogado"

    switch(job){
        case "Programador":
            console.log("voce e um programador")
            break;
        case "advogado":
            console.log("voce e advogado")
            break;

            case "pedreiro":
                console.log("voce e pedreiro")
                break;
        default :
        console.log("Profissao nao encontrada")
               break;

        }