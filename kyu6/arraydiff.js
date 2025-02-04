/*
The initial solution to this Kata of finding the difference between two arrays was to merge the two then using the set functiion
return  a new array but this only returned the  unique elements
function arrayDiff(a, b) {
    let arr=a.concat(b);
    let letters =new Set(arr)
    
    return letters;
  
  }

  let array=[1,2,3,4]
  let array2=[1,2,3,4,5]
  let newOne=arrayDiff(array,array2)
  console.log(newOne)*/

  //set trial 2

  /*function arrayDiff(a, b) {
  
    let diffArr=[];
    
    if(!(a.some(item=>b.includes(item))) ){
      return diffArr.push(item);
    }
     return diffArr;  
    
  }
     let array=[1,2,3,4]
  let array2=[1,2,3,4,5]
  let newOne=arrayDiff(array,array2)
  console.log(newOne)
  **/

  

   //To get   the total length of the shorter array(so check for lengths)
  //set trial 3 arrange  each array in  order and then compare 

//final solution
  function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num));
}