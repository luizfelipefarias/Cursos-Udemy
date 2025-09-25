const nomeCompleto='Luiz Felipe Farias Braz Da Silva';
const anoDeNascimento=2005;
let anoAtual=2025;
let idade = anoAtual - anoDeNascimento;
let pesoEmKg = 65;
let alturaEmM = 1.65;


const calculoDeImc = pesoEmKg /(alturaEmM * alturaEmM);
console.log(nomeCompleto ,'tem',idade,'anos','pesa',pesoEmKg,'Kg.')

//tofixed(2)->Define a quantidade de casas decimais
console.log('tem',alturaEmM,'e seu IMC é de ',calculoDeImc.toFixed(2))