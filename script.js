const tempoCidade = document.querySelector('.tempo-cidade')
const btn = document.querySelector('.btn')
const key = '0606b6ebb0a1add401a71425000acdd8'
const temp = document.querySelector('#temp')
const condicao = document.querySelector('#condicao')
const umidade = document.querySelector('#umidade')
const iconeTempo = document.querySelector('.icone-tempo')


async function buscarCidade(cidade){
    const busca = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    const dados = await busca.json()
    imprimeDados(dados)
}

btn.addEventListener('click', () => {
    const cidade = document.querySelector('.input').value
    buscarCidade(cidade)
})

function imprimeDados(dados) {
    tempoCidade.innerHTML = `Tempo em ${dados.name}`
    temp.innerHTML = Math.floor(dados.main.temp) + '°C'
    condicao.innerHTML = dados.weather[0].description
    umidade.innerHTML = `Umidade: ${dados.main.humidity}%`
    iconeTempo.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
    