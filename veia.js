let jogadas = 0
let tabuleiro = [["","",""]
                ,["","",""]
                ,["","",""]]

function player(button,numero){
    let td = button.parentElement
    
    if (jogadas % 2 == 0){
        td.style.color = "red";
        td.innerHTML = 'X'
    }else{
        td.style.color = "blue";
        td.innerHTML = 'O'
    }
    if (numero <= 2){
        tabuleiro[0][numero] = td.innerHTML
    }
    else if (numero <= 5){
        tabuleiro[1][numero - 3] = td.innerHTML
    }
    else if (numero <= 8){
        tabuleiro[2][numero - 6] = td.innerHTML
    }
    jogadas++
    verifica()
}
let botoes = document.querySelectorAll('td button')

function verifica(){
    let tabela = document.querySelector('table') 
    for (i = 0;i <= 2;i++){
        if (tabuleiro[i][0] == tabuleiro[i][1] && tabuleiro[i][1]  == tabuleiro[i][2] && tabuleiro[i][0] != ""){
            if (tabuleiro[i][0] == 'X'){
            tabela.outerHTML = `<h1><span style="color: red;">${tabuleiro[i][0]}</span> é o Vencedor</h1>`
            }
            else{
                tabela.outerHTML = `<h1><span style="color: blue;">${tabuleiro[i][0]}</span> é o Vencedor</h1>`
            }
        }
        if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[1][i]  == tabuleiro[2][i] && tabuleiro[0][i] != ""){
           if (tabuleiro[0][i] == 'X'){
            tabela.outerHTML = `<h1><span style="color: red;">${tabuleiro[0][i]}</span> é o Vencedor</h1>`
            }
            else{
                tabela.outerHTML = `<h1><span style="color: blue;">${tabuleiro[0][i]}</span> é o Vencedor</h1>`
            }
        }
    }
    if ((tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][2] && tabuleiro[0][0] != "") || (tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][0] && tabuleiro[0][2] != "")){
        if (tabuleiro[1][1] == 'X'){
            tabela.outerHTML = `<h1><span style="color: red;">${tabuleiro[1][1]}</span> é o Vencedor</h1>`
        }
        else{
            tabela.outerHTML = `<h1><span style="color: blue;">${tabuleiro[1][1]}</span> é o Vencedor</h1>`
        }
    }
    if (jogadas == 9){
        tabela.outerHTML = `<h1>Deu velha!</h1>`
    }
}
