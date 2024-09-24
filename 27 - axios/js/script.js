//console.log(axios)

const  getData = async() =>{
    try{

        const response = await postsFetch.get("/users",
           //definindo headers
            {
                headers: {
                    "Content-Type":"application/json",
                    //Exemplo de requisicao criada para algum header especifico que criei.
                    //Por exemplo uma requisicao que precise de um token de autorizacao
                    custom:"header",
                }
            }
        );
        console.log(response);
        return response.data;

    }catch(error){
        console.log(error)
    }
}

getData();

/// Imprimindo dados na tela
/* Apos o request é comum exibir os dados na tela.
Podemos fazer isso juntando a resposta da chamada com os nossos conhecimentos em DOM.
Criar elementos baseado no que veio na requisicao */

const container = document.querySelector("#user-container")
const printData = async() =>{
    const data = await getData()
    console.log(data);

    data.forEach((user) =>{
        const div = document.createElement("div")

        const nameElement = document.createElement("h2")
        nameElement.textContent = user.name
            div.appendChild(nameElement)

            const emailElement = document.createElement("h3")
            emailElement.textContent = user.email 
            div.appendChild(emailElement)


            container.appendChild(div)
    })
}

printData();

//Configurando os headers 
/*Os headers são configurados no momento da requisicao.
Podemos adicionar parametros adicionais.
Por exemplo: detemrinar o tipo de dado que queremos. */




//Requisicao de POST
/* Para enviar dados vamos utilizar o metodo post.
É necessario configurar a propriedade body com os dados a serem enviados. */

const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    postsFetch.post("/posts", {
         title: titleInput.value, body: bodyInput.value, userId: 1
    });
});
