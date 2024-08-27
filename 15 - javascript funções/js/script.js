function mensagem(){
    console.log("Testando função");
}


mensagem();

mensagem();

const minhaFuncaoVariavel = function(){
    console.log("Funcao em variavel");
}

minhaFuncaoVariavel();

function soma(valor, valor2){
    return valor+valor2; }


function imprimirNota( v1,v2){
     valor = soma(v1,v2);
     console.log(`Sua nota foi de ${valor}`) }


v1=10,v2=10;

imprimirNota(v1,v2);

// soma exemplo
const a=10;
const b=20;
const c=30;
const d=40;

function subtracao(v1,v2){
    return v1-v2;
}


function impressao(a,b){
console.log(`A subtração de ${a} - ${b} é = ${ subtracao(a,b)} `)}

impressao(d,a);


//Testando escopo funções
let y =10;

function dentroFuncao(){
    let y=20;
    console.log(`o valor dentro do escopo é = ${y}`);
}
dentroFuncao();
console.log(`o valor fora da função é = ${y}`);

//Escopo aninhado
let m=10;

function escopoAninhado(){
    let m=20;
    if(true){
        let m=30;
        if(true){
            let m=40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();
console.log(m);


//ARROW FUNCTION - é uma função anônima, ou seja precisa estar dentro de uma variável
const testeArrow = () => {
    console.log("Esta é uma arrow function");
} 

testeArrow();

const parOuImpar = (n) => {  
    if(n%2 ===0){
       console.log(`o numero ${n} é par!`)
       return
    }else{
          console.log(`o numero ${n} é impar!`)
          return
    }
}

parOuImpar(7);
parOuImpar(10);

//MAIS SOBRE ARROW FUNCTION - deixando codigo simples de function mais objetivo, apenas removendo os { }
//  const nomeDaConstante = (valores atribuidos para a arrow function ) => { return dados dos valores e processamento a ser retornado}
const raizQuadrada = (x) =>{ 
    return x*x;
};

console.log(raizQuadrada(4));
// Exemplo 1 - removendo { }
const raizQuadrada2 = (x)=> x*x;
console.log(raizQuadrada2(10));

//Exemplo 2 - Se quiser não precisa ter retorno
const helloWorld = () => console.log("Hello world!");
helloWorld();

//ERRO Comum - colocar a funcao com console.log pra executar dentro de outro console.log
//apos fazer isso o codigo executa o console.log da funcao e limpa e na hora de executar o
// console.log fora do escopo da funcao ele gera um erro undefined porque esta vazio.
console.log(helloWorld());


 //Parametros Opcionais - Os argumentos das funções são obrigatorios, porem a casos que são opcionais
 //para fazer isso podemos fazer uma chacagem do parametro com um if

 const multiplicacao = function(m,n){
    if (n === undefined){
        return m*2
    } else {
       return m*n
    }
 }

 console.log(multiplicacao(4))

 console.log(multiplicacao(5,2))


 const saudacao = (nome) => {
    if(!nome){
        console.log("Hello bro!");
        }else {   console.log(`Hello ${nome}`);
        }}

 saudacao();
 saudacao("Leonardo");

 //Valor default
 const customSaudacao = (nome, saudacao="Ola") => {
    return `${saudacao}, ${nome}!`;
 }
console.log( customSaudacao("Leonardo"));
console.log( customSaudacao("Daniel","Bom dia"));

const repetirTexto = (repetir,teste="ola mundo") => {
    for ( let re = 0; re< repetir;re++){
    console.log(`Texto repetido =${repetir} vezes, ${teste}`)}
}

repetirTexto(5, "ola");


//closure - é um conjunto de funcoes, onde temos um reaproveitamento do escopo interno de uma funcao
function someFunction(){
    let txt = "Alguma coisa";
    function display (){
        console.log(txt)
    }
    display();
}

someFunction();

//Mais sobre closure - tambem pode servir para salvar os resultados ja executados
const multiplicacaoClosure = (n) => {
    return (m) => {
        return n*m;
    };
}

const c1 = multiplicacaoClosure(5)
const c2 = multiplicacaoClosure(10)

 console.log(c1);
 console.log(c2);
 console.log(c1(5));
 console.log(c2(10));


//Recursão - Um recurso que permite a funcao se autoinvocar continuamente
//Criamos uma especie de loop

const ate10 = (n,m) =>{
    if(n <10){
        console.log("A funcao parou de executar!");
    }else{
        const x =n-m;
        console.log(x)
        ate10(x,m)
    }
}

ate10(100,7);
/*
//recursao infinita (bug)
function run(){
    console.log("executando...")
    run();
} */


function fatorial(x){
    if(x===0){
        return 1;
    }else{
        return x* fatorial(x-1)
    }
}

const num =6;
const resultado = fatorial(num);
console.log(`O fatorial do numero ${num} é = ${resultado}`)