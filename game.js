class Card {  // create class for a single card including value and suit
    constructor(value, suit) {
         this.value = value // assigns card face value
         this.suit = suit // assigs card suit
    }   

    getNumericValue() { //method to convert face cards to numeric value
        if (this.value === 'A') return 14 // ace = 14
        if (this.value === 'K') return 13 // king = 13
        if (this.value === 'Q') return 12 // queen = 12
        if (this.value === 'J') return 11 // jack = 11
        return parseInt(this.value) // convert numeric string to integer for 2-10
    }
}

class Deck { // create class for deck of 52 playing cards
    constructor() {
        this.cards = [] // empty array to store cards
        this.populate() // fills deck upon creatation
        this.shuffle() // shuffles deck after populating
    }

    populate() { // populates deck with 1 card of each value and suit
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'] // array with all suits
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // array of all values.
        for (let suit of suits) { // interates through each suit
            for (let value of values) { // interates through each value
                this.cards.push(new Card(value, suit)) //creates new card and adds to deck
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generates a random index.
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swaps the current card with the randomly chosen card.
        }
    }

    deal() { // deals half of cards one play by removing and returning first half of deck array
        return this.cards.splice(0, this.cards.length / 2)
    }
}

class Player { //create class for a player
    constructor(name) {
        this.name = name // assigns player's name
        this.cards = [] // empty array to hold players's cards
        this.score = 0 // starts player's score at zero
    }

    receiveCards(cards) { // receives and stores set of cards
        this.cards = cards // stores the dealt cards in the player's hand
    }

    playCard(){ // plays top card in the player's hand
        return this.cards.shift() // removes first card from the array
    }

    addPoint(){ // increments the player's score by 1 pt
        this.score++ // increases score
    }
}

class Game { // creates class to manage game flow and logic
    constructor() {
        this.deck = new Deck() // creates new deck
        this.players = [new Player('Player 1'), new Player('Player 2')] // creates players 1 and 2
        this.dealCards() // half of deck to each player
    }

    dealCards(){ //deals cards to player by splitting deck in half
        this.players[0].receiveCards(this.deck.deal()) // player 1 receives first half of deck
        this.players[1].receiveCards(this.deck.deal()) // player 1 receives second half of deck
    }

    play() { // game begin, each play plays a card in turn until all cards are player
        while (this.players[0].cards.length > 0 && this.players[1].cards.length > 0) {
            const card1 = this.players[0].playCard() // player1 plays top card
            const card2 = this.players[1].playCard() //player 2 plays top card

            const value1 = card1.getNumericValue() // convert player1 card to numeric value
            const value2 = card2.getNumericValue() // convert player1 card to numeric value
        

    console.log(`${this.players[0].name} plays ${card1.value} of ${card1.suit} (${value1}) vs ${this.players[1].name} plays ${card2.value} of ${card2.suit} (${value2})`); // logs cards played and value

        // compare numeric value of cards to determine winner of each round
        if (value1 > value2) { 
            this.players[0].addPoint() // player1 wins round and earns a point
            console.log(`${this.players[0].name} wins the round and now has ${this.players[0].score} point(s).`) // logs winner of round and thier score
        } else if (value2 > value1) {
            this.players[1].addPoint() // player2 win round and earns a point
            console.log(`${this.players[1].name} wins the round and now has ${this.players[1].score} point(s).`); // Log winner of round and their score
        } else {
            console.log('This round is a tie.') // if cards's value are equal its a tie
        }
    }

    this.displayResults() // display final results after all rounds have been played
   
}

    // Logs the final scores and declares the winner or a tie.
    displayResults() {
        // Log each player's final score.
        console.log(`${this.players[0].name} Score: ${this.players[0].score}, ${this.players[1].name} Score: ${this.players[1].score}`);
        if (this.players[0].score > this.players[1].score) {
            // Player 1 has a higher score and is declared the winner.
            console.log(`${this.players[0].name} wins!`);
        } else if (this.players[1].score > this.players[0].score) {
            // Player 2 has a higher score and is declared the winner.
            console.log(`${this.players[1].name} wins!`);
        } else {
            // If the scores are equal, the game ends in a tie.
            console.log("It's a tie!");
        }
    }
}

// Instantiates and plays the game instances as before, with comments omitted for brevity.
const game1 = new Game();
game1.play();

const game2 = new Game();
game2.play();



