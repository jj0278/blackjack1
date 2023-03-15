
let dealerCards = []
let playerCards = []
let dealerSum = 0
let playerSum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const playerSumEl = document.getElementById("player-sum-el")
const playerCardsEl = document.getElementById("player-cards-el")
const playerEl = document.getElementById("player-el")
const dealerSumEl = document.getElementById("dealer-sum-el")
const dealerCardsEl = document.getElementById("dealer-cards-el")


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let thirdCard = getRandomCard()
    let fourthCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    playerSum = firstCard + secondCard
    dealerCards = [thirdCard, fourthCard]
    dealerSum = thirdCard + fourthCard
    renderGame()
}


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let dCard = getRandomCard()
        let pCard = getRandomCard()
        dealerSum += dCard
        playerSum += pCard
        dealerCards.push(dCard)
        playerCards.push(pCard)
        renderGame()        
    }
}


function renderGame() {
    dealerCardsEl.textContent = "Cards: "
    playerCardsEl.textContent = "Cards: "
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i] + " "
        dealerCardsEl.textContent += dealerCards[i] + " "
    }
    dealerSumEl.textContent = "Sum: " + dealerSum
    playerSumEl.textContent = "Sum: " + playerSum
    if (playerSum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (playerSum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}