import {describe, test, expect} from 'vitest'
import BancoEmMemoria from './banco-em-memoria'
describe ("Testando usecase de salvar filme",()=>{
    test ("Deve salvar um filme",()=>{
        //Entrada
        const filme = {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test"
        }

        //Processamento
        const salvaFilme = new SalvaFilme()
        const {id, titulo, descricao, foto} = filme
        const resultado = salvaFilme.execute({id,titulo,descricao,foto})

        //Resultado 
        expect(resultado).toEqual(filme)
    })
})