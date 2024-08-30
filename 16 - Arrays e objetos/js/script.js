// Arrays - 
const lista = ["ola",1,4,2,5,true]

console.log(lista);
console.log(typeof lista)

//Acessando posicoes do array - Posicoes sao baseadas no zero based, aonde a 1º Posicao é o 0 e nao o 1
console.log(lista[0]);
console.log(lista[3]);


//Propriedades

const numbers = [3,1,5]

console.log(numbers.length)

console.log(numbers["length"])

const myName= "Leonaerdo";
console.log(myName.length)


//Métodos - sao funcoes padroes do js utilizam o tipo do dado + .e nome da funcao e ()
const outrosNumeros = [1,2,3]

const novoNumeros = numbers.concat(outrosNumeros);

console.log(novoNumeros);

const texto = "Texto exemplo";

// TipoDoDado.nomeDoMetodoMaisoColchete()
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());
console.log(texto.indexOf("e"));
console.log(texto.charAt(1));


//Objects literals - objetos
const person = {
    name:"Leonardo siqueira",
    age:31,
    job:"Programador"
}
console.log(person);
console.log(`Este é o nome = ${person.name}`);
console.log(`Este é a quantidade de caracteres no nome = ${person.name.length}`);

//Criando e deletando propriedades - objects
const car = {
    engine:2.0,
    brand:"Honda",
    model:"Corolla",
    km:200000
};

console.log(car);

//add propriedade
car.doors=4;
console.log(car);

//remove propriedade
delete car.km;
console.log(car);


//QUANDO USAR ARRAY OU OBJETOS ?
//array - Usados em lista de itens, geralmente do mesmo tipo = Number ou String ou boolean
//objetos - Usados para descrever um item, contem as informacoes do msm, e as propriedades possuem diferentes tipos de dados

//MAIS SOBRE OBJETOS
//Podemos copiar todas propriedades de um objeto para outro com o método ASSIGN
//Um objeto ou array criado com const PODE TER SEUS ELEMENTOS E PROPRIEDADES MODIFICADOS
const obj = {
    a:"teste",
    b:true
}

console.log(obj instanceof Object)

const obj2= {
    c:[]
}

Object.assign(obj2,obj); //Classe Object.metodoAssign(Objeto que ira receber atribuicao, objeto que ira atribuir)
console.log(obj2);


//Mais detalhes de objetos
//Keys -É O método de Object que retorna as chaves (As variaveis ou constantes de determinados objetos)
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

//Entries - É O método de Object que retorna as chaves E VALORES (As variaveis ou constantes de determinados objetos E SEUS DADOS)
console.log(Object.entries(obj));


/* mutação (Mutability) - É uma caracteristica do objeto que ocorre quando criamos um objeto a partir de outro
Este novo objeto, não é novo e sim uma referência do primeiro
As mudanças dele, podem afetar a copia e vice-versa   */
//CONSTANTE CRIADA
const a = {
    name:"Daniel",
};
//Constante b  recebendo mutação de a
const b = a;

console.log(a);
console.log(b);

//vendo se as constantes sao identicas
console.log(a===b);

//constante a recebendo uma mutacao de um novo number
a.age =31;

console.log(a);
//const b recebendo a mutacao de a, por serem iguais
console.log(b);

//const b removendo mutacao age, e por ser equivalente a const a, a const a tambem remove a mutacao
delete b.age;
console.log(a);
console.log(b);


//LOOP EM ARRAYS
const users = ["matheus","daniel","Leo","julio"];

for(let i = 0; i< users.length; i++){
    console.log(`Usuario com nome= ${users[i]}`);
}

// push e pop - metodos para manipular arrays ao final da lista
const arrayTeste = ["a","b","C"];

console.log(arrayTeste);
//Push - adiciona um item ao fim do array
arrayTeste.push("d");
console.log(arrayTeste);

//Pop - Remove o ultimo elemento do array
arrayTeste.pop();
console.log(arrayTeste);

//É possivel atribuir o valor removido a uma variavel
const itemRemovido = arrayTeste.pop();
console.log(itemRemovido);
console.log(arrayTeste);

//Usando push para add varios itens
arrayTeste.push("z","x","y");
console.log(arrayTeste);


console.log("----------------------------------------------------------------------")

//shift e unshift - metodos para manipular arrays no começo da lista
//SHIFT - Remove o primeiro elemento do array
const letras = ["a","b","c"]
const letra = letras.shift();
console.log(letra);
console.log(letras);

//UNSHIFT - adiciona itens ao inicio do array
letras.unshift("g","s","f");
console.log(letras);
letras.unshift("q");
console.log(letras);


//MÉTODOS DE ARRAY = indexOf e lastIndexOf - para encontrar indice de um elemento, seja no comeco ou fim, caso so haja um ambos metodos terao o mesmo retorno
//IndexOf - nos permite encontrar o indice de um elemento, que passamos como argumento para o método
const myElements = ["morango","Maçã","Abacate","Perâ","Maçã","Abacate"]
console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("morango"));

//AMBOS FAZEM A MESMA COISA - POIS O RETORNO DE myElements[2] possui abacate enquanto
console.log(myElements[2]);
//myElements[myElements.indexOf("Abacate")]);  -- [myElements.indexOf("Abacate")] dentro do colchete se espera o indice e como o indexOf abacate é 2 gera o mesmo resultado
console.log(myElements[myElements.indexOf("Abacate")]);


//LastIndexOf - é utilizado quando há repeticoes de elementos e precisamos de um indice da ultima ocorrencia
console.log(myElements.lastIndexOf("Maçã"));
console.log(myElements.lastIndexOf("Abacate"));
//caso o elemento nao exista retorna -1 tanto em indexOf quanto em lastIndexOf


//SLICE - É utilizado para extrair um array menor de um array maior. O intervalo de elementos
//é determinado pelos parametros, que sao: o indice de inicio e o de fim.
//O ultimo elemento é ignorado, se quisermos ele devemos somar 1 ao indice final
const testeSlice = [1,4,12,64,33,44,13];

subArray = testeSlice.slice(2,4);// do segundo indice no caso 1 ate o quarto indice -1(Pois o ultimo nª nao conta) no caso o 3
console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2,4+1);
console.log(subArray2);

const subArray3 = testeSlice.slice(11, 17);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);


//ForEach - É utilizado junto a uma arrow function
const nums = [1,2,3,4,52,12]
nums.forEach((numero) =>{
    console.log(`O número atual é = ${numero}`);  
});

const posts = [
    {title:"Dbz",
        year:1998,
        Category:"Shounem",
        Type:"Anime"
    },
    {title:"naruto",
        year:1991,
        Category:"Shounem",
        Type:"Anime"
    }
]

posts.forEach((obj)=>{
    console.log(`Exibindo o post ${obj.title}, ${obj.year}, ${obj.Category},${obj.Type}`);
});


//Includes - Verifica se o array tem um elemento.
//Utilizamos no array e COMO ARGUMENTO COLOCAMOS O ELEMENTO QUE BUSCAMOS.
 const listaMarcas = ["BMW","HONDA","SUZUKI"];
 console.log(listaMarcas.includes("FIAT")); //retorna boolean true se existir e false se nao existir;

if(listaMarcas.includes("BMW")){
    console.log("Há carros da marca BMW!");
}


//Reverse - Inverte os elementos de um Array
const ListaParaReverter =[1,2,3,4,5,6,7,8,11,14,12];
console.log(`Lista sem inverter = ${ListaParaReverter}`);

ListaParaReverter.reverse()
console.log(`Lista invertida = ${ListaParaReverter}`);



//---------------------MÉTODOS SOBRE STRING ---------------------------------------------

//Trim - Remove tudo que nao é texto em uma string. Tipo: Caracteres especiais(Não são @ e $, o que remove seria /n, /t, para deixar o texto puro) e espaços em branco.

const ExemploTRIM = " Removendo \n ";
console.log(ExemploTRIM);
console.log(ExemploTRIM.length);
console.log(ExemploTRIM.trim());
console.log(ExemploTRIM.trim().length);


//PadStart - Insere um texto no começo da String.
const testePadStart = "1"; 
//o texto pode ser repetido, de acordo com o segundo argumento ao metodo, ele determina o maximo de caracteres do texto alvo.
//Ex: padStart(aqui o tamanho maximo de caracteres em numero, e aqui o texto que deve ser repetido para completar o tamanho maximo de caracteres)
const newNumber =testePadStart.padStart(4,"0");
console.log(testePadStart);
console.log(newNumber);

//PadEnd - igual o PadStart, porém o contrario, adiciona elementos ao fim ate atingir o tamanho maximo de caracteres definido no 1º argumento
const padEnd = testePadStart.padEnd(8,"teste");
console.log(padEnd);


/*SPLIT - divide uma string em um array.
Cada elemento será determinado por um SEPARADOR EM COMUM.
Os mais utilizados, são: ponto e vírgula, vírgula, espaço.
*/

const frase = "O rato roeu a roupa do rei de Roma";
const frase2="Quem tem luz própria jamais ficará na escuridão., Você atingirá o sucesso quando apresentar com orgulho as cicatrizes que adquiriu ao longo da sua jornada., Quanto mais fortes forem suas provações, maiores serão suas vitórias. ";
const arrayFrase =frase.split(" ");
const arrayFrase2 =frase2.split(",");

console.log(arrayFrase);
console.log(arrayFrase2);


//JOIN - Une um array em uma string 
const testeJoin = arrayFrase.join(" ");
console.log(testeJoin)
const arrayJoin2 = ["caneta", "carro", "lapis"]
const join2= arrayJoin2.join(", ");
console.log(`Lista de itens para comprar = ${join2}`)

//Repeat - Repete um texto n vezes, onde n é o numero que colocamos como seu argumento.
// stringQualqer.repeat(quantidade de vezes em numero para repetir);
const palavra= "casa bonita, ";
console.log(`Testando o repeat : ${palavra.repeat(5)}`);


// ------------------------LISTAS E ARRAYS -----------------------------


//rest Operator - É caracterizado pelo simbolo ...
//Podemos utilizá-lo para receber indefinidos argumentos em uma função;
//Assim nao precisamos declarar exatamente oque vamos receber, deixando a funcao mais ampla 
//Neste caso usamos o rest operator ... para nao definir limites de soma, podemos somar quantos numeros desejarmos
const somaInfinita = (...argumentos) => {
    let total =0;
    for(let i=0; i< argumentos.length;i++){
            total += argumentos[i];
    }
    return total;
}
console.log(somaInfinita(1,2,3));
console.log(somaInfinita(1,42,23,41421,4142,11,114));

//for...of - É uma estrutura de repeticao semelhante ao for, porem mais simples.
//O numero de repeticao é baseado no array utilizado.
//E podemos nos referir aos elementos sem precisar acessar o indice deles.

const somaInfinita2 = (...teste) => {
    let total =0;
    //for (quantidade de numeros OF ...TESTE)
    for(num of teste){
        total += num;
    }
    return total;
}

console.log(somaInfinita2(5,11,15,12));
console.log(somaInfinita2(1,2,3,4,5));

const subInfinita = (...args)=> {
    let total=0;
    for(valores of args){
        total = total - valores;
    }
    return total;
}
console.log(subInfinita(100,10,10,20));


//Destructuring em objetos - é uma funcionalidade que permite desestruturar algum dado.
//No caso dos objetos, é possivel criar variaveis a partir das suas propriedades, com uma simples sintaxe.
const userDetails = {
    firstName : "Leonardo",
    lastName : "Siqueira",
    job : "Programador"
}
//cria um const  passando entre colchete os const ou let {dado1, dado2, dado3} = o nome do objeto.
const {firstName, lastName, job} = userDetails;
console.log(firstName,lastName,job);

//caso tenha algum let ou const com o mesmo nome no codigo, podemos renomear a variavel. 
//Exemplo:  const {dado1:novoNomeDoDado1} = o nome do objeto
const{firstName:nome}=userDetails;
console.log(nome);



//Destructuring e, arrays - Também pode ser utilizado para desestruturar um array em variaveis.
//A sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nome das chaves.
const listaVeiculos =["avião","submarino","carro","moto","trator"];
//CASO TENHA UM INDICE A MAIS, NAO PRECISAMOS ADICIONA-LO SE NÃO QUISERMOS.
//CASO TENHA A MENOS E ADICIONAR MAIS INDICES, O INDICE SERÁ DENIFIDO COMO UNDEFINED, POIS ELE NAO EXISTE
const [veiculoA,veiculoB,veiculoC, veiculoD] = listaVeiculos;
console.log(veiculoA,veiculoB,veiculoC,veiculoD);



//  -----------------------  JSON - JavaScript Object Notation -----------------------


/*conhecendo o JSON (JavaScript Object Notation) - é um dado em formato de texto.
Utilizamos para COMUNICAÇÃO ENTRE API E FRONT-END.
Sua formatação é rigorosa, se for mal feito o dado é invalidado e não conseguimos comunicação.
Seu formato LEMBRA OBJECTS LITERALS.
Regras: apenas aspas duplas e não aceita comentários. */
const myJson = '{"name":"Leonardo","age":24, "skills":["Java","Html","Css","JavaScript"]}';
console.log(myJson);
console.log(typeof myJson);


/*JSON PARA OBJETO E OBJETO PARA JSON
Na maioria das vezes vamos precisar CONVERTER OBJETOS PARA JSON.
Ou UM JSON PARA UM OBJETO javaScript válido.
Utilizamos o objeto JSON e os métodos STRINGIFY e PARSE. 

CONVERTER JSON EM OBJETO  - JSON.parse(objeto json aqui)
 CONVERTER OBJETO em JSON   - JSON.stringify(objeto aqui)
*/


//converter json para objeto
const myObjectOfJson = JSON.parse(myJson);
console.log(myObjectOfJson.name);
console.log(typeof myObjectOfJson.name);

//json invalido - no caso este erro esta no resultado da string name fora de aspas
//const badJson = '{"name":Matheus,"age":31}';
//const myBadObject = JSON.parse(badJson);

myObjectOfJson.isOpenToWork=true;
console.log(myObjectOfJson);


//converter objeto em json Stringify
myNewJson = JSON.stringify(myObjectOfJson);
console.log(myNewJson);
console.log(typeof myNewJson);