import {describe, test , expect} from 'vitest'
import SalvaFilme from './salva-filme.use-case'
describe("Testando usecase de salvar filme",()=>{
    test("Deve salvar um filme",()=>{
        
        const filme = {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test"
        }
        
        const salvaFilme = new SalvaFilme()
        const {id, titulo, descricao, foto} = filme
        const resultado = salvaFilme.execute({id,titulo,descricao,foto})
       
        expect(resultado).toEqual(filme)
    })
})