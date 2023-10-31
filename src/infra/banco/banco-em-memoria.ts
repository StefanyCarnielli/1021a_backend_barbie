export default class BancoEmMemoria{

    public dados:any[] = []
    constructor(){}
    public salvar(input){
        return this.dados.push(input)
        return true
    }
}