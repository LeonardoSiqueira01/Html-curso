//Number
console.log(2);
console.log(2.56);

console.log(typeof 12);
console.log(typeof a);
console.log(typeof 's');
console.log(typeof true);

//Operadores aritmeticos

console.log(6 / 12);
console.log(4* 12);
console.log(11- 12);
console.log(5+ 12);
console.log(5+12*2+(4/6));


//Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "1231");
console.log(NaN);

//Strings 
console.log("Exemplo de testo");
console.log(`Mais um texto`);
console.log(typeof "Exemplo de testo");
console.log(typeof `Mais um texto`);

//String qebra de linha  \n e espaçamento tab \t
console.log("Texto em \n Duas linhas - '\ n' usado para pular linhas");
console.log("Espaçamento de \t tab ")

//Concatenação
console.log("Testando "+ `Concatenação`);
console.log("Testando "+ `Concatenação`+"2");

//Interpolação - semelhante a concatenação, porém possibilita escrever tudo na msm string
//OBS: Deve ser colocado o codigo SOMENTE ENTRE ASPAS `string aqui ${operacao aqui }`
console.log(`A soma de 2+2 é: ${2+2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);


//Boolean >, <, ==
console.log(true);
console.log(5>20);
console.log(30>10);
console.log(typeof true);

//Comparações >, <, >=, <=, !=, ===
console.log(2>1);
console.log(3<2);
console.log(3>=1);
console.log(4<=1);
console.log("ola"!= "sim");
console.log(4!= 5);
console.log(5===5);
console.log("s"==="s");

//Comparação de idêntico, === comparação dos valores e tipos de dados, == comparação somente dos valores, mesmo que os tipos de dados sejam diferentes. Ex: 9String e 9Number
//=== para identico
//== para iqual
console.log(9 =="9");
console.log(9 +"9");
console.log(9 !="9");
console.log( 9 !== "9");
console.log( 9 ==="9");
console.log(9 =="9");

//Operadores Lógicos && || e !
console.log("oi" && "oi");
console.log("oi" && "eae");

console.log(5>2 || "oi"==="ola");
console.log(5+2 >=7 && 4-1>1 );

console.log(!5>2);
console.log(!true);

//Empty values - undefined e null
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(undefined == false);

//Conversão de tipo automática - erros e conflitos
console.log(5 * null);
console.log("teste"*"opa");
console.log("10"+1);
console.log("10"-1);