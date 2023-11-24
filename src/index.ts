import express from 'express'
import ListaFilme from './aplicacao/listar-filme.use-case'
import BancoMongoDB from './infra/banco/banco-mongodb'
import SalvaFilme from './aplicacao/salva-filme.use-case'
import cors from 'cors'

const app = express()
const bancoMongoDB = new BancoMongoDB()
app.use(express.json())
app.use(cors())

type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
let filmesCadastrados:Filme[] = []
app.post('/filmes', async(req,res)=>{
    const {id, titulo, descricao, imagem} = req.body
    const filme = {
        id,
        titulo,
        descricao,
        imagem
    }
   
    try{
        const salvarFilme = new SalvaFilme(bancoMongoDB)
        const filmes = await salvarFilme.execute(filme)
     
        res.status(201).send(filmes)
       }catch(error){
        res.status(404).send("Filme Repetido");
       }


})
app.get('/filmes', async(req,res)=>{
    
    const listaFilme = new ListaFilme(bancoMongoDB)
    const filmes = await listaFilme.executar()
    res.send(filmes)

})

app.get('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filmeId = filmesCadastrados.find(Filme => Filme.id == id);
    if(!filmeId) return res.status(404).send("Filme não encontrado");
    res.status(200).send(filmeId);      
});

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})