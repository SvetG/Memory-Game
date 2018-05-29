/*
 * Create a list that holds all of your cards
 */

const cardArray = ["fa fa-birthday-cake", "fa fa-birthday-cake", "fa fa-spinner", "fa fa-spinner", "fa fa-kiwi-bird", "fa fa-kiwi-bird", "fa fa-paw", "fa fa-paw", "fab fa-d-and-d", "fab fa-d-and-d", "fab fa-pied-piper-alt", "fab fa-pied-piper-alt", "fa fa-people-carry", "fa fa-people-carry", "fa fa-wine-glass", "fa fa-wine-glass"];
const deck = document.querySelector('.deck');
//let card = cardArray[i];
let allCards = document.querySelectorAll(".card");
let openCards = [];
let matchingCards = [];
//let deck = document.querySelector(".deck");

//let matchingCards = getElementsByClassName(".match");
//let shuffledDeck = shuffle(cardArray);




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//New Deal calls shuffle function, starts timer, displays cards.
function newDeal() {
	  //for (let i = 0; i < cardArray.length; i++) {
		//deck.appendChild(card);
	 shuffle(cardArray);
}
newDeal();
//Clicking capabilities
//create loop to add element "li" to each item in array.
for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${cardArray[i]}"></i>`;
    deck.appendChild(card);
//as part of the same loop, add an event listener to show icons and turn over cards
    card.addEventListener("click", function() {
        card.classList.add("open", "show");
//clicked card should be "pushed" into openCards array
    openCards.push(this);
    if (openCards.length === 2){ //if amount of items in array =
        if(openCards[0].innerHTML === openCards[1].innerHTML){
          console.log("match");
        } else {
          console.log("no match");
        }
    }
  });
}

/**cardArray = shuffle(cardArray);
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*assign variables, allCards is assigned all elements with class "card"*/
