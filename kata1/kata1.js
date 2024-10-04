

function findOutlier(integers) {
    let evenCount = 0;
    let oddCount = 0;
    let evenNumber;
    let oddNumber;
    
    
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            evenCount++;
            evenNumber = integers[i]; 
        } else {
            oddCount++;
            oddNumber = integers[i];   
        }
    }

    
    let majorityIsEven = evenCount > oddCount;

    
    for (let i = 0; i < integers.length; i++) {
        if (majorityIsEven && integers[i] % 2 !== 0) {
            return integers[i];  
        } else if (!majorityIsEven && integers[i] % 2 === 0) {
            return integers[i]; 
        }
    }
}
