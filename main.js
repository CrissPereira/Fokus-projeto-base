//Seleção de Botões 
const BotaoFoco = document.querySelector('.app__card-button--foco')
const BotaoCurto = document.querySelector('.app__card-button--curto')
const BotaoLongo = document.querySelector('.app__card-button--longo')

//Cor de Fundo
const html = document.querySelector('html')

//Imagem
const imagem = document.querySelector('.app__image')

//Funções ao clicar nos botões

//Foco
BotaoFoco.addEventListener('click' , () => {
    html.setAttribute('data-contexto' , 'foco')
    imagem.setAttribute('src' , './imagens/foco.png')
} )

//Curto
BotaoCurto.addEventListener('click' , () => {
    html.setAttribute('data-contexto' , 'descanso-curto')
    imagem.setAttribute('src' , './imagens/descanso-curto.png')
} )

//Longo
BotaoLongo.addEventListener('click' , () => {
    html.setAttribute('data-contexto' , 'descanso-longo')
    imagem.setAttribute('src' , './imagens/descanso-longo.png')
} )
