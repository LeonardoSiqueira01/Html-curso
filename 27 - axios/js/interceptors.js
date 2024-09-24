/* Interceptors
    Interceptors são como middlewares;
    Ou seja, podemos interceptar a requisicao e a resposta;
    Inserindo algum codigo entre estas duas acoes;
*/


//Requisicao

postsFetch.interceptors.request.use(
    function(config){
        console.log("Antes da requisição...")
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

//Response

postsFetch.interceptors.response.use(
    function(response){
        console.log("Antes da resposta...")
        return response;
    },
    function(error){
        return Promise.reject(error);
    }
)
