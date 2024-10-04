// 


function findShort(s){

    const arr=s.split(' ')
    
    let short=arr[0]
   
    for(i=0;i<arr.length;i++){
        if(arr[i].length<short.length){
            short=arr[i]
        }
    }
    return short.length;
  }


  let wordarr=findShort("Let's travel abroad shall we")
  console.log(wordarr)

  //My thoughts on this was to split the string into an array  then compare the lengths of each element in a loop


  //simplified solution
  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}