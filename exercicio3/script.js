let nacionalidade = prompt('Escreva aqui sua nacionalide:')

if(nacionalidade.toLowerCase == 'brasileira' || 'brasileiro'){
    console.log(`Você é: ${nacionalidade}!` )
}else if(nacionalidade.toLowerCase == 'argentina' || 'argentino'){
    console.log(`Você é: ${nacionalidade}!` )
}else if(nacionalidade.toLowerCase == 'uruguaia' || 'uruguaio'){
    console.log(`Você é: ${nacionalidade}!` )
}else if(nacionalidade.toLowerCase == 'chilena' || 'chileno'){
    console.log(`Você é: ${nacionalidade}!` )
}else if(nacionalidade.toLowerCase == 'colombiana' || 'colombiano'){
    console.log(`Você é: ${nacionalidade}!` )
}else{
    console.log(`Nacionalidade não encontrada.` )
}