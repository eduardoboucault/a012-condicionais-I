let nacionalidade = prompt('Escreva aqui sua nacionalidade:').toLowerCase()

let nacionalidadeArray = ['brasileira','brasileiro','argentino','argentina','uruguaio','uruguaia','chilena','chileno','colombiana','colombiana']

if (nacionalidadeArray.includes(nacionalidade)){
    console.log(`Sua nacionalidade é ${nacionalidade}.`)
} else {
    console.log(`Nacionalidade não encontrada!`)
}