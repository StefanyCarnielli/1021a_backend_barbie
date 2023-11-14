import {describe,test,expect,beforeEach} from 'vitest'
import BancoMongoDB from './banco-mongodb'
describe("Banco MongoDB",()=>{
    const bancoMongoDB = new BancoMongoDB();
    beforeEach(async ()=>{
        await bancoMongoDB.filmeModel.deleteMany({});
    })
    test("Deve salvar no banco MongoDB",async ()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        }
        const result = await bancoMongoDB.salvar(input)
        //bancoMongoDB.desconectar()
        expect(result).toBe(true)
    })
    test("Deve listar os filmes do banco MongoDB",async ()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        }
        await bancoMongoDB.salvar(input)
        const result = await bancoMongoDB.listar()
        //bancoMongoDB.desconectar()
        expect(result[0].id).toBe(1)
        expect(result[0]).toEqual(input)
    })
})