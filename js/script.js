let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#Jogar") //botao
const jogada = document.querySelector("#txtNumero")
const jogadaAnterior = document.querySelector(".vezes")
const jogadasRestantes = document.querySelector(".numChances")
const recomecar = document.querySelector(".resultados")
const avisos = document.querySelector(".avisos")

const p = document.createElement('p')
let numerosJogados = []
let minhasJogadas = 1
let playGame = true

if (playGame === true) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const tentativa = parseInt(jogada.value)
        validaChances(tentativa)
    })
}

function validaChances(tentativa) {
    if (isNaN(tentativa)) {
        alert("Insira um número!")
        jogada.value = ""
        jogada.focus() 
    }
    else if(tentativa<1 || (tentativa > 100)){
        alert("Insira um valor entre 1 e 100!")
        jogada.value = "" 
        jogada.focus()
    }
    else {
        numerosJogados.push(tentativa)
        if (minhasJogadas === 6 || (tentativa !== randomNumber)) {
                displayTentativas(tentativa)
                msg(`Game Over! <br> O número correto era ${randomNumber}`)
                fimJogo()
        }
        else {
                displayTentativas(tentativa)
                checarTentativas(tentativa)
        }
    }
} 

function checarTentativas(tentativa) {
    if (tentativa === randomNumber) {
        msg('Brabo')
        fimJogo()
    }
    else if (tentativa < randomNumber){
        msg('Noob lixo')
    }
    else if (tentativa > randomNumber){
        msg('Vish mermão altão')
    }
}

function displayTentativas(tentativa) {
    jogada.value = ""
    jogadaAnterior.innerHTML += `${tentativa}, `
    minhasJogadas++
    jogadasRestantes.innerHTML = `${7 - minhasJogadas}`
}

function msg(mensagem) {
    avisos.innerHTML = `<h1>Wow vc é mt poggers</h1>`
}

function fimJogo() {

}