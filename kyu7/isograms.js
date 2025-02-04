function isIsogram(str){
    //...
    let strToArr=[...str.toLowerCase()];
    let strSet=new Set(strToArr)
    
    if(strToArr.length===strSet.size){
      return true;
    }
    return false;
  }

  let text="aba"
  console.log(isIsogram(text))