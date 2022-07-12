let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {};

// имя свойства будет взято из переменной fruit
bag[fruit] = 5; 



function reverse_a_number(n){
    n = n + ''
    return n.split('').reverse().join('')
}

console.log(reverse_a_number(1200))


//Simple multiplication

function simpleMultiplication(number) {
    if(number  % 2){
      return number*9
    }else{
      return number*8
    }
}

//Count Odd Numbers below n

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2
    }



   // OPPOSITES ATTRACT

 function oddCount(n){
  return Math.floor(n/2)
  }    


//SUM OF POSITIVE 


function positiveSum(arr) {
  let sum = 0
  for(let i = 0;i<arr.length;i++){
    if(arr[i]>=0){
      sum+=arr[i]
    }
  }
  return sum
}

// Counting sheep...

function countSheeps(arrayOfSheep) {
  let count = 0
  for(let i =0; i<arrayOfSheep.length;i++){
  if(arrayOfSheep[i]===true){
      count++
    }
  }
  return count
}

//Powers of 2

function powersOfTwo(n){
  let result = []
  for(let i = 0 ;i<=n;i++){
    result.push(2**i)
  }
  return result
}

//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
 }

//Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).


function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/g.test(username); 
}

//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {
    return [];
  } else {
     return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);   
    }
}
