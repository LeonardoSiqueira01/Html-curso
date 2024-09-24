//CUSTOM INSTANCE DO AXIOS
/* A Custom Instance é semelhante a Global Instance.
Porém aqui temos outras propriedades que sao possiveis de configurar como a baseURL.
Esta estrategia deve ser utilizada para personalizacao do nosso projeto.
Obs: Não é recomendado utilizar as duas instances juntas (manutenção, configuração em dois locais...) */

const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        Accept: "application/json",
        Authorization: "meunovotoken",
    },
});