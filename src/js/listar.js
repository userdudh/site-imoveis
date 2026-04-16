const container = document.getElementById("containerAnuncios");
const listaImoveis = JSON.parse(localStorage.getItem("imoveis")) || [];
const listaExibicao = [...listaImoveis].reverse(); 

listaExibicao.forEach((imovel, index) => {
    const card = document.createElement("div");
    card.className = "card-imovel";
    card.innerHTML = `
        <div class="info-imovel">
            <p><strong>${imovel.titulo}</strong> | ${imovel.tipo} | R$ ${imovel.preco},00 </p>
        </div>
        <div class="acoes">
            <button onclick="window.location.href='src/pages/anunciar.html?edit=${imovel.id}'">Editar</button>
            <button onclick="excluir(${index})">Excluir</button>
        </div>
    `;
    container.appendChild(card);
});

function excluir(index) {
    const listaAtual = JSON.parse(localStorage.getItem("imoveis")) || [];
    const realIndex = (listaAtual.length - 1) - index;
    
    listaAtual.splice(realIndex, 1);
    localStorage.setItem("imoveis", JSON.stringify(listaAtual));
    location.reload();
}
