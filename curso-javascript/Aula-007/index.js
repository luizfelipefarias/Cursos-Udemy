//Regras para variaveis const
//Variavel recebe nomes significativos
//Não pode criar varivel com palavras reservadas
//ex:const let,const console
//Variavel não pode conter espaço,traço e não podem começar com numero
//Indicado usar camelCase
//Case-sensitive
//ex:nomeComposto diferente de nomecomposto
//Não podemos redeclarar variveis com const

const nome ='João'//Precisa sempre iniciar 
//console.log('nome')

//nome='luiz' -> const são imodificaveis

//Uma varivel pode ser atribuida a outra variavel
const num1 = 5; //number
const num2 = '10';

const resultado = 5 + 10;
let resultadoDuplicado= resultado * 2
console.log(resultadoDuplicado)
resultadoTriplicado= resultado *3
console.log(resultadoTriplicado) 

//Como saber o tipo de dado
console.log(typeof num1 )
//Congatenação
console.log(typeof (num1 + num2))
