function mostrarSecao(id) {
    // Oculta todas as seções
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(secao => secao.style.display = 'none');

    // Exibe a seção selecionada
    const secaoSelecionada = document.getElementById(id);
    secaoSelecionada.style.display = 'block';
}

// Funções de manipulação dos formulários
document.getElementById('form-adicionar-livro').onsubmit = function(event) {
    event.preventDefault();
    alert('Livro adicionado com sucesso!');
    // Aqui você pode adicionar código para salvar o livro no banco de dados
};

document.getElementById('form-registrar-usuario').onsubmit = function(event) {
    event.preventDefault();
    alert('Usuário registrado com sucesso!');
    // Aqui você pode adicionar código para salvar o usuário no banco de dados
};

document.getElementById('form-emprestar-livro').onsubmit = function(event) {
    event.preventDefault();
    alert('Livro emprestado com sucesso!');
    // Aqui você pode adicionar código para registrar o empréstimo no banco de dados
};

document.getElementById('form-devolver-livro').onsubmit = function(event) {
    event.preventDefault();
    alert('Livro devolvido com sucesso!');
    // Aqui você pode adicionar código para registrar a devolução no banco de dados
};

// Exibe a seção padrão ao carregar a página
mostrarSecao('adicionar-livro');
