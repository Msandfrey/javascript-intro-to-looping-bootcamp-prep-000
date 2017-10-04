function forLoop(array){
  for(i = 0; i < 25; i++){
    var s = i===1 ? "" : "s"
    array.push(`I am ${i} strange loop${s}.`)
  }
  return array
}
function whileLoop(n){
  while(n>0){
    console.log(n)
    n--
  }
  return "done"
}
function doWhileLoop(array){

}
