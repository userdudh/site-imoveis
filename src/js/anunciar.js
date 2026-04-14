function capturarDadosFormulario() {
    const titulo = document.getElementById('titulo').value;
    const preco = document.getElementById('valor').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const quartos = document.getElementById('quartos').value;
    const banheiros = document.getElementById('banheiro').value;
    
    return new Imovel(
        Date.now(),
        titulo,
        preco,
        tipo,
        "assets/images/home.jpg",
        quartos,
        banheiros
    );
}