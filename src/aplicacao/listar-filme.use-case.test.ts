import {expect, describe, test} from 'vitest'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'
import ListarFilme from './listar-filme.use-case'

describe("Listar filme",()=>{
    test("Deve listar filme",async ()=>{
        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.dados = [
            {
                id:1,
                titulo:"test",
                descricao:"test",
                foto:"test",
            },
            {
                id:2,
                titulo:"test",
                descricao:"test",
                foto:"test",
            }
        ]
        const listarFilme = new ListarFilme(bancoEmMemoria)
        const result = await listarFilme.execute()
        expect(result.length).toBe(2)
        expect(result[0].id).toBe(1)
        expect(result[1].id).toBe(2)
        expect(result[0]).toEqual({
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        })
        expect(result[1]).toEqual({
            id:2,
            titulo:"test",
            descricao:"test",
            foto:"test",
        })
    })
})