function displayThisStandard(){
  console.log(this)
}

let displayThisArrow = ()=>{
  console.log(this)
}

console.log("standard\n",displayThisStandard())
console.log("arrow\n",displayThisArrow())