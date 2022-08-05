// 10.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const firstName = {
     name: "Fernando",
     age: 40,
     heigth: 1.75,
     weigth: 76,
     genre: "Masculino"
 }

const seccondName = {
     name: "Daniela",
     age: 35,
     heigth: 1.55,
     weigth: 56,
     genre: "Feminino"
 }

console.log(firstName.name === firstName.name)
console.log(firstName.name === seccondName.name)
