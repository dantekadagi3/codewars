function alphabetWar(fight) {
  let sumLeft = 0;
  let sumRight = 0;

  const lettersPower = new Map([
    ['w', 4],
    ['p', 3],
    ['b', 2],
    ['s', 1],
    ['m', 4],
    ['q', 3],
    ['d', 2],
    ['z', 1]
  ]);

  fight = fight.toLowerCase(); // Ensure case-insensitivity

  // Check if there's only one letter
  if (fight.length === 1) {
    return "Right side wins!";
  }

  // Split the string into two halves
  const mid = Math.ceil(fight.length / 2);
  const firstHalf = fight.substring(0, mid);
  const secondHalf = fight.substring(mid);

  // Calculate the sum for the left side
  for (let i = 0; i < firstHalf.length; i++) {
    sumLeft += lettersPower.get(firstHalf[i]) || 0; // Default to 0 if letter has no power
  }

  // Calculate the sum for the right side
  for (let i = 0; i < secondHalf.length; i++) {
    sumRight += lettersPower.get(secondHalf[i]) || 0; // Default to 0 if letter has no power
  }

  // Determine the winner
  if (sumRight > sumLeft) {
    return "Right side wins!";
  } else if (sumLeft > sumRight) {
    return "Left side wins!";
  } else {
    return "Let's fight again!";  
  }
}

