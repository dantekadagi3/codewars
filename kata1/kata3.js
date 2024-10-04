function makeNegative(num) {
    // Code?
    if(num<0||num==0){
      return num
    }
    if(num>0){
      return -num
    }
  }

  let negative=makeNegative(42)
  console.log(negative)