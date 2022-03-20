function yasuoPergunta1() {//FUNÇÃO+NOME FUNÇÃO
    var Pergunta = prompt(`Alternativas:\n
    A: Avanço e tento matar o inimigo fidado\n
    B: Fico na torre e não farmo\n
    C: Espero o gank de meu jungler para abate-lo
    `)
    
    while (true) { //REPETIÇÃO COM WHILE
        // E SE: SE A RESPOSTA FOR: A = DERROTA
        if (Pergunta.toUpperCase() === 'A') { //UPPER CASE PARA DEIXAS TODAS LETRAS MAIUSCULAS
            location.href = '../../DERROTA.html' //LOCATION PARA LOCALIZAR PASTAS
            break;
        } else if (Pergunta.toUpperCase() === 'B') {
            location.href = '../../DERROTA.html'
            break;                                          //BREAK PARA FREIAR/PAUSAR/PARAR
        } else if (Pergunta.toUpperCase() === 'C') {
            location.href = './Yasuo-Pergunta2.html'
            break;
        } else {                                        
            alert('Resposta Incorreta!') //RESPOSTAS. **PERGUNTAS NA IMAGEM**
            Pergunta = prompt(`Alternativas:\n  
            A: Avanço e tento matar o inimigo fidado\n  
            B: Fico na torre e não farmo\n
            C: Espero o gank de meu jungler para abate-lo
            `)
        }
    }
}

function yasuoPergunta2() {
    var Pergunta = prompt(`Alternativas:\n
    A: Dou base, quem mata bicho é o jungler\n
    B: Subo para a lane oposta ao objetivo\n
    C: Pingo no objetivo para fazermos e obter vantagem
    `)

    while (true) {

        if (Pergunta.toUpperCase() === 'A') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'B') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'C') {
            window.location.href = './Yasuo-Pergunta3.html'
            break;
        } else {
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A: Dou base, quem mata bicho é o jungler\n
            B: Subo para a lane oposta ao objetivo\n
            C: Pingo no objetivo para fazermos e obter vantagem

            `)
        }
    }
}

function yasuoPergunta3() {
    var Pergunta = prompt(`Alternativas:\n
    A: Splito full mid\n
    B: Splito full top\h
    C: Splito full bot

    `)

    while (true) {

        if (Pergunta.toUpperCase() === 'A') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'B') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'C') {
            location.href = '../../VITÓRIA.html'
            break;
        } else {
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A: Splito full mid\n
            B: Splito full top\n
            C: Splito full bot
            `)
        }
    }
}