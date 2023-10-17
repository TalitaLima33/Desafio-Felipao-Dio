let vitorias = SubtraindoDerrotas(30,6) //numero de patidas e numero de derrotas

function SubtraindoDerrotas(numA,numB){
    let vitorias = numA - numB
    return vitorias
}

console.log ("O heroi obteve " + vitorias + " vitorias, com isso alcança o nível: ") 

if (vitorias <10){
    console.log("Ferro")
}else if (vitorias <20){
    console.log("Bronze")
}else if (vitorias <50){
    console.log("Prata")
}else if (vitorias <80){
    console.log("Ouro")
}else if (vitorias <90){
    console.log("Diamante")
}else if (vitorias <100){
    console.log("Lendario")
}else{
    console.log("Importal")
}
