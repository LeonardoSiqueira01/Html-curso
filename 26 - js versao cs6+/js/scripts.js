// var, let e const  - Var nada mais é que a versao antiga de uma variavel, hj com o cs6 utiliza-se let para variavel e const para constante
var x = 10
var y = 15

if(y>10){
    var x = 5
    console.log(x)//x = 5
}

console.log(x) //x - x aqui continua = 5 pois o valor de x acima, atribuiu o novo valor a variavel x, se fosse let o valor voltaria ao 10, pois esta fora do escopo do if

let a = 10;
let b = 15;

if(b>10){
    let a = 5;
    console.log(a)
}

console.log(a)

function logName(){
    const name = "Pedro"
    console.log(name)
}

const name = "Joao";
logName();
console.log(name);
//tudo que estiver dentro de chaves, sao respeitados e os valores sao validos somente dentro dela, nas novas versoes


//Arrow functions - formas mais simples de criar funcoes.
//Alguns aspectos as diferenciam das funcoes comuns - como por exemplo o this, que é relacionado ao elemento pai de quem esta executando 

const sum = function(a, b){
    return a+b;
}

const arrowSum = (a,b) => a+b;

console.log(`Soma com função Normal = ${sum(10,5)}`)
console.log(`Soma com Arrow Function = ${arrowSum(10,5)}`)
//-----------------------Forma 1 de fazer a funcao ---------------------------------

const greeting = (name) =>{
    if(name){
        console.log(`Hello ${name}`)
    }else{
        console.log("Hello")
    }
}


greeting("Daniel")
greeting();

//-----------------------Forma 2 de fazer a funcao ---------------------------------
const greeting2 = (name) =>{
    if(name){
        return `Hello ${name}`
    }else{
        return "Hello"
    }
}

console.log(greeting2("Daniel"));

console.log(greeting2());


const user = {
    name : "Theo",
    sayUserName(){
    setTimeout(function()  {
        console.log(this)
        console.log(`Username: ${this.name}`)
    }, 1000);
},
sayUserNameArrow(){
    setTimeout(()=>{
        console.log(this)
        console.log(`Username: ${this.name}`)
    },2000);
}
}

user.sayUserName();
user.sayUserNameArrow();

// ------------------------------ FILTER ---------------------------------------
/*O filter é um metodo de array para filtrar dados.
O filtro é determinado por nos, por meio de uma funcao.
Resultado em um array coom apenas os elementos que precisamos.
Nessas verões mais novas de JS temos varios metodos de array importantes como este. */
const arr = [1,2,3,4,5,6]

const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [
    {name:"mateus", available: true}, 
    {name:"maria", available: false}, 
    {name:"marcela", available: true}, 
    {name:"muriel", available: true}, 
    {name:"mathias", available: false}, 
    {name:"murilo", available: true}

]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)

const products = [
   { name:"camisa",preco:20, category:"roupas"},
   { name:"chaleira eletrica",preco:200, category:"eletro"},
   { name:"fogao",preco:599, category:"eletro"},
   { name:"calça jeans",preco:28, category:"roupas"},
]

//Map - mÉTODO DE ARRAY QUE percorre todos os elementos do mesmo.
// O map é utilizado para MODIFICAR O ARRAY DE ORIGEM.
//Filter remove elementos desnecessarios, map altera o que precisamos

products.map((product) =>{
    if(product.category === "roupas"){
        product.onSale = true
    }
})

console.log(products)

//Templates literals
/* O recurso de template literals permite a impressao de variaveis em um texto  `  ${variavel aqui}`*/
const username= "mateus"
const age = 21

console.log(`O NOME É ${username} e ele tem ${age} anos`)


//Destructuring
/* É a desestrutura de dados complexos eem varias variaveis.
Podemos utilizar em arrays e objetos.
Muitas variaveis podem ser criadas em uma unica linha*/

const fruits = ["maça","mamão","banana"]

const [f1,f2,f3] = fruits

console.log(f1,f3)

const productDetails = {
    name:"mouse",
    price:39.99,
    category:"periferico",
    color:"cinza"
}

const 
    {name:nameProduct,price,category, color} = productDetails;


console.log(`O nome do produto é ${nameProduct}, e ele é da cor ${color}`)


/*Spread operator - Pode ser utilizado em arrays e objetos.
Utilizamos para inserir novos valores em um array ou objeto.
É um recurso que pode unir dois arrays, por exemplo. */

const a1 = [1,2,3]
const a2 =[4,5,6]

const a3 = [...a1, ...a2];

console.log(a3)

const a4 = [0, ...a3, 7, 99]
console.log(a4)



//Classes - sao recursos fundamentais pra programar OO;
//Temos acesso a recursos importantes, como: constructor, propriedades , metodos.
//Antes as classes em JS eram criadas com constructor, functions


class Product {
    constructor(name, price ){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price *((100- discount)/ 100)
    }
}

const shirt = new Product("camisa gola v", 20)
console.log(shirt)
console.log(shirt.productWithDiscount(20));
console.log(shirt.productWithDiscount(50));

//Herança - Possibilidade de uma classe herdar metodos e propriedades de outra.
//A palavra extends determina qual classe sera herdada.
//Para enviar propriedades para a  calsse pai utilizamos super, isso é necessario.

class ProductWithAtrributes extends Product{
    constructor(name, price, colors){
        super(name,price)
        this.colors = colors;
    }

    showColors(){
        console.log("As cores são: ")
            this.colors.forEach((color) => {
                console.log(color);
            });
        }
    }


const hat = new ProductWithAtrributes("chapeu", 29.99, ["preto","amarelo","verde"])

console.log(hat)
console.log(hat.name)
hat.showColors();