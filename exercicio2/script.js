let idade = Number(prompt('Por favor, digite quantos anos você tem:'))

let ensinoMedio = prompt('Você concluiu o ensino médio? (Sim/Não)')

let ensinoMedioB = ensinoMedio

let cursandoFaculdade = prompt('Você está cursando alguma faculdade? (Sim/Não)')

let cursandoFaculdadeB = cursandoFaculdade

//? Transformando string em boolean

if (ensinoMedio.toUpperCase() == 'SIM' || 'SIIM' || 'CIM' || 'SIN'){
    ensinoMedioB = true //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else if (ensinoMedio.toUpperCase() == 'NÃO' || 'NAO' || 'NAUM' || 'NO'){
    ensinoMedioB = false //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else{
    alert('[ERRO]: DADO INVÁLIDO!')
}

if (cursandoFaculdade.toUpperCase() == 'SIM' || 'SIIM' || 'CIM' || 'SIN'){
    cursandoFaculdadeB = true //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else if (cursandoFaculdade.toUpperCase() == 'NÃO' || 'NAO' || 'NAUM' || 'NO'){
    cursandoFaculdadeB = false //! '=' ATRIBUIR O VALOR SEMPRE QUE PRECISAR ALTERAR A VARIÁVEL LET
}else{
    alert('[ERRO]: DADO INVÁLIDO!')
}

//? Aplicando condionais

if (idade >= 18){
    console.log('A pessoa é maior de idade.')
}else{
	console.log('A pessoa é menor de idade')
}

if (ensinoMedioB === true){
    console.log('Ensino médio concluído.')
} else {
    console.log('Ensino médio não concluído.')
}

if (cursandoFaculdadeB === true){
    console.log('Cursando faculdade.')
} else {
    console.log('Não está cursando faculdade.')
}