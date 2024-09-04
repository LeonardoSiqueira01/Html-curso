//Programação assincrona - Precisa ser utilizada quando AS RESPOSTAS NAO SAO OBTIDAS DE FORMA IMEDIATA no programa
/* CHAMADAS A UMA API sao assincronas, nao sabemos quanto tempo a respota pode demorar.
Em programação assincrona as EXECUCOES NAO OCORREM EM FORMATO DE FILA, e sim no seu tempo.
*/


//Função setTimeout - Estabelece uma ação para SER EXECUTADA APÓS UM CERTO TEMPO. 
//Ou seja o codigo continua rodando e depois temos a execucao da funcao


//Funcao setTimeout
console.log("Ainda nao executou");
setTimeout(function(){
    console.log("Requisicao assincrona")
},2000)
console.log("Ainda nao executou 2");


//Função setInterval - é semelhante a setTimeout, ela é executada apos um tempo.
/* Porém ELA NAO PARA DE SER EXECUTADA, temos a sua chamada definida pelo tempo de espera na execucao.
É como um loop infinito com execucao de tempo controlada. */

//setInterval
console.log("Ainda nao comecou");
//setInterval(function(){
//    console.log("Intervalo assincrono");
//},3000);
console.log("Ainda nao comecou 2");

//Promise - É literalmente uma promessa de um valor que pode chegar em um ponto futuro.
//Utilizamos o objeto Promise e alguns métodos para nos auxiliar.
//Promise - objeto principal para criar promises
//Promise.resolve - Método que vai resolver a expressao inicial
//Promise.then - Método que vai levar a promise a diante
const promessa = Promise.resolve(5+5)

console.log("Algum codigo")
promessa.then((value)=>{
    console.log(`A soma é ${value}`);
    return value;
})
.then((value) => value - 1 )
.then((value) => console.log(`Agora a soma é ${value}`));
console.log("Outro codigo");


//Falhas nas Promises
/* Uma PROMISE PODE CONTER UM ERRO, ou dependendo de como o codigo e executado podemos receber um erro.
Utilizamos a funcao catch para isso, podemos pegar o  erro e exibir. */

//Falha na promise - tratando com catch
Promise.resolve(4*"das").then((n) =>{
    if(Number.isNaN(n)){
        throw new Error("Valores invalidos!")
    }
})
.catch((err)=> console.log(`Um erro ocorreu: ${err}`));


//Rejeicao de Promises
/*A rejeicao, DIFERENTE DO ERRO, ocorre quando nós decidimos ejetar uma promise.
Podemos fazer isso com o metodo reject */

//reject
function checkNumber(n){
    return new Promise((resolve,reject) =>{
        if(n>10){
            resolve(`O numero é maior que 10`);
        }else{
            reject(new Error("Numero muito baixo"))
        }
    } )
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err)=> console.log(`Um erro ocorreu: ${err}`));

b.then((v) => console.log(`O resultado é ${v}`)).catch((err)=> console.log(`Um erro ocorreu: ${err}`));
//Usamos o then pra esperar o resultado certo e o catch para retornar o erro se nao vier o dado certo


//Resolvendo varios promises - Com o método all podemos executar varias promises
//O JS se encarrega de verificar e retornar os seus valores finais 
const p1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve(10)
    }, 3000);
})

const p2 = Promise.resolve(10 + 10);


const p3 = new Promise((resolve,reject) =>{
    if(30>10){
        resolve(30)
    }else{
        reject("Error!");
    }
});
//Aqui o promise.all recebe em array todos valores que precisam serem retornados em conjunto
Promise.all([p1,p2,p3]).then((values) => console.log(values));

//Async Functions - São funções que retornam promises;
//Consequentemente há a possibilidade de receber o resultado delas depois, alem da UTILIZACAO DOS METODOS DE PROMISE.
async function somarComDelay(a,b) {
    return a+b;
}

somarComDelay(2,4).then((value)=>{
    console.log(`O valor da soma total é = ${value}`)
});

console.log("Teste async")

//Instruçaõ await - Serve para aguardar o resultado de uma async function.
/* Tornando mais simples lidar com este tipo de funcao, desta maneira nao precisamos trabalhar diretamente com Promises */
// async await
//NOTA: O AWAIT SO FUNCIONA EM FUNCOES ASSINCRONAS - async functions
function resolveComDelay(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("resolveu a promise !!");
        }, 2000);
    })
}
//NOTA: O AWAIT SO FUNCIONA EM FUNCOES ASSINCRONAS - async functions
async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado")
    //sintaxe = variavel nomeVariavel = await nomeDaFuncaoAsync();
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`) 
}

chamadaAsync();



//Generators - Funcionam de formas semelhantes as promises.
//Ações podem ser pausadas e continuadas depois.
//Temos novos operadores, como: function* e yield;
//GENERATORS - São menos usados do que as promises 

function* generatorTeste(){
    yield 1
    yield 2
    yield "teste yield 123"
}

const gen = generatorTeste();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);