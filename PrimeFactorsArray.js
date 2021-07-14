function arrayOfPrimeNumbers(n){
    primeNumbers=[]
    divisor=2;
    while(n!=1){
        while(n%divisor==0){
            primeNumbers.push(divisor);
            n=n/divisor;
        }
        divisor++;
    }
    console.log(primeNumbers);
}
const readline=require('readline-sync');
const input=readline.question('Enter the number to get its prime factors');
arrayOfPrimeNumbers(Number(input));