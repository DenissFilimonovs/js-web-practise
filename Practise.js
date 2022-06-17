//IF  ALTERNATIVA SWITCH-CASE

const month = 10

if(month<=3) {
    result = 'zima'
}
if(month>=4 && month<=6){
    result = 'vesna'
}
if(month>=7 && month<=9){
    result = 'leto'
}
if(month>=10 && month<=12){
    result = 'osenj'
}

console.log(result)

// STROKA IF

String = 'abcde'
if(String[0]==='a'){
    console.log('da')
} else{
    console.log('net')
}


//STROKA IF 

String = '12345'

if(String[0]==1 || String[0]==2 || String[0]==3){
    console.log('da')
} else{
    console.log('net')
}

// EZ WHILE

let i = 1

while(i<=100){
    console.log(i)
    i+=2
} 

let i = 30

while(i>=0){
    console.log(i)
    i--
}

// FOR

for(let i = 100; i>=0; i--){
    console.log(i)
} 

// NAKOPLENIE REZULTATA V CIKLE 

let result = 1

for(let i = 1; i<=99; i+=2){
    result = result + i;
}

console.log(result)








let myArray =[1,2,3,4,5]
result = 0

for(let i = 0; i<myArray.length; i++){
    result+=myArray[i]
}

console.log(result)

// FOR IN

let obj = {
    green: 'zelenij',
    red: 'krasnij',
    blue: 'goluboj'
}

for(let key in obj){
    console.log(obj[key])
}


let obj = {
    Kolja: 200,
    Vasja: 300,
    Petja: 400
}

for(key in obj){
    console.log([key ]+ ' - zarplata ' + (obj[key]) + " dollarov" )
}



const myArray = [2,5,9,15,0,4]
for( let i = 0; i<myArray.length;i++){
    if(myArray[i]>3 && myArray[i]<10)
    console.log(myArray[i])
}

 Plusovie elementi skladivaem dura
let myArray = [2,-9,1,5,-3]
let result = 0

for(let i = 0;i<myArray.length;i++){
    if(myArray[i]>0){
        result += myArray[i]
    }
}
console.log(result)



let myArray = [1,2,5,8,4,13,4,10]
for(let i = 0; i<myArray.length; i++){
    if(myArray[i]==4){
        console.log('Estj')
        break;
    }
}

// SUMMA FOR IN
let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
let result = 0

for(let key in obj){
    result = result+obj[key]
    
}
console.log(result)


let lox = 'JS'
console.log(lox.toLowerCase())



let string = 'ja uchu javascript!'
console.log(string.slice(3, 8))*/

// REPLACE
let string = 'ja-uchu-javascript!' 

console.log(string.replace(/-/g,'!'))


// С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let string = 'ja uchu javascript!'
let arr = string.split(' ')
console.log(arr)


//Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let string = 'ja uchu javascript!'
let arr = string.split('')
console.log(arr)


//Stroka v massiv , perevorot , massiv v stroku 
let date = '2025-12-31'

let result = date.split('-').reverse().join('.')
console.log(result)


// Pervaja bukva zaglavnaja
let str = 'hello world'
let str2 = str.slice(0,1).toUpperCase()+str.slice(1)
console.log(str2)



let myArray = [1,2,3,4,5]
let result = myArray.slice(0,3) 
console.log(result) // [1,2,3]
*

let myArray = [1,2,3,4,5]
let result = myArray.slice(3,5) //[4,5]
console.log(result)



let myArray = [1,2,3,4,5]
myArray.splice(1,2) //[1,4,5]
console.log(myArray)


let myArray = [1,2,3,4,5]
myArray.splice(3,0,'a','b','c') //[1,2,3,a,b,c,4,5]
console.log(myArray)


let arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(-2, 1); //[a,b,c,e]
console.log(arr);



let obj = {
    js:'test',
    jq:'hello',
    css:'world'
}

console.log(Object.keys(obj))



let string = '123456'
let result = string.split('').reverse().join('')
console.log(result)



let lox = 'http://2132131';

if (lox.slice(0,7) == ('http://')){
    console.log('yes')
}else{
    console.log('idi nahuj')
}



let string = ''
for(let i=1; i<10;i++){
    string = string + i 
}
console.log(string) //123456789


let string = ''
for(let i = 9; i>0 ;i--){
    string = string + i //987654321
}
console.log(string)



function arrayFill(value, length) { 
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));


//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным

let myArray = [[1,2,3],[4,5],[6]]
sum = 0
for(let i = 0; i<myArray.length;i++){
    for(let j=0;j<myArray[i].length;j++){
        sum+=myArray[i][j]
    }
}
console.log(sum)



let myArray = [[[1,2],[3,4],[5,6],[7,8]]]
sum = 0
for(let i = 0;i<myArray.length;i++){
    for (let j=0;j<myArray[i].length;j++){
        for(let u = 0;u<myArray[i][j].length;u++){
            sum+=myArray[i][j][u]
        }
    }
}
console.log(sum)


// Only polozotilenoe
let myArray = [2,4,7,-3,-77,-1]
let newArray = []

function isPositive(num){
    if(num>=0){
        return true
    }else{
        return false
    }    
}
for(let i = 0; i<=myArray.length ;i++){
    if(isPositive(myArray[i])){
        newArray.push(myArray[i])
    }
}

console.log(newArray)


//true ili false 
function isNumberinRange(num){
   return num>0 && num<10;
}
console.log(isNumberinRange(6))


// 4etnoe ili ne4etnoe xd
function isEven(num){
    return num %2 == 0;
}
console.log(isEven(5))


//