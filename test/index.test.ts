import {describe, it, expect} from 'vitest'
import axios from 'axios'
describe('Primeiro teste da aplicação', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})

describe.skip('Cadastro Filme', () => {
    it('Deve cadastrar um filme com sucesso', async () => {
        const filme = {
            id: 1,
            titulo: 'Vingadores',
            descricao: 'Filme dos Vingadores',
            foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
        }
        const resposta = 
            await axios.post('http://localhost:3000/filmes', filme)
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
    it('deve listar um filme cadastrado', async () => {
      const filme = {
          id: 1,
          titulo: 'Vingadores',
          descricao: 'Filme dos Vingadores',
          foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
      }
      const resposta = await axios.post('http://localhost:3000/filmes', filme)

      //1) Buscar o filme cadastrado
      const listaFilmes = await axios.get('http://localhost:3000/filmes/1')
      const filmeCadastrado = listaFilmes.data
      //2)Verificar se o filme devolvido é igual ao que nós cadastramos
      expect(filmeCadastrado).toEqual(filme)
  })
  it('deve listar outro filme cadastrado', async () => {
    const filme = {
        id: 2,
        titulo: 'Barbie',
        descricao: 'Filme da barbie',
        foto: 'data:image/jpeg;base64,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',
    }
    const resposta = await axios.post('http://localhost:3000/filmes', filme)

    //1) Buscar o filme cadastrado
    const listaFilmes = await axios.get('http://localhost:3000/filmes/2')
    const filmeCadastrado = listaFilmes.data
    //2)Verificar se o filme devolvido é igual ao que nós cadastramos
    expect(filmeCadastrado).toEqual(filme)
  })
  it('deve excluir um filme cadastrado', async () => {
    const filme = {
        id: 3,
        titulo: 'Barbie a ser excluido',
        descricao: 'Filme da barbie',
        foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
    }
    const resposta = await axios.post('http://localhost:3000/filmes', filme)
    //console.log("Filme Cadastrado",resposta.data,resposta.status)
    //1) Buscar o filme cadastrado
    const listaFilmes = await fetch('http://localhost:3000/filmes/3',
            { 
              method: 'DELETE',
              headers: {
                "content-type": "application/json"
              }
            })
    expect(listaFilmes.status).toEqual(200)
    expect(await listaFilmes.json()).toEqual(filme)
    //2)Verifica se o filme que foi removido é igual ao que nós cadastramos
    //expect(filmeRemovido).toEqual(filme)

    //3)Buscar o filme que foi removido
    const resposta2 = await fetch('http://localhost:3000/filmes/3')
    expect(resposta2.status).toBe(404)
  })
})