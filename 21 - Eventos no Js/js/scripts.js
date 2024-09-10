//eventos - São ações atreladas a algum comportamento do usuario.
/*EX: click, alguma tecla, movimento da tela e do mouse.
Podemos inserir logica quando estes eventos ocorrem.
E podemos disparar eventos em certos elementos.
Esta técnica é conhecida como EVENT HANDLER */


//Como adicionar um evento

/*Primeiramente precisamos SELECIONAR O ELEMENTO que vai disparar o evento.
Depois v amos ativar um método chamado addEventListener */

//adicionando eventos
const btn = document.querySelector("#my-button")

//addEventListener(tipo do evento em string , a função que vai acontecer apos clicar no evento)
btn.addEventListener("click",function(){
    console.log("Clicou aqui!")
})


//Removendo evento
/* A situações que é necessario remover eventos dos elementos.
O método para isso é removeEventListener.
Passamos o evento que queremos remover como argumento */
const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("teste!");
}
secondBtn.addEventListener("click",imprimirMensagem);

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click",() => {
    console.log("Evento removido!");
    //Removendo evento
    secondBtn.removeEventListener("click",imprimirMensagem);
});

//O objeto evento
/* Todo evento possui um ARGUMENTO ESPECIAL, que contem informacoes do mesmo.
Geralmente chamado de event ou e */

const myTittle = document.querySelector("#my-title");
myTittle.addEventListener("click",(event)=>{
console.log(event);
console.log(event.offsetX);
console.log(event.pointerType); 
console.log(event.target);
});


//Propagação de evento
/* Quando um elemento de um evento não é claramente definido pode haver propagação.
Ou seja, um outro elemento ativar o evento.
Para resolver este problema temos o método stopPropagation */

//Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", ()=>{
    console.log("Evento 1");
})

btnInsideContainer.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Evento 2");
});

//AÇÕES DEFAULT 
/*Muitos elements tem ações padrão no HTML .
Como os links que nos levam a outras páginas.
Podemos remover isso com o método preventDefault .*/
//Removendo evento padrão
const a = document.querySelector("a")
a.addEventListener("click", (e)=>{
    //cancelou a ação padrão
    e.preventDefault()
    console.log("Não alterou a página");
})


//Eventos de tecla
/* Os eventos de tecla mapeiam as AÇÕES NO TECLADO.
Temos a disposição o keyup e keydown.
keyup - ativa quando a tecla é solta. - para buscas
keydown - ativa quando é pressionada. - para validação */
document.addEventListener("keyup",(e)=>{
    console.log(`Soltou a tecla ${e.key}`)
});

document.addEventListener("keydown", (f)=>{
    console.log(`segurou e soltou a tecla ${f.key}`)
})

//Outros eventos com o mouse
/*O mouse pode ativar outros eventos.
mousedown: pressionou botão do mouse.
mouseup: soltou o botão do mouse.
dblclick:clque duplo. */
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown",()=>{
    console.log("pressionou o botão do mouse")
})

mouseEvents.addEventListener("mouseup",()=>{
    console.log("Soltou o botão do mouse")
})

mouseEvents.addEventListener("dblclick",()=>{
    console.log("clique duplo")
})

//Movimento do mouse 
/*É possivel ativar um evento a partir da movimentação do mouse.
O evento é o mousemove.
Com o objeto de evento podemos detectar a posicao do ponteiro do mouse. */
document.addEventListener("mousemove",(e)=>{
 //   console.log(` No eixo x: ${e.x}, no y: ${e.y}`)
})


//Eventos por scroll
/*Podemos também adicionar um evento ao scroll do mouse/página.
Isso é feito pelo evento scroll.
Podemos determinar que algo aconteça após chegar numa posição escolhida da tela.  */
window.addEventListener("scroll",(e)=>{
    if(window.pageYOffset > 200)
    console.log("Passamos de 200px")
})

//Eventos de Foco
/*O evento focus é disparado quando focamos em um elemento.
Já o blur é quando perde o foco do elemento.
Estes são comuns em inputs. */
const input = document.querySelector("#my-input")

input.addEventListener("focus",(e)=>{
    console.log(`Entrou no input`)
})

input.addEventListener("blur",(e)=>{
    console.log(`Saiu do input`)
})

//Eventos de carregamento de página
/*Podemos adicionar um evento ao carregar a página, que é o load.
E quando o usuário sai da página, que é o beforeunload*/

window.addEventListener("load",()=>{
    console.log("A página carregou!");
})

window.addEventListener("beforeunload",(e)=>{
e.preventDefault();
e.returnValue ="";
});

//Técnica de debounce
/*O debounce é uma técnica utilizada para fazer um evento disparar menos vezes.
Isso poupa memória do usuário, pois talvez nem sempre o evento seja necessário. */
const debounce = (f,delay) =>{
let timeout

return (...argumentos) =>{
    if(timeout){
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
       f.apply(argumentos) 
    }, delay);
}
}

window.addEventListener("mousemove",debounce(()=>{
console.log("Executando a cada 400ms  ")
}, 400))
