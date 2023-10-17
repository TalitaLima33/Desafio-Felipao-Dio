let nickname = "Homem Aranha"
let niveldexp = 6230

console.log ("O seu héroi " + nickname + " tem " + niveldexp + " de experiencia, alcançando o nível: ") 

if (niveldexp <1000){
    console.log("Ferro")
}else if (niveldexp <2000){
    console.log("Bronze")
}else if (niveldexp <5000){
    console.log("Prata")
}else if (niveldexp <6000){
    console.log("Ouro")
}else if (niveldexp <8000){
    console.log("Platina")
}else if (niveldexp <9000){
    console.log("Ascendente")
}else{
    console.log("Imortal")
}
