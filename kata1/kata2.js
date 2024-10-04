// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    sum=0;
    let length1=arr.filter(nums=>nums<0).length
   if(arr.length==0){
    return 0
   }
  
   if(length1==arr.length){
    return 0
   }
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        sum+=arr[i]
    }
    }
    return sum
  }

  

let arr1=[]
let arr2=[1,2,3,4,5]
let arr3=[1,-2,3,4,5]
let arr4=[-1,-2,-3,-4,-5]
let arr5=[-1,2,3,4,-5]

let total=positiveSum(arr3)

console.log(total)