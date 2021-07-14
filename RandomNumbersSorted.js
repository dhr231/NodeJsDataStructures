function generateRandomNumbers(){
    return Math.floor(Math.random()*(999-100));
}

function arrayOfRandomNumbers(randomNumberArray){
    for(i=0;i<=9;i++){
        var randomNumber=generateRandomNumbers();
        randomNumberArray.push(randomNumber);
    }
    return randomNumberArray;
}

randomNumberArray=[];
randomNumberArray=arrayOfRandomNumbers(randomNumberArray);
randomNumberArray.sort();
console.log('2nd largest element in the array is :'+randomNumberArray[randomNumberArray.length-2]);
console.log('2nd smallest element in the array is :'+randomNumberArray[1]);