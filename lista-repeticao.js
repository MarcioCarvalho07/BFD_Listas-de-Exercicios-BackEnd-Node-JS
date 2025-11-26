
/* EX:.1

i = 5;     fat =parseInt(1);
while (i>1){
    console.log(i)
    fat = fat*i
    i++
}                                     */



 /* Ex:.2

let valorA = parseInt(3);
let expoenteB = parseInt(2);
let resultado = 0;

i=0;
while (i < expoenteB) {
    resultado= valorA*valorA;
    i++
}

console.log(resultado);       */



/*Ex:.3

let x = parseInt(10);
let y= 0;

for (let i = 0; i <= 100 ; i++) {
 y += x + i;
}

console.log(`O valor de y é: ${y} !`);       */



/* Ex:.4

let numPares = 0;

    for (let i = 0; i < 1000; i++) {
        if (i % 2 === 0) {
            numPares += i;
        }
    }

console.log(`A soma dos números pares menores que 1000 serão: ${numPares} ! `);
*/



/*Ex:.5

function fibonacci (n){
    let fib = [1,1];
  
 for (let i = 2; i < n; i++) {
    fib[i]= fib[i-1]+ fib[i-2];
 }
    return fib;
}

const resultado = fibonacci(20);
console.log('A série Fibonacci será: ');
console.log(resultado.join(", "));             */



/*Ex:.6

let x = 17;
let y = 0;

    for (let i = 0; i <= 20; i++) {
         y = y + (x * i);
        
    }

console.log(`O valor de Y é : ${y}`);         */
 


//Ex:.7





/*Ex:.8

function gerarAleatorio(qtd,intervalo)
{
vetor = [];
for (i=0;i<qtd;i++)
    {
    vetor[i] = Math.floor(Math.random()*intervalo);
        
    }
return vetor;
}
 
qtd = 200;
 
valor = gerarAleatorio(qtd,200);
console.log(valor);

let somatorio = 0;
for (let i = 0; i < qtd; i++) {
    somatorio += valor[i];
}

console.log(somatorio)      */




/* Ex:.17    --- Aproximador de Pi ---

let i = parseInt(1);
let z = parseFloat(0);

while (i<((100/2)+1)) {
    if(i%2 != 0){
        z += 4/(i*2-1);
    } else {
        z -= 4/(i*2-1);
    }
    i++
}

console.log(`o valor de z è: ${z.toFixed(2)}`);      */



/* Ex:.20  

let meia_vida = parseInt(50);
let massa_inicial;
let massa_minima = parseFloat(0.5);
let massa_final = parseFloat(0);
let tempo_total = parseFloat(0);
let horas = parseInt(0);
let minutos = parseInt(0);
let segundos = parseInt(0);

//entrada: massa_inicial
//saida: tempo - em horas, minutos e segundos
//saida: massa inicial, massa final

massa_inicial = 20;
massa_final = parseFloat(massa_inicial);

for (let i=0; massa_final >= massa_minima ;i++) {
massa_final = massa_final/2;
tempo_total += meia_vida;
}

segundos = tempo_total % 60;
minutos = parseInt((tempo_total % 3600)/60);
horas = parseInt(tempo_total / 3600);

console.log("<br/> A massa inicial é: "+massa_inicial+", a massa final é: "+massa_final+" e o tempo foi de: "+horas+" horas, "+minutos+" minutos, "+segundos+" segundos."+tempo_total);
*/


