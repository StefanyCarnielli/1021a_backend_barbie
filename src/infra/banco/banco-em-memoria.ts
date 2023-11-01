export default class BancoEmMemoria{
    public dados:any[] = []
    constructor(){}
    public salvar(input){
        this.dados.push(input)
        return true
    }
}