
//Global instance do axios

/*Podemos alterar diretamente as configuracoes do Axios.
Isso nos gera uma facilidade de trabalhar com os mesmos parametros em todas as requisicoes.
Ou seja, se configuramos os headers na global, nao é necessario configurar nas requisicoes. */

axios.defaults.headers.common["Accept"]="application/json"
axios.defaults.headers.common["Authorization"] = "MEUTOKENDOAPP"