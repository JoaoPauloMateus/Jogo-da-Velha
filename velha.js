var vez = document.getElementById('vez')
var letra_escolhida = document.getElementById('txtescolher')
var letra = "X"
var contador = 0

function escolher_letra (){
    if (document.getElementById('txtescolher').value != 'X' && document.getElementById('txtescolher').value != 'O' && document.getElementById('txtescolher').value != 'x' && document.getElementById('txtescolher').value != 'o') {
        alert ('Valor inaceitável. Use apenas X ou O')
        
    } else {
        
        letra = document.getElementById('txtescolher').value
        letra = letra.toUpperCase()
        vez.innerHTML = `Agora é a vez do ${letra}`
    }
}

function jogada(quadro){
    var quadro_clicado = document.getElementById(quadro).innerHTML

    /*if (document.getElementById('radio_escolha')[0].checked = true) {
        letra = 'X'
    } else {
        letra = 'O'
    }*/

    if (quadro_clicado == "X" || quadro_clicado == "O") {
        alert('Opção já escolhida')
    } else {
        document.getElementById(quadro).innerHTML = letra.toUpperCase()
            if (letra == "X"){
                letra = "O"
            } else {
                letra = "X"
            }
        vez.innerHTML = `Agora é a vez do ${letra}`
        contador += 1
        cont.innerHTML = contador

        if (contador == 9) {
            if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 != '') && (c12 != '')) || ((c11 != '') && (c22 != '') && (c33 != '') && (c11 != '') && (c22 != '')) || ((c11 != '') && (c21 != '') && (c31 != '') && (c11 != '') && (c21 != '')) || ((c21 != '') && (c22 != '') && (c23 != '') && (c21 != '') && (c22 != '')) || ((c31 != '') && (c32 != '') && (c33 != '') && (c31 != '') && (c32 != '')) || ((c12 != '') && (c22 != '') && (c32 != '') && (c12 != '') && (c22 != '')) || ((c13 != '') && (c23 != '') && (c33 != '') && (c13 != '') && (c23 != '')) || ((c31 != '') && (c22 != '') && (c13 != '') && (c31 != '') && (c22 != ''))) {
                vez.innerHTML = 'VELHAAAA'
            }
        }
    }
    
}

function novo() {
    window.location.reload()
}

function verificacao() {
    var c11 = document.getElementById('c11').innerHTML
    var c12 = document.getElementById('c12').innerHTML
    var c13 = document.getElementById('c13').innerHTML
    var c21 = document.getElementById('c21').innerHTML
    var c22 = document.getElementById('c22').innerHTML
    var c23 = document.getElementById('c23').innerHTML
    var c31 = document.getElementById('c31').innerHTML
    var c32 = document.getElementById('c32').innerHTML
    var c33 = document.getElementById('c33').innerHTML

    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) || ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) || ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) || ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) || ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) || ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))) {
        
        
        if (letra == 'X'){        
        vez.innerHTML = `<p>O venceu!</p>`
        } else {
            vez.innerHTML = '<p>X venceu!</p>'
        }    

        document.getElementById('velha').style.pointerEvents = 'none'        
    }
}
