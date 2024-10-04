function highAndLow(numbers) {
    // Split the string into an array of numbers
    let newArr = numbers.split(" ").map(Number); // Convert string elements to numbers

    // Find the maximum and minimum values in the array
    let max = Math.max(...newArr);
    let min = Math.min(...newArr);

    // Return max and min as a string concatenated with a space
    return max.toString() + " " + min.toString();
}






// function highAndLow(numbers){
//     // ...

// let noSpace=numbers.replace(/\s+/g,"")
// let newArr=Array.from(noSpace)
// let newArr1=newArr.sort()
// let max=newArr1[newArr.length-1]
// let min =newArr1[0]

// return max.concat(" ",min)

// }
//   let str="1 2 3 4"
//   let arr=highAndLow(str)
//   console.log(arr)



//   function highAndLow(numbers){
//     // ...

// let noSpace=numbers.replace(/\s+/g,"")
// let newArr=Array.from(noSpace)
// let max=newArr[newArr.length-1]
// let min=newArr[0]

// for(i=0;i<newArr.length;i++){
//     if(newArr[i]<min){
//         min= newArr[i]
//     }
//     if(newArr[i]>max){
//         max=newArr[i]
//     }
// }
// return max.toString() + " " + min.toString();
    
//   }
