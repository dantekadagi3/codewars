/**
 * You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12)    --> should return "10 + 2"
expandedForm(42)    --> should return "40 + 2"
expandedForm(70304) --> should return "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
 */

function expandedForm(num) {
    let parts = []; 
    const numStr = num.toString(); 

    
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]); 
        const placeValue = digit * Math.pow(10, numStr.length - 1 - i); 

        if (digit !== 0) {
            parts.push(placeValue);
        }
    }

    
    return parts.join(" + ");
}
