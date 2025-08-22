document.addEventListener('DOMContentLoaded', function () {
    // Seleção dos elementos de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    // Inicializando o tamanho de fonte padrão
    let tamanhoAtualFonte = 1;

    // Função para alternar a visibilidade das opções de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao'); // Rotaciona o botão
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista'); // Exibe/oculta as opções
    });

    // Função para aumentar o tamanho da fonte
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1; // Aumenta o tamanho da fonte em 0.1 rem
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`; // Aplica o novo tamanho
    });

    // Função para diminuir o tamanho da fonte
    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.5) { // Limita o tamanho mínimo da fonte
            tamanhoAtualFonte -= 0.1; // Diminui o tamanho da fonte em 0.1 rem
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`; // Aplica o novo tamanho
        }
    });

    // Função para alternar o contraste da página
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste'); // Alterna a classe de alto contraste
    });
});
