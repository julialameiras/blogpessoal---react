import axios from "axios";

const api = axios.create({
    baseURL: "https://blogpessoal-bfb5.onrender.com",
})

//o ts permite passar uma funcao como parametro dentro de outra funcao
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}