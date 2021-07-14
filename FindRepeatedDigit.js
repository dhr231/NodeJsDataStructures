function findRepeatedNumbers(lowerRange,upperRange){
    repeatedNumbersArray=[];
    for(i=lowerRange;i<upperRange;i++){
        if(isNumberRepeated(i)){
            repeatedNumbersArray.push(i);
        }

    }
    return repeatedNumbersArray;

}

function isNumberRepeated(n){
    
    digit=n%10;
    remainingNumber=Math.floor(n/10);
    if(digit==remainingNumber){
        return true;
    }
    return false;
    
}

const readline=require('readline-sync');
const lowerRange=readline.question('Enter the lower limit :');
const upperRange=readline.question('Enter the upper limit :');
repeatedNumbersArray=[];
repeatedNumbersArray=findRepeatedNumbers(lowerRange,upperRange,repeatedNumbersArray);
console.log(repeatedNumbersArray);