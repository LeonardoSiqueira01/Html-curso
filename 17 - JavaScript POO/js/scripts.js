//Métodos - podem ser adicionados aos objetos, são iguais funcoes
const animal = {
    nome:"Milka",
    latir: function (){
        console.log(`Au au`);
    }
};

console.log(animal.nome);
animal.latir(); 


// aprofundando em metodos - usando this para referenciar o proprio objeto
const pessoa = {
    nome:"Leo",
    getNome: function(){
        return this.nome;
    },
    setNome: function(novoNome){
        return this.nome =novoNome;
    }

};
pessoa.setNome("Patricia");
console.log(`O NOME É ${pessoa.getNome()}`)

//Prototype - É um recurso que faz parte da arquitetura do JS.
/* É uma especie de herança, onde objetos pais herdam propriedades e metodos aos filhos, por isso 
muitos dados sao considerados objetos e temos objetos, como: String, Number etc..
Ou seja, cada dado tem um objeto pai herdou caracteristicas pelo prototype. */


//Prototype na prática
/* O recurso fundamental do prototype que temos que entender é o FALLBACK;
Quando uma propriedade nao existe em um dado/objeto, ELA É PROCURADA NO SEU ANCESTRAL.
Ou seja, é por isso que temos acesso a length em strings, por exemplo.
*/

//Resumindo o prototype é equivalente as wrappers class em java, eles definem os valores e métodos padrao para cada tipo especifico de dado
const text = "alguima cosia";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr =[];
console.log(Object.getPrototypeOf(arr));



//Mais sobre prototypes
/*Quando criamos um obj a partir de outro, este outro sera o prototype do objeto criado.
Porem tambem herdara as caracteristicas do objeto pai, se for um objeto, herda de object.
Esta é a cadeira de prototype */
const myObject = {
    a:"b"
}

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a)
console.log(Object.getPrototypeOf(mySecondObject) ===myObject)



//Classes básicas 
const cachorro = {
    raca: null,
    patas:4
}

const pastorAlemao = Object.create(cachorro);
//obj1
pastorAlemao.raca = "Pastor alemao";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);
//obj2
const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog)



//Classes baseadas em funções construtoras - Função construtora
function criarCachorro(nome,raca){
    const cachorro = Object.create({})
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro   
}

const bob = criarCachorro("Bob","Vira lata")
console.log(bob);

const jack = criarCachorro("jack","poodle")
console.log(jack);

console.log(Object.getPrototypeOf(jack));


//Classes baseadas em funcoes - funcoes como classes
function Cachorro(nome,raca){

    this.nome=nome;
    this.raca=raca;
}

const husky = new Cachorro("Ozzy","husky");
console.log(husky);

//Metodos na funcao construtora
Cachorro.prototype.uivar= function(){
    console.log("Auuuuu!");
}
husky.uivar();

// Classes ES6
class cachorroClasse{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new cachorroClasse("Jeff","pitbull")

console.log(jeff)


//Mais sobre classes - Não podemos adicionar propriedades diretamente nas classes.
class Caminhao{
    constructor(eixos,cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} e é dar cor ${this.cor}`);
    }
}

const scania = new Caminhao(6,"Azul");
console.log(scania)
scania.descreverCaminhao();
Caminhao.motor =4;

const c2 = new Caminhao(4,"preto");
console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor=4.0;

const c3 = new Caminhao(4,"verde");
console.log(c3.motor);


//Override nas propriedades via prototype
/* As instancias dos objetos sao criadas baseadas nas classes 
Ou seja, as propriedades tem os valores definidos no construtor ou por metodos.
Para altera-los podemos utilizar o prototype
*/
class Humano{
    constructor(nome,idade){
        this.nome=nome;
        this.idade = idade;
    }

}

const leo = new Humano ("Leo",24);
console.log(leo);
Humano.prototype.idade="Idade não definida"
console.log(leo.idade)
console.log(Humano.prototype.idade);



//Symbols - em classes
/* Quando utilizamos o recurso Symbol com classe, é possivel criar uma propriedade unica e imutavel.
Isso é util quando ha algum dado que se repetira em todos os objetos criados a partir da classe */
class Aviao{
    constructor(marca,turbinas){
        this.marca=marca
        this.turbinas=turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] =3
const boeing = new Aviao("Boeing",10)

console.log(boeing)

console.log(boeing[asas])
console.log(boeing[pilotos])

//Getters e Setters
class Post {
    constructor(titulo,descricao,tags){
        this.titulo=titulo;
        this.descricao =descricao;
        this.tags=tags;
    }
    get exibirTitulo(){
        return `Voce está lendo ${this.titulo}`;
    }
    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags =tagsArray;
    }
}
const mypost= new Post("Algum post","é um posto sobre programacao");
console.log(mypost)

console.log(mypost.exibirTitulo)

mypost.adicionarTags="programacao, javascript, js"


//heranca - usamos extendes para adicionar a classe que vai trazer as propriedades e super para enviar os valores para classe pai
class mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends mamifero{
    constructor(patas,nome){
        super(patas,patas)
        this.nome= nome
    }
}

const lobin = new Lobo(4,"lobin");
console.log(lobin)


//InstanceOf = assim como o Typeof que verifica o tipo, temos o instanceOf.
/* Que verifica se um objeto é pai de outro, para ter certeza da heranca
Isso é verificado com objeto => classe, e nao atraves das classes */
console.log(lobin instanceof Lobo)
console.log(Lobo instanceof mamifero) // aqui da false porque verifica as classes e nao objetos
console.log(new Lobo(4,"Teste")instanceof mamifero)
console.log(new Post("a","b") instanceof Lobo)

