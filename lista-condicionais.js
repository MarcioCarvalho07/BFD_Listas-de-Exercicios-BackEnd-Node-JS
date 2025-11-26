
/* Ex:.1

let n1 = parseFloat(6);
let n2 = parseFloat(8);

if (n1 < n2){
    document.write("N1 é o Menor!");
} else if (n2 < n1){
    document.write("N2 é o Menor!");
} else if (n1 == n2){
    document.write("N1 e N2 tem o mesmo valor!");
} else {
    document.write("Error no valor!");
}
 
document.write("<br/>"); */



/* Ex:.2

let a = parseInt(prompt(""));
let b = parseInt(prompt(""));
let c = parseInt(prompt(""));

function maior(){
    if (a > b && a > c) {
        return "A é o Maior!";
    } else if (b > a && b > c) {
        return "B é o Maior!";
    } else if (c > b && c > a) {
        return "C é o Maior!";
    } else {
        return "Não existe maior!"
    }
}

alert(maior());   */



/* Ex:.3

let nota1 = 9;
let nota2 = 8;
let nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

    if(media >= 6){
        console.log ("Você está Aprovado!");
        } else {
        console.log(" Você está Reprovado!");
    }
 
console.log(`O valor da Média é: ${media}`);   */




/* Ex:.4

numInt = 9;

    if (numInt % 2 === 0 && numInt > 0){
        console.log("O número é par");
    } else {
        console.log("O número é Impar!");
    }
*/


/* Ex:.5

const num = [3,8,7];

console.log(num.sort((a,b) => b-a));   */


/* Ex:.6

function peso(){
    n1 = 7;  n2 = 8;  n3 = 9;
    media = (n1+n2+n3)/3;
    if (n1 > n2 && n1 > n3) {
        return "N1 terá peso 5 e N2 e N3 peso 2,5. A média é: " + media;
    } else if (n2 > n1 && n2 > n3) {
        return "N2 terá peso 5 e N1 e N3 peso 2,5. A média é: " + media;
    } else if (n3 > n2 && n3 > n1) {
        return "N3 terá peso 5 e N1 e N2 peso 2,5. A média é: " + media;
    } else {
        return "Não existe maior!"
    }
}

console.log(peso());  */


/* Ex:.7

 let vendedor =prompt('Digite o nome do vendedor: ');
 const salarioFixo = 3000;
 let totalVendas = parseInt(prompt('Digite o total de vendas do mês: '));
 let salarioTotal = parseFloat(0);
 let comissaoSimples = parseFloat(0.03);
 let limiteComissao = parseInt(10000);

    if(totalVendas <= limiteComissao){
        salarioTotal = salarioFixo + (totalVendas*comissaoSimples);
    } else if (totalVendas > limiteComissao){
         salarioTotal = salarioFixo + 10000*comissaoSimples + (totalVendas-10000)*0.05;
    }
     alert(`O total de vendas do vendedor ${vendedor} foram de ${totalVendas}, Com salário base de  ${salarioFixo},
        e salário total de ${salarioTotal.toFixed(2)}`)

*/


 /* Ex:.8

    let altura = parseFloat(prompt('Digite sua altura(metros): '));
    let sexo = prompt('Digite seu sexo: ');

    if (sexo === 'M'){
        pesoIdeal = (72.7 * altura) - 58;
        alert(`Seu peso ideal é : ${pesoIdeal.toFixed(2)}`);
    } else if (sexo === 'F'){
        pesoideal = (62.1 * altura) - 44.7;
        alert(`Seu peso ideal é: ${pesoIdeal.toFixed(2)}`);
    } else  {
        alert('Sexo ou Altura inválida!')
    } 

*/


 /* Ex:.9

    let idade = parseInt(17);

    if(idade >= 5 && idade <= 7){
        console.log("Você está classificado como: Infantil A");
    } else if (idade >= 8 && idade <= 10){
        console.log("Você está classificado como: Infantil B");
    } else if (idade >= 11 && idade <= 13){
        console.log("Você está classificado como: Juvenil A");
    } else if (idade >= 14 && idade <= 17){
        console.log("Você está classificado como: Juvenil B");
    } else if (idade >= 18){
        console.log("Você está classificado como: Adulto");
    } 
*/


/* Ex:.10


 let salario = parseFloat(prompt('Digite o salário: '));
 let cargo = prompt('Digite seu cargo: ');
 let novoSalario = parseFloat(0);
 let reajuste = 0;



   if (cargo === 'gerente'){
    novoSalario = salario + salario*0.10;
    reajuste = 0.10;
   } else if (cargo === 'engenheiro'){
    novoSalario = salario + salario*0.20;
     reajuste = 0.20;
   } else if (cargo === 'tecnico'){
    novoSalario = salario + salario*0.30;
     reajuste = 0.30;
   } else {
    novoSalario = salario + salario*0.40;
    reajuste = 0.40;
   }

  
   alert(`O Salário Antigo do Funcionário era de ${salario}.
    Tendo novo Salário de ${novoSalario}, com reajuste de ${reajuste}`); */



    /* Ex:.11


    let a = parseInt(prompt('Digite o primeiro lado: '));
    let b = parseInt(prompt('Digite o segundo lado: '));
    let c = parseInt(prompt('Digite o terceiro lado: '));

    function verificarTriangulo (a,b,c){
    if (a === b && b === c){
        return ('O triângulo é equilátero!'); // 3 lados iguais.
    } else if (a < b || a > b && a === c && b === c ){
        return ('O triângulo é isósceles!');  // 2 lados iguais e 1 diferente.
    } else if (a !== b && a !== c && b !== c ){
        return ('O triângulo é escaleno!');  // 3 lados diferentes.
    } else {
        return (` Os valores lidos são: ${a},  ${b}, ${c}. O comprimento de cada lado é menor que a soma dos comprimentos dos outros dois lados!`);
    }
    }

    alert(verificarTriangulo());       */



    /* Ex:.12

    let num = 30;

    if (num % 10 === 0){
        console.log(`O número ${num} é divisível por 10!`)
    } else if (num % 5 === 0){
        console.log(`O número ${num} é divisível por 5!`)
    } else {
        console.log(`O número ${num} não é divisível por nenhum dos 2!`)
    }

    */



    /* Ex:.13

    let nomeCapital = prompt('Digite a capital do Brasil: ');

    if (nomeCapital == 'Brasília' || nomeCapital == 'BRASÍLIA'){
        document.writeln('Parabens você acertou!')
    } else {
        document.writeln('Você errou!')
    }
*/



/* Ex:.14

let num1 = 7;      let num2 = 5;

    if(num1 % num2 === 0){
        console.log('O Primeiro número é divisível pelo Segundo!');
    } else {
        console.log('O Primeiro número não é divisível pelo Segundo!');
    }

    */



 /* Ex:.15
 
    let numberMes = parseInt(prompt('Digite um número entre 1 e 12: '));

    if (numberMes == 1){
        document.write('O mês correspondente ao número inserido é: JANEIRO')
    } else if (numberMes == 2){
        document.write('O mês correspondente ao número inserido é: FEVEREIRO')
    } else if (numberMes == 3){
        document.write('O mês correspondente ao número inserido é: MARÇO')
    } else if (numberMes == 4){
        document.write('O mês correspondente ao número inserido é: ABRIL')
    } else if (numberMes == 5){
        document.write('O mês correspondente ao número inserido é: MAIO')
    } else if (numberMes == 6){
        document.write('O mês correspondente ao número inserido é: JUNHO')
    } else if (numberMes == 7){
        document.write('O mês correspondente ao número inserido é: JULHO')
    } else if (numberMes == 8){
        document.write('O mês correspondente ao número inserido é: AGOSTO')
    } else if (numberMes == 9){
        document.write('O mês correspondente ao número inserido é: SETEMBRO')
    } else if (numberMes == 10){
        document.write('O mês correspondente ao número inserido é: OUTUBRO')
    } else if (numberMes == 11){
        document.write('O mês correspondente ao número inserido é: NOVEMBRO')
    } else if (numberMes == 12){
        document.write('O mês correspondente ao número inserido é: DEZEMBRO')
    } else {
        document.write('O número inserido não corresponde a nenhum mês!')
    }

    */



    /* Ex:.16


    let nome = 'Joao';
    let peso = 75;
    let altura = 1.78;

    const imc = peso/(altura * altura);       
    
    
    function classificarImc (imc){

        if ( imc < 20){
            return ('Abaixo do peso!')
        } else if (imc >= 20 && imc < 25){
            return ('Normal!')
        } else if (imc >= 25 && imc < 30){
            return ('Excesso de peso!')
        } else if (imc >= 30 && imc < 35){
            return ('Obesidade!')
        } else if (imc > 35) {
            return ('Obesidade mórbida!')
        }
    }

    console.log(`O Paciente ${nome} apresenta Faixa de Risco de: ${classificarImc(imc)}!`);        */



    /* Ex:.17

    let nome = 'pedro';
    let media = 7.6;
    let resultado = 0;

    if (media >= 9){
       resultado = ('A')
    } else if (media < 9 && media >= 7.5){
       resultado = ('B')
    } else if (media < 7.5 && media == 6){
       resultado = ('C')
    } else if (media < 6 && media >= 4){
       resultado = ('D')
    } else if (media < 4){
       resultado = ('E')
    }

    console.log(`O aluno ${nome} obteve a média de ${media} estando assim: ${resultado}!`);        */