import FilmeRepositorioInterface from "./filme-repositorio-interface"

export default class ListarFilme{
    constructor(private filmeRepositorio:FilmeRepositorioInterface){}
    public async execute():Promise<Filme[]>{
        return this.filmeRepositorio.listar()
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}