const arr = [1,2,3,4,5]

function forEach(arr, callback){
  for(let i = 0; i < arr.length ; i++){
    callback(arr[i], i, arr)
  }
}

// function map(arr, callback){
//   const arr2 = []
//   arr2.length = arr.length
//   for(let i = 0 ; i< arr.length ; i++){

//     callback(arr2[i], i , arr2)
//   }
// }

function map(arr, callback){
    const arr2 = []
    arr2.length = arr.length
    for(let i = 0 ; i< arr.length ; i++){
      const value = callback(arr2[i], i , arr2)
      arr2.push
    }
  }

function find(arr, callback){
  for(let i = 0 ; i< arr.length ; i++){
    if(callback(arr[i], i, arr)){
      return arr[i]
    } else 
    return undefined
  }
}

function includes ( callback){
  for(let i = 0 ; i< arr.length ; i++){
    if(callback(arr[i], i, arr)){
      return true
    } else 
    return false
  }
}

function reduce (){

}