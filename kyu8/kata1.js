// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    return arr.reduce((accumulator, currentValue) => {
      if (currentValue > 0) {
        return accumulator + currentValue;
      } else {
        return accumulator;
      }
    }, 0);
  }
//tests
const arr1=positiveSum([1,2,3,4,5])
console.log(arr1)