let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let vetores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
} 

function inLista(n, l ){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function mostrar(){
    if (isNumero(num.value) && !inLista(num.value, vetores)){
        vetores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else{
        window.alert('Deu erro!!')
    }
    num.value = ''
    num.focus()
}

function encerrar(){
    if (vetores.length== 0){
        window.alert('adiciona valores')
    } else{
        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        for (let pos in vetores){
            if (vetores[pos] > maior)
                maior = vetores[pos]
            if (vetores[pos] < menor)
                menor = vetores[pos]
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos</p>`
        res.innerHTML += `<p>Maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>Menor valor informado é ${menor}</p>`
        }
       
    }

}