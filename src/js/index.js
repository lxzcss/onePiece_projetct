// OBJETIVO 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado
// Passo 1 - Pegar os botões no JS para poder verificar quando o usúario clicar em cima de um 

const botoes = document.querySelectorAll('.botao');

// OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem
// Passo 1 - pegar os personagens no JS para poder mostrar ou esconder ele

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {
        console.log("clicou no botao", botao);

        desselecionarBotao();

        // OBJ1 - Passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");

        desselecionarPersonagem();

        // OBJ2 - Passo 2 - Adicionar a classe "selecionado" no personagem que o usúario selecionou
        personagem[indice].classList.add("selecionado");


    }); 
})
// OBJ2 - Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

// OBJ1 - Passo 3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

