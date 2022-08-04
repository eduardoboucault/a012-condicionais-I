let idade = Number(prompt('Por favor, digite quantos anos você tem:'))

let ensinoMedio = prompt('Você concluiu o ensino médio? (Sim/Não)')

let cursandoFaculdade = prompt('Você está cursando alguma faculdade? (Sim/Não)')

//? Transformando string em boolean

if (ensinoMedio.toUpperCase() === 'SIM' || 'SIIM' || 'CIM' || 'SIN'){
    ensinoMedio = true //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else if (ensinoMedio.toUpperCase() == 'NÃO' || 'NAO' || 'NAUM' || 'NO'){
    ensinoMedio = false //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else{
    alert('[ERRO]: DADO INVÁLIDO!')
}

if (cursandoFaculdade.toUpperCase() === 'SIM' || 'SIIM' || 'CIM' || 'SIN'){
    cursandoFaculdade = true //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else if (cursandoFaculdade.toUpperCase() == 'NÃO' || 'NAO' || 'NAUM' || 'NO'){
    cursandoFaculdade = false //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else{
    alert('[ERRO]: DADO INVÁLIDO!')
}

//? Aplicando condionais

if (idade >= 18){
    console.log('A pessoa é maior de idade.')
}else{
	console.log('A pessoa é menor de idade')
}

if (ensinoMedio === true){
    console.log('Ensino médio concluído.')
} else {
    console.log('Ensino médio não concluído.')
}

if (cursandoFaculdade === true){
    console.log('Cursando faculdade.')
} else {
    console.log('Não está cursando faculdade.')
}