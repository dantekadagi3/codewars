function getCount(str) {
    let text = str.toLowerCase();               // Convert to lowercase
    let finalText = text.replace(/\s+/g, '');   // Remove spaces
    const set = new Set(['a', 'e', 'i', 'o', 'u']); // Set of vowels
    let count = 0;
    
    for (let i = 0; i < finalText.length; i++) {
        if (set.has(finalText[i])) {  // Check finalText[i] instead of str[i]
            count++;
        }
    }
    return count;
}

let counter = getCount("abraa");
console.log(counter);  // Output: 4
