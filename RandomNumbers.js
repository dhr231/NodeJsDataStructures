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

function find2ndLargest(array){
    max=largest2nd=100
    for(i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    for(i=0;i<array.length;i++){
        if(array[i]>largest2nd &&array[i]<max){
            largest2nd=array[i];
        }
    }
    console.log(largest2nd);
}

function find2ndSmallest(array){
    min=smallest2nd=999
    for(i=0;i<array.length;i++){
        if(array[i]<min){
            min=array[i];
        }
    }
    for(i=0;i<array.length;i++){
        if(array[i]<smallest2nd &&array[i]>min){
            smallest2nd=array[i];
        }
    }
    console.log(smallest2nd);
}


randomNumberArray=arrayOfRandomNumbers(randomNumberArray)
console.log(randomNumberArray)
find2ndLargest(randomNumberArray)
find2ndSmallest(randomNumberArray)

