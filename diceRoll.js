let outcomeMap = new Map();
function checkfor10value(){
    for(let value of outcomeMap.values()){
        if(value == 10){
            return false;
        }
    }
    return true;
}
function getByValue(outcomeMap, searchValue) {
    for (let [key, value] of outcomeMap.entries()) {
      if (value === searchValue){
          return key;
      }
    }
}
function getMin(minimum, number){
    if(number < minimum){
        minimum = number;
    }
    return minimum;
}
while(checkfor10value()){
    let num = Math.floor((Math.random() * 6) + 1);
    if(DieRollMap.has(num)){
        DieRollMap.set(num,DieRollMap.get(num) + 1);
    }else{
        DieRollMap.set(num,1);
    }
}
console.log(outcomeMap);
console.log(getByValue(outcomeMap,10));
let min = Array.from(outcomeMap.values()).reduce(getMin, 1000);
console.log(getByValue(outcomeMap,min));