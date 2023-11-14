import FilmeRepositorioInterface from "./filme-repositorio-interface"
class SalvaFilme{
    
    constructor(private bancoInterface:FilmeRepositorioInterface){}
    public async execute(input:Input):Promise<Output|undefined>{
        const {id, titulo, descricao, foto} = input
        //Salvar no Banco
        const resultado = await this.bancoInterface.salvar({id,titulo,descricao,foto})
        //Retornar o resultado
        if(!resultado) return undefined 
        return {id, titulo, descricao, foto}
    }
}
export default SalvaFilme

type Input = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}
type Output = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}