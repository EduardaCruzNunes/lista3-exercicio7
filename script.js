var numeros = [];
var numero = 0;
var numerosnumber  = [];

while(numeros.length < 5){
   numero = prompt('Digite os números :');
   console.log(numero);
   numeros.push(numero); 
}

console.log(numeros);
numerosnumber = numeros.map(Number);
numerosnumber.sort();
console.log(numerosnumber);
