function luxPergunta1() {
    var Pergunta = prompt(`Alternativas:\n
    A:Yasuo\n
    B:Darius\n
    C:Garen
    
    `)

    while (true) {

        if (Pergunta.toUpperCase() === 'A') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'B') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'C') {
            location.href = './Lux-Pergunta2.html'
            break;
        } else {
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A:Yasuo\n
            B:Darius\n
            C:Garen
            `)
        }
    }
}


function luxPergunta2() {
    var Pergunta = prompt(`Alternativas:\n
    A:Haduken\n
    B:Demacia!\n
    C:Desapareça!
    
    `)

    while (true) {

        if (Pergunta.toUpperCase() === 'A') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'B') {
            location.href = './Lux-Pergunta3.html'
            break;
        } else if (Pergunta.toUpperCase() === 'C') {
            location.href = '../../DERROTA.html'
            break;
        } else {
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A: Haduken\n
            B: Demacia!\n
            C: Desapareça!
            `)
        }
    }
}


function luxPergunta3() {
    var Pergunta = prompt(`Alternativas:\n
    A: Ficar figthando a todo momento\n
    B: Ficar parado na base aliada\n
    C: Dragões e Arautos
    
    `)

    while (true) {

        if (Pergunta.toUpperCase() === 'A') {
            location.href = '../../DERROTA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'B') {
            location.href = '../../VITÓRIA.html'
            break;
        } else if (Pergunta.toUpperCase() === 'C') {
            location.href = '../../DERROTA.html'
            break;
        } else {
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A:Ficar figthando a todo momento\n
            B:Ficar parado na base aliada\n
            C:Dragões e Arautos
            `)
        }
    }
}