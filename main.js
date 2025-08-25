// Selecionando os elementos do DOM
const html = document.querySelector('html')// Elemento HTML principal
const imagem = document.querySelector('.app__image')// Imagem principal 
const titulo = document.querySelector('.app__title')// Título principal
const Botoes = document.querySelectorAll('.app__card-button')// Botões de foco, curto e longo
const musicacheck = document.querySelector('.toggle-checkbox')// Checkbox de música
const StartouPauseBT = document.querySelector('#start-pause')// Botão de iniciar/pausar
const tempoNaTela = document.querySelector('#timer')

const musica = new Audio('./sons/luna-rise-part-one.mp3')
musica.loop = true
const playAudio = new Audio('./sons/play.mp3')
const pauseAudio = new Audio('./sons/pause.mp3')
const finaltemporizadorAudio = new Audio('./sons/beep.mp3')


let ContadordeSegundos = 1500// Contador de segundos inicial
let atualizaporsegundos = null // Variável para armazenar o intervalo do contador


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
    ContadordeSegundos = 1500 // 25 minutos em segundos
    atualizarTempoNaTela()
})

//Curto
Botoes[1].addEventListener('click', () => {
    alterarContexto('descanso-curto')
    ContadordeSegundos = 300 // 5 minutos em segundos
    atualizarTempoNaTela()
})

//Longo
Botoes[2].addEventListener('click', () => {
    alterarContexto('descanso-longo')
    ContadordeSegundos = 900 // 15 minutos em segundos
    atualizarTempoNaTela()
})

// Função para alterar o contexto da aplicação
function alterarContexto(contexto) {

    // Atualizando os atributos do HTML e da imagem
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `./imagens/${contexto}.png`)

    // Removendo a classe 'active' de todos os botões
    Botoes.forEach(botao => {
        botao.classList.remove('active')

        // Atualizando o título com base no contexto
        switch (contexto) {
            case "foco":
                Botoes[0].classList.add('active')
                titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
                break;

            case "descanso-curto":
                Botoes[1].classList.add('active')
                titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça um pausa curta!</strong>
            `
                break;

            case "descanso-longo":
                Botoes[2].classList.add('active')
                titulo.innerHTML = `
               Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa Longa.</strong>
            `
                break;

            default:
                break;
        }

    })

}
// Função para atualizar o contador de segundos
function atualizarContador() {
    if (ContadordeSegundos <= 0) {
        finaltemporizadorAudio.play() // Toca o som de finalização do temporizador.
        pararContador() // Chama a função para parar o contador
        alert('Tempo esgotado!') // Exibe um alerta quando o tempo se esgota
        return // Interrompe a execução da função
    }
    ContadordeSegundos -= 1 // Decrementa o contador de segundos 
    atualizarTempoNaTela() // Atualiza o tempo na tela
}

// Adicionando evento de clique ao botão de iniciar/pausar
StartouPauseBT.addEventListener('click', iniciarouPausarContador)

// Inicia o contador
function iniciarouPausarContador() {
    if (atualizaporsegundos) {
        AtualizarBotao(`pause`)
        pararContador() // Se o contador já estiver rodando, para o contador
        return // Interrompe a execução da função
    }
    AtualizarBotao(`play`)
    atualizaporsegundos = setInterval(atualizarContador, 1000) // Atualiza o contador a cada segundo
}

function pararContador() {
    clearInterval(atualizaporsegundos) // Limpa o intervalo do contador
    atualizaporsegundos = null // Reseta a variável do intervalo

}

function AtualizarBotao(tipo) {
    if (tipo === 'play') {
        playAudio.play()
        StartouPauseBT.innerHTML = `
        <img class="app__card-primary-butto-icon" src="./imagens/pause.png" alt="Botão de pausar">
        <span>Pausar</span>
    `
    } else {
        pauseAudio.play()
        StartouPauseBT.innerHTML = `
        <img class="app__card-primary-butto-icon" src="./imagens/play.png" alt="Botão de iniciar">
        <span>Iniciar</span>
    `
    }
}

function atualizarTempoNaTela() {
    const tempo = new Date(ContadordeSegundos * 1000)  // Converte os segundos em milissegundos
    const TempoFormatado = tempo.toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) // Formata o tempo para mm:ss
    tempoNaTela.innerHTML = `${TempoFormatado}`
}

atualizarTempoNaTela() // Atualiza o tempo na tela inicialmente

