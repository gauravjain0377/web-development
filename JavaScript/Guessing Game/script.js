const maximum = prompt("Enter the Maximum Number");

const random = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("User quit");
        break;
    }

    if(guess == random) {
        console.log("You are right! Congrats! random number was", random);
        break;
    } 
    else if (guess < random) {
        guess = prompt("Hint: your guess was too small. Please try again.");
    }
    else if (guess > random) {
        guess = prompt("Hint: Your guess was too large. Please try again");
    }
    
    
    
    // else {
    //     guess = prompt("Your guess was wrong. Please try again");
    // }
}