console.log("exercise 1")
function isPrime(number){
  if(number < 2){
    return false
  }
  for( let i = 2 ; i*i <= number ; i++){
    if(number % i == 0){
      return false    
    } 
  } return true
}
let a = 5
if(isPrime(a)){
  console.log(a, "is prime number")
}
else{
  console.log(a,"is not prime number")
}

console.log("exercise 2")
function primeNumberBetweenTwoNumber(number1, number2){
  if(number1 > number2){
    console.log("input is invalid! pls enter again!")
  }
  for(let i = number1 ; i <= number2 ; i++){
    if(isPrime(i)){
      console.log(i)
    }
  }
}
let number1 = 3, number2 = 15
primeNumberBetweenTwoNumber(number1, number2)

console.log("exercise 3")
function checkValidMonth(month){
  if(month < 1 || month > 12){
    console.log("month is invalid! pls enter again!")
  }else{
    console.log("Tháng", month)
  }
}
checkValidMonth(6)

console.log("exercise 4")
function findFirstAndMaxLength(len){
  
}