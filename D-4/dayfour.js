// 7 Days of Code D-4 | Alura + Rafaella Ballerini

// Playing with random numbers
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}    

function guessGame() {
    const numberToGuess = getRandomIntInclusive(0, 10);
    let attempts = 3;

    while (attempts > 0) {
      let hint = prompt("What is your hint? (Remaining attempts: " + attempts + ")");
      if (hint == numberToGuess) {
        alert("Way to go! You got it! ;)");
        return;
      } else {
        attempts--;
        if (attempts > 0) {
          alert("Uh-Oh! Better luck on your next try.");
        }
      }
    }

    alert("Game over! The right number was " + numberToGuess + ".");
}

// Playing with a predefined number

// function guessGame() {
//     const numberToGuess = 8; // Predefined number
//     let attempts = 3;

//     while (attempts > 0) {
//       let hint = prompt("What is your hint? (Remaining attempts: " + attempts + ")");
//       if (hint == numberToGuess) {
//         alert("Way to go! You got it! ;)");
//         return;
//       } else {
//         attempts--;
//         if (attempts > 0) {
//           alert("Uh-Oh! Better luck on your next try.");
//         }
//       }
//     }

//     alert("Game over! The right number was " + numberToGuess + ".");
// }