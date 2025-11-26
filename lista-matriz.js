/*Ex:.1

function gerarMatriz(linha,coluna,intervalo)
{
    matriz = [];
    for (i=0;i<linha;i++){
        matriz[i] = [];
        for (j=0;j<coluna;j++)
        {
        matriz[i][j] = Math.floor(Math.random()*intervalo)+1;
        }
    }
return matriz;
}

let M = gerarMatriz(3,5,50);
console.table(M);

let contador = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 5; j++) {
            let elementos = M[i][j];

            if(elementos > 14 && elementos < 21){
             contador++;
            }
            
        }
        
    }

    console.log(`A quantidade de elementos entre 15 e 20 são: ${contador}`);      
*/



/*Ex:.2

  function gerarMatriz(linha,coluna,intervalo)
{
    matriz = [];
    for (i=0;i<linha;i++){
        matriz[i] = [];
        for (j=0;j<coluna;j++)
        {
        matriz[i][j] = Math.floor(Math.random()*intervalo)+1;
        }
    }
return matriz;
}

let M = gerarMatriz(2,4,50);
console.table(M);

let somaPares = 0;
let totalPares = 0;
 
    for (i = 0; i < 2; i++) {
       let contador = 0;
        for (j = 0; j < 4; j++) {
            let elementos = M[i][j];

            if(elementos >= 12 && elementos <= 20){
             contador++;
            } 
            if (elementos % 2 === 0){
                somaPares += elementos;
                totalPares++;
            }
            
        }
         console.log(`A quantidade de elementos entre 12 e 20 são: ${contador}`); 
    }

     let mediaPares = (somaPares / totalPares);
     console.log(`A média do elementos pares são: ${mediaPares.toFixed(2)}`);
*/




/*Ex:.6

  function gerarMatriz(linha,coluna,intervalo)
{
    M = [];
    for (i=0;i<linha;i++){
        M[i] = [];
        for (j=0;j<coluna;j++)
        {
        M[i][j] = Math.floor(Math.random()*intervalo)+1;
        }
    }
return M;
}

let matriz = gerarMatriz(20,10,100);
console.table(matriz);

let somaColunas = new Array(10).fill(0);
 
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 10; j++) {
            somaColunas[j] += matriz[i][j];
            }
            
        }
    console.log(somaColunas); 
    
let matrizResultante = [];

for (i = 0; i < 20; i++) {
    matrizResultante[i] = [];
        for (j = 0; j < 10; j++){

    let valorOriginal = matriz[i][j];
    let somas = somaColunas[j];

    matrizResultante[i][j] = valorOriginal * somas;
    }
    }

console.table(matrizResultante);         */



/*:.7

function gerarMatriz(linha,coluna,intervalo)
{
    matriz = [];
    for (i=0;i<linha;i++)
    {
        matriz[i] = [];
        for (j=0;j<coluna;j++)
        {
        matriz[i][j] = Math.floor(Math.random()*intervalo)+1;
        }
    }
return matriz;
}

M = gerarMatriz(4,6,100);
N = gerarMatriz(6,4,100);

console.log("Matriz M: ");
for (i=0;i<M.length;i++)
{
    for (j=0;j<M[i].length;j++)
    {
        console.log(M[i][j]+" ");
    }
}  
console.log("Matriz N:");
for (i=0;i<N.length;i++)
{
    for (j=0;j<N[i].length;j++)
    {
    console.log(N[i][j]+" ");
    }

}

console.log("Matriz O (M + N^T): ");
for (i=0;i<M.length;i++){
    for (j=0;j<M[0].length;j++){
        console.log(M[i][j] + N[j][i]+" ");
        }
}

*/




/*Ex:.9

function gerarMatriz(linha,coluna,intervalo)
{
    M = [];
    for (i=0;i<linha;i++){
        M[i] = [];
        for (j=0;j<coluna;j++)
        {
        M[i][j] = Math.floor(Math.random()*intervalo)+1;
        }
    }
return M;
}

let matriz = gerarMatriz(3,3,50);
console.table(matriz);

let inputNumber = parseFloat(2.5);    // número digitado pelo usuário.

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = matriz[i][j] * inputNumber;
    } 
}

console.log(`A matriz Resultante será: `);
console.table(matriz);
*/