let nome = "Bianca"
let quantidade = 2000
let nivel = ""

switch (true){
    case quantidade <= 1000: 
    nivel = "Ferro"
        break
    case quantidade <= 2000:
        nivel = "Bronze"
        break
    case quantidade <= 5000:
        nivel = "Prata"
        break
    case quantidade <= 7000:
        nivel = "Ouro"
        break
    case quantidade <= 8000:
        nivel = "Platina"
        break
    case quantidade <= 9000:
        nivel = "Ascendente"
        break
    case quantidade <= 10000:
        nivel = "Imortal"
        break
    case quantidade >= 10001:
        nivel == "Radiante"
        break
}
console.log("O herói de nome " + nome + " está no nível de " + nivel)