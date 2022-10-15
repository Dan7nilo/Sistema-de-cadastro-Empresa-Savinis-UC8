//Sistema de cadastro para evento na empresa Savinis - Senai UC8

//Quantidades de pessoas na lista
var listadeParticipantes = ["Caique", "Danilo","Luana", "Rose", "Leonardo"]
if(listadeParticipantes.lenght <100){
    console.log("Ainda há vagas disponíveis")
} else {
    console.log("Número máximo de cadastros atingido!")
}
// Restrição de idade
let idade = 22
if(idade<18){
    console.log("Você não possui idade suficiente")
} else{
    console.log("Você possui idade adequada")
}
//Nomes do Cadastro
let nomeCadastro = "Caique"
if (nomeCadastro.lenght<3){
    console.log("Isso não é um nome válido")
}else{
    console.log("Esse nome é válido")
}
//Primeira tentativa da Atividade 2 UC8