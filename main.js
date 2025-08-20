// Selecionando os elementos do DOM
const html = document.querySelector('html')
const imagem = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const Botoes = document.querySelectorAll('.app__card-button')
const musicacheck = document.querySelector('.toggle-checkbox')
const musica = new Audio('./sons/luna-rise-part-one.mp3')
musica.loop = true

// Adicionando evento de clique ao checkbox de música
musicacheck.addEventListener('change', () => {
    // Verifica se o checkbox está marcado
    if (musicacheck.checked) {
        musica.play() // Inicia a música
    } else {
        musica.pause() // Pausa a música
    }
})

//Foco
Botoes[0].addEventListener('click', () => {
    alterarContexto('foco')
})

//Curto
Botoes[1].addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

//Longo
Botoes[2].addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

// Função para alterar o contexto da aplicação
function alterarContexto(contexto) {

    // Atualizando os atributos do HTML e da imagem
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `/imagens/${contexto}.png`)

    // Atualizando o título com base no contexto
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça um pausa curta!</strong>
            `
            break;

        case "descanso-longo":
            titulo.innerHTML = `
               Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa Longa.</strong>
            `
            break;

        default:
            break;
    }

    // Removendo a classe 'active' de todos os botões
    Botoes.forEach(botao => {
        botao.classList.remove('active')

        // Adicionando a classe 'active' ao botão correspondente ao contexto atual
        switch (contexto) {
            case "foco":
                Botoes[0].classList.add('active')

                break;
            case "descanso-curto":
                Botoes[1].classList.add('active')

                break;
            case "descanso-longo":
                Botoes[2].classList.add('active')

                break;

            default:
                break;
        }


    })

}