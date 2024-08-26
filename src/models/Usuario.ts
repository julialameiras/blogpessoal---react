//é um modelo de dados (ts) nao um componente (que retorna html e css) (tsx)

import Postagem from "./Postagem";

export default interface Usuario{
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem | null;
}