//1
function areBothSame(x, y){
  //Put two parameters that can be input.
  //Write If statement to check if the parameter is true
  if (x == y) {
      return true
      //checks if x is equal to y and if it is returns true
  } else {
      return false
      // if the equal fails it will return false
  }
}
// console.log(areBothSame(true, 1))
//2
function areBothEqual(x, y){
      //Put two parameters that can be input.
  //Write If statement to check if the parameter is true
  if (x == y) {
      return true
      //checks if x is equal to y and if it is returns true
  } else {
      return false
      // if the equal fails it will return false
  }
  
}

//3
function areAllFourEqual(x, y, z , v){
  if (x == y && x == z && x == v ) {
      return true
  } else {
      return false
  }
}
//console.log(areAllFourEqual(2, 2, "2", "2"))

//4
function areAllFourSame(x, y, z, v){
   if (x === y && x === z && x === v ) {
      return true
  } else {
      return false
  }
}

//5
function areAllFourSameOrEqual(x , y, z, v){
  if (x == y && x == z && x == v ) {
      return "same"
  } else if (x === y && x === z && x === v) {
      return "equal"
  } else {
      return null
  }
}


