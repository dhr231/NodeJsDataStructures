function ifThreeNumbersAddToZero(numberArray){
    sum=0;
    for(i=0;i<numberArray.length;i++){
        sum+=numberArray[i];
    }   
    sum==0 ? (console.log('The sum is ZERO')):(console.log("The sum is NOT ZERO"));
}

numberArray=[];
for(i=0;i<3;i++){
    const readline=require('readline-sync');
    const input=readline.question("Enter Three Numbers To find the SUM  :");
    numberArray.push(Number(input));
}
ifThreeNumbersAddToZero(numberArray);
