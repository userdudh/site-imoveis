class Imovel {
    constructor(id, nome, preco, tipo, imagem, quartos, banheiros, descricao) {
        this.id = Date.now();
        this.nome = nome;
        this.preco = Number(preco);
        this.tipo = tipo; // 'aluguel' ou 'venda'
        this.imagem = imagem;
        this.descricao = descricao;
        this.quartos = Number(quartos);
        this.banheiros = Number(banheiros);

    }
}