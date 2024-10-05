// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let sum=numbers.reduce((accumulator, currentValue)=> accumulator+Math.pow(currentValue,2),0)

    return sum
                           
                           
  
  }

  