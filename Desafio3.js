class jornadaDoHeroi{
    constructor(heroi, ataque){
        this.heroi = heroi
        this.ataque = ataque
    }
    atacando(){
        console.log (`O ${this.heroi} atacou usando ${this.ataque}`)
    }
}

let mago = new jornadaDoHeroi("Mago", "magia")
let guerreiro = new jornadaDoHeroi("Guerreiro", "espada")
let monge = new jornadaDoHeroi("Monge", "artes maciais")
let ninja = new jornadaDoHeroi("Ninja", "shuriken")

mago.atacando()
guerreiro.atacando()
monge.atacando()
ninja.atacando()
