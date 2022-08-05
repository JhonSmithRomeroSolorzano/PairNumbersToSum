const prompt = require("prompt-sync")({ sigint: true });
const inputNumbers = prompt("Write the numbers list separated by a comma:");
const inputNumberSum = prompt("Write the number sum value:");

let numbersArray = inputNumbers.split(',')

let filteredNumbers = numbersArray.filter(number => Number.isInteger(parseInt(number))).map(n=> parseInt(n));

let hashObj = {}, results = [];

for (let i = 0; i < filteredNumbers.length; i++){
  if (hashObj[filteredNumbers[i]] || hashObj[filteredNumbers[i]] === 0){
      results.push([hashObj[filteredNumbers[i]], filteredNumbers[i]])
  }else{
    hashObj[inputNumberSum - filteredNumbers[i]] = filteredNumbers[i];
  }
  
}
console.log(results)