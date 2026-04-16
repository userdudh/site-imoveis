const listaImoveis = JSON.parse(localStorage.getItem("imoveis")) || [];
const urlParams = new URLSearchParams(window.location.search);
const idParaEditar = urlParams.get('edit');

if (idParaEditar) {
    const imovel = listaImoveis.find(i => i.id == idParaEditar);
    if (imovel) {
        document.querySelector('.titulo-pagina').textContent = "Editar meu imóvel";
        document.querySelector('button[type="submit"]').textContent = "Salvar Alterações";

        document.getElementById('titulo').value = imovel.titulo;
        document.getElementById('valor').value = imovel.preco;
        document.getElementById('descricao').value = imovel.descricao;
        document.getElementById('quarto').value = imovel.quarto;
        document.getElementById('banheiro').value = imovel.banheiro;
        if (imovel.tipo) {
            document.getElementById(imovel.tipo).checked = true;
        }
    }
}

function capturarDados(event) {
    event.preventDefault();

    const formImovel = event.target;
    const formData = new FormData(formImovel);
    const dados = Object.fromEntries(formData);

    if (idParaEditar) {
        const index = listaImoveis.findIndex(i => i.id == idParaEditar);
        const imovelEditado = new Imovel(
            Number(idParaEditar),
            dados.titulo,
            dados.preco,
            dados.tipo,
            dados.imagem,
            dados.quarto,
            dados.banheiro,
            dados.descricao
        );
        listaImoveis[index] = imovelEditado;
    } else {
        const novoImovel = new Imovel(
            null,
            dados.titulo,
            dados.preco,
            dados.tipo,
            dados.imagem,
            dados.quarto,
            dados.banheiro,
            dados.descricao
        );
        listaImoveis.push(novoImovel);
    }

    localStorage.setItem("imoveis", JSON.stringify(listaImoveis));
    window.location.href = "src/pages/meus-anuncios.html";
}