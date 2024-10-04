function alphabetWar(fight) {
    
    const leftPower = new Map([
        ['w', 4],
        ['p', 3],
        ['b', 2],
        ['s', 1]
    ]);
    
    const rightPower = new Map([
        ['m', 4],
        ['q', 3],
        ['d', 2],
        ['z', 1]
    ]);

    
    let leftScore = 0;
    let rightScore = 0;

    for (let letter of fight) {
        if (leftPower.has(letter)) {
            leftScore += leftPower.get(letter);
        } else if (rightPower.has(letter)) {
            rightScore += rightPower.get(letter);
        }
    }


    if (leftScore > rightScore) {
        return "Left side wins!";
    } else if (rightScore > leftScore) {
        return "Right side wins!";
    } else {
        return "Let's fight again!";
    }
}