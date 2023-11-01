import BancoEmMemoria from "../infra/banco/banco-em-memoria"
class SalvaFilme{
    private banco = new BancoEmMemoria()
    constructor(){}
    public execute(input:Input):Output|undefined{
        const {id, titulo, descricao, foto} = input
        //Salvar no Banco
        const resultado = this.banco.salvar({id,titulo,descricao,foto})
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