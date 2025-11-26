
/* EX:.1
 
function gerarAleatorio(qtd,intervalo)
{
vetor = [];
for (i=0;i<qtd;i++)
    {
    vetor[i] = Math.floor(Math.random()*intervalo);
        
    }
return vetor;
}
 
qtd = 50;
 
vetorA = gerarAleatorio(qtd,100);
 
document.writeln("vetor A:" + vetorA);
 
document.writeln("<br/><br/>");
 
vetorB = gerarAleatorio(qtd,100);
 
document.writeln("vetor B:" + vetorB);
 
vetorC = [];
 
for(i=0;i<vetorA.length;i++){
vetorC[i] = vetorA[i] + vetorB[i];
}
 
document.writeln("<br/><br/>");
 
document.writeln("vetor C:" + vetorC);
 
document.writeln("<br/><br/>");
 
document.writeln("vetor C:");
 
for(i=0;i<vetorC.length;i++){
if(i%5==0){

document.writeln("<br/>");
        }
document.writeln(vetorC[i]+"|");
 
}

*/



/*EX:.2

function gerarAleatorio(qtd,intervalo)
{
vetor = [];
for (i = 0; i < qtd; i++)
    {
    vetor[i] = Math.floor(Math.random()*intervalo);
        
    }
return vetor;
}
 
qtd = 100;
 
valor = gerarAleatorio(qtd,100);
//console.log(valor);
let resultadoVetor = [];

for (let i = 0; i < qtd; i++) {
    num = valor[i];
    if(num % 2 === 0){
    resultadoVetor[i] = 1;
} else {
    resultadoVetor[i] = 0;
}
}
// 1 = Corresponde a número par
// 0 = Corresponde a número Ímpar

console.log(valor);
console.log(resultadoVetor);         */




/*Ex:.5

let nums = [18, 3, 7, 45, 10];
let temp;

for (let i = 0; i < nums.length - 1; i++) {
  for (let j = 0; j < nums.length - 1 - i; j++) {
    if (nums[j] > nums[j + 1]) {
      temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}

console.log(nums);      */



/*Ex:.6

function gerarAleatorio(qtd,intervalo)
{
vetor = [];
for (i=0;i<qtd;i++)
    {
    vetor[i] = Math.floor(Math.random()*intervalo)+1;
        
    }
return vetor;
}
 
qtd = 9;
 
vetor = gerarAleatorio(qtd,100);
 
document.write("vetor de numeros:" + vetor);
 
//vetor de posições dos primos no outro vetor
posPrimos = [];
 
for (i=0; i<vetor.length;i++){
 
//Parto do principio inicial que todos são primos
isPrime = true;
 
//loop de teste dos primos
 
for(j=2;j<vetor[i];j++){
    if(vetor[i]%j==0){
isPrime = false;
break;
    }
}
if (isPrime){
posPrimos.push(i);
}
 
}
 
document.write("<br/><br/>");
document.write("Os elementos e suas posições as quais são números primos são: <br/>");
 
for(i=0;i<posPrimos.length;i++){
    document.write("Posição "+posPrimos[i]+": ");
    document.write(vetor[posPrimos[i]]);
    document.write("<br/>");
}
    */




/*Ex:.8

function gerarAleatorio(qtd,intervalo)
{
vetor = [];
for (i=0;i<qtd;i++)
    {
    vetor[i] = Math.floor(Math.random()*intervalo)+1;
        
    }
return vetor;
}
 
qtd = 9;
 
//vetor = gerarAleatorio(qtd,100);
 
vetor = [2,3,7,4,10,15,4,9,6];
 
document.write("vetor de numeros:" + vetor);
 
document.write("<br/><br/>");
 
for (i=0;i<vetor.length/2;i++)
{
 
aux = 0;
console.log("index:"+i);
aux = vetor[i];
vetor[i] = vetor[vetor.length-1-i];
vetor[vetor.length-1-i] = aux;
 
console.log("vetor:"+vetor[i]);
console.log("final:"+vetor[vetor.length-1-i]);
 
}
 
document.write("vetor de numeros invertido:" + vetor);

*/



