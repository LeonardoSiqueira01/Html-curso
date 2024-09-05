//Movendo-se pelo DOM
/* Todos elementos podem ser acessados através de document.body   .
A partir deste elemento pai, vamos encontrando os childNodes(Nós);
E podemos acessar suas propriedades, e consequentemente modifica-los.
*/
//Visualizar todo body
console.log(document.body);

//visualizar todos componentes do html
console.log(document.body.childNodes);

//visualizar todos elementos do html através de uma load list pelo indice atraves de um array
console.log(document.body.childNodes[1]);

//acessar um elemento especifico e vendo o texto desse elemento
console.log(document.body.childNodes[1].childNodes[1].textContent);

/* ---------------------------------MENOS UTILIZADOS--------------------------------- */

//Selecionando elementos
/* Temos varias formas de selecionar especificamente um elemento, ou um conjunto deles.
A diferença entre eles é a FORMA DE SELEÇÃO, que pode ser por: classe, id, seletor de CSS.
Alguns exemplos são: getElementsByTagName, getElementById, querySelector; */

//getElementsByTagName - Selecionamos um conjunto de elementos por uma tag em comum.
//O argumento é uma string que leva a tag a ser selecionada
const listItens = document.getElementsByTagName("li");
console.log(listItens);


//getElementByID - Selecionamos um unico elemento, ja que o id é unico na pagina.
//O argumento é uma string que leva o id a ser selecionado.
const title = document.getElementById("title");
console.log(title);


//getElementsByClassName - Selecionamos um conjunto de elementos por uma classe em comum.
//O argumento é uma string que leva a classe a ser selecionada.
//Veja como os atributos html comecam a fazer mais sentido em conjunto com o JS.

const products = document.getElementsByClassName("product");
console.log(products);

/* ---------------------------------MAIS UTILIZADOS--------------------------------- */

// querySelectorAll - Utilizado para encontrar elementos através de um seletor de css.
//E com queySelector - apenas um elemento como base tambem um seletor de CSS. 

const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);



//---------------------------------------ALTERANDO O HTML------------------------------------------------
/*Podemos mudar praticamente toda a pagina com DOM
Adicionar, remover e ate clonar elementos.
Alguns metodos muito utilizados sao: 
insertBefore - Inserir elemento antes de outro
appendChild - Inserir elemento dentro de outro
replaceChild - Trocar elemento por outro   */


//InsertBefore - Cria um elemento antes de outro
// é necessario criar um elemento com JS, isso pode ser feito com createElement.
//O elemento de referencia pode ser selecionado com alguns metodos que vimos antes.
const p = document.createElement("p");
const header = title.parentElement; //ParentElement = para acessar elemento pai
header.insertBefore(p, title) // insertBefore(objeto inserido, objeto que recebe a inserção)


//appendChild - adiciona elemento dentro de outro.
//Este elemento adicionado sera o ultimo elemento do elemento pai.
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);


//replaceChild - É utilizado para trocar um elemento.
//Novamente precisa de um elemento pai, e tambem o elemento para ser substituido e o que vai substituir.
 const novoTitulo = document.createElement("h2")
 novoTitulo.textContent = "Novo titulo"; //textContent = " poe aqui o novo conteudo de texto para essa variavel"
 header.replaceChild(novoTitulo,title);


//--------------------------------------------------------------------------------------------------------------------
// createTextNode 
//Criando nós de texto - O texto pode ser manipulados com metodos tambem
 //Temos o    createTextNode     ,que cria um nó de texto.
 //E este nó pode ser inserido em um elemento.

 const myText = document.createTextNode("Agora vamos adicionar mais um titulo");
 console.log(myText)
 const h3 = document.createElement("h3");
 h3.appendChild(myText);
 console.log(h3)
mainContainer.appendChild(h3);


//--------------------------------TRABALHAR COM ATRIBUTOS--------------------------------------
/*Podemos ler e alterar os valores dos atributos.
Para ler vamos utilizar o metodo   getAttribute.
E para alterar utilizamos o metodo setAttribute, este leva o nome do atributo e o valor para alterar. */
const firstLink = navLinks.querySelector("a") // este querySelector so pega o primeiro elemento, no caso o do tipo a
console.log(firstLink);
firstLink.setAttribute("href","https://www.google.com"); //mudar o href
console.log(firstLink.getAttribute("href")); //dando o get(recuperar) o atributo href
firstLink.setAttribute("target","_blank") //mudar o target para abrir em uma nova aba com _blank


//Altura e largura dos elementos
/* É possivel tambem pegar valores com altura e largura dos elementos.
Vamos utilizar as propriedades: offsetWidth e offsetHeight.
Se queremos desconsiderar as bordas, temos:
clientWidth e clientHeight */

const footer = document.querySelector("footer")
console.log(` altura sem as bordas = ${footer.offsetHeight}`);
console.log(` Largura sem as bordas = ${footer.offsetWidth}`);

console.log(`largura com as bordas = ${footer.clientWidth}`)
console.log(`altura com as bordas = ${footer.clientHeight}`)

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);


// getClientBoundingRect - Posicao do elemento
/* Com o método getClientBoundingRect - podemos pegar varias informacoes no elemento.
Como:  posicao no eixo x,y, altura, largura e outros */

const product1 = products[0];
console.log(product1.getBoundingClientRect());


//Estilos com JS 
/*Todo elemento possui uma propriedade chamada style.
A partir dela conseguimos alterar as regras de CSS.
Note que regras separadas por traço viram camelCase.
Exemplo: background-color => backgroundColor. */

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px"; 

//Alterando estilos de HTMLCollection
/*HTMLCollection aparece quando selecionamos varios elementos de uma vez.
Podemos passar por cada um dos elementos com um for of, estilizar individualmente cada item */
for(const li of listItens){
    li.style.backgroundColor = "green";
}