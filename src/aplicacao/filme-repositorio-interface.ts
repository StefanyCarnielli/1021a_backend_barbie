export default interface FilmeRepositorioInterface {
    salvar(filme: FilmeDTO): Promise<boolean>;
    listar(): Promise<FilmeDTO[]>;
}
type FilmeDTO = {
    id: number,
    titulo: string,
    descricao: string,
    foto: string
}