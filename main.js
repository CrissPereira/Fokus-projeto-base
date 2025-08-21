// Selecionando os elementos do DOM
const html = document.querySelector('html')// Elemento HTML principal
const imagem = document.querySelector('.app__image')// Imagem principal 
const titulo = document.querySelector('.app__title')// Título principal
const Botoes = document.querySelectorAll('.app__card-button')// Botões de foco, curto e longo
const musicacheck = document.querySelector('.toggle-checkbox')// Checkbox de música
const StartouPauseBT = document.querySelector('#start-pause')// Botão de iniciar/pausar
const musica = new Audio('./sons/luna-rise-part-one.mp3')
musica.loop = true

let ContadordeSegundos = 5


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
// Função para atualizar o contador de segundos
function atualizarContador() {
    if( ContadordeSegundos <= 0) {
        pararContador() // Chama a função para parar o contador
        alert('Tempo esgotado!') // Exibe um alerta quando o tempo se esgota
        return // Interrompe a execução da função
    }
    ContadordeSegundos -= 1 // Decrementa o contador de segundos 
    console.log(ContadordeSegundos)
}

// Adicionando evento de clique ao botão de iniciar/pausar
StartouPauseBT.addEventListener('click', iniciarContador)

// Inicia o contador
function iniciarContador() {
    atualizaporsegundos = setInterval(atualizarContador, 1000) // Atualiza o contador a cada segundo
}

function pararContador() {
    clearInterval(atualizaporsegundos) // Limpa o intervalo do contador
    atualizaporsegundos = null // Reseta a variável do intervalo
    ContadordeSegundos = 5 // Reseta o contador de segundos para 5
}

