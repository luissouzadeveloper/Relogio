function hora(){
    let horario = new Date()
    let hora = horario.getHours()
    let minutos = horario.getMinutes()
    let segundos = horario.getSeconds()

    let descricao = document.querySelector('.relogio')
    if (hora < 10) {
        hora = '0' + hora 
    }
    if (minutos < 10) {
        minutos = '0' + minutos 
    }
    if (segundos < 10) {
        segundos = '0' + segundos 
    }
    descricao.innerHTML = `${hora}:${minutos}:${segundos}`
}



setInterval(hora, 1000)
hora()