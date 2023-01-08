// Create array for all possible cards
// Create a variable for the (2) player's hand value, and the dealer's hand value
// Create a function that assigns a random value between 4 and 21 to the player's hand, and a value between 2 and 11 to the dealer's hand.
// If the value of the hand is 21, code will execute informing the player that they got blackjack and have won.
// If the value of the hand is over 21, code will execute informing the player they have gone bust and ask if they want to bet again.
// If the value of the hand is below 21, code will execute asking if the player would like to hit or stay. 
// Continue with this until the player has either busted, or stayed
// When the player has stayed, add a random value between 2 and 11 to the dealer's hand.
// If the dealer number is less than 17, add another number
// Use a while loop: while the dealer value is < 17 && < 21 continue to add value
// Once the dealer has stopped it is time to evaluate the winner by comparing their values to 21
// The player with the closest number to 21 wins

var cards = [
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["10", 10],
    ["Jack", 10],
    ["Queen", 10],
    ["King", 10],
    ["Ace", 11],
]

var cardDealt = 0;
var firstCardDealt = 0;
var secondCardDealt = 0;
var playerHand = 0;
var dealerCard = 0;
var secondDealerCard = 0;
var dealerSecondCard = 0;
var dealerHand = 0;
var hitOrStay = "";

function dealCard() {
    cardDealt = Math.floor(cards.length * Math.random());
    cardDealt = cards[cardDealt];
    return cardDealt;
}

firstCardDealt = dealCard();
playerHand += firstCardDealt[1];
console.log(firstCardDealt[0]);

secondCardDealt = dealCard();
playerHand += secondCardDealt[1];
console.log(secondCardDealt[0]);



console.log("Your cards are " + secondCardDealt[0] + " and " + firstCardDealt[0]) + ".";

console.log(playerHand);


dealerCard = dealCard();
dealerHand += dealerCard[1];
console.log(dealerCard[0]);


console.log("The dealer's hand is " + dealerHand);

if (playerHand === 21) {
    alert("That's blackjack. You've won.")
}

if (playerHand > 21) {
    alert("That's a bust.")
}

while (playerHand < 21 && hitOrStay !== "s")  { 
    hitOrStay = prompt("Do you want hit (h) or stay (s)?");
    if(hitOrStay === "h") {
        cardDealt = dealCard();
        playerHand += cardDealt[1];
        console.log(cardDealt[0]); 
        console.log(playerHand);
    }
}

if (playerHand === 21) {
    alert("That's blackjack. You've won.")
}

if (playerHand > 21) {
    alert("That's a bust.")
}

if(hitOrStay === "s") {
    secondDealerCard = dealCard();
    dealerHand += secondDealerCard[1];
    console.log(secondDealerCard[0]);
    console.log(dealerHand)
}

if(playerHand > dealerHand && playerHand !== 21) {
    alert("You've won. The dealer drew " + secondDealerCard[1] + " for a total of " + dealerHand + ". And your total points were " + playerHand + ".") 
} else {
    alert("You lost. The dealer drew " + secondDealerCard[1] + " for a total of " + dealerHand + ". And your total points were " + playerHand + ".")
}

console.log(playerHand)













// function hitMe(hitOrStay) { 
//     if(hitOrStay === "h") {
//         dealCard();
//         playerHand += cardDealt[1];
//     }
//     return "You lose"
// }







// I now have a randomized value from 2 to 11. This is fine for round one.
// Some of the issues I currently have are that this is not really a pretty way of displaying the values
// It might be better to have an array of objects, and to iterate over these to return the actual card, rather than the value to the player



// while (gameRoundsChoice > gameRounds) {

//     var playerChoice = prompt("Rock, Paper, or Scissors?");
//     var computerChoice = Math.floor(gameChoices.length * Math.random());
//     computerChoice = gameChoices[computerChoice];

// if (playerChoice == computerChoice) {
//     alert("You tied! Computer chose " + computerChoice); gameTies++; gameRounds++;    
// }



// function myFunction(a, b) {
//     return a * b;             // Function returns the product of a and b
//   }


