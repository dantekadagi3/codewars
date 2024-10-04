function descendingOrder(n){
    //...
   let arr=n.toString().split('').map(Number)
   arr.sort((a,b)=>b-a)

   return Number(arr.join(""))
  }

  let num=123456789
  let high=descendingOrder(num)
  console.log(high)