function leonaPergunta1(){
    var Pergunta = prompt(`Alternativas:\n
    A:Estar em local estratégico para abater inimigos\n
    B:Estar mal posicionado e sem visão de mapa.\n
    C:Ficar Ausente na partida

    `) 

    while(true){
        
        if(Pergunta.toUpperCase() === 'A'){
            location.href = '../../DERROTA.html'
            break;
        }
        else if(Pergunta.toUpperCase() === 'B'){
            location.href = './Leona-Pergunta2.html'
            break;
        }
        else if(Pergunta.toUpperCase() === 'C'){
            location.href = '../../DERROTA.html'
            break;
        }
        else{
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A:Estar em local estratégico para abater inimigos\n
            B:Estar mal posicionado e sem visão de mapa.\n
            C:Ficar Ausente na partida
            `)
        }
    }
}


function leonaPergunta2(){
    var Pergunta = prompt(`Alternativas:\n
    A:Eco de Luden\n
    B:Morellon\n
    C:Armadura de Espinhos
    
    `) 

    while(true){
        
        if(Pergunta.toUpperCase() === 'A'){
            location.href = '../../DERROTA.html'
            break;
        }
        else if(Pergunta.toUpperCase() === 'B'){
            location.href = '../../DERROTA.html'
            break;
        }
        else if(Pergunta.toUpperCase() === 'C'){
            location.href = './Leona-Pergunta3.html'
            break;
        }
        else{
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
    A:Eco de Luden\n
    B:Morellon\n
    C:Armadura de Espinhos
            `)
        }
    }
}


function leonaPergunta3(){
    var Pergunta = prompt(`Alternativas:\n
    A:Dando roaming sempre que puder!\n
    B:Peço para kitarem\n
    C:Fico na minha lane e não ligando para o time.
    `) 

    while(true){
        
        if(Pergunta.toUpperCase() === 'A'){
            location.href = '../../VITÓRIA.html'
            break;
        }
        else if(Pergunta.toUpperCase() === 'B'){
            location.href = '../../DERROTA.html'
            break;
        }
        else if(Pergunta.toUpperCase() === 'C'){
            location.href = '../../DERROTA.html'
            break;
        }
        else{
            alert('Resposta Incorreta!')
            Pergunta = prompt(`Alternativas:\n
            A:Dando roaming sempre que puder!\n
            B:Peço para kitarem\n
            C:Fico na minha lane e não ligando para o time.
            
            `)
        }
    }
}