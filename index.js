
let dealerCards = []
let playerCards = []
let dealerSum = 0
let playerSum = 0
let dhasBlackJack = false
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
    dhasBlackJack = false
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let thirdCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    playerSum = firstCard + secondCard
    dealerCards = [thirdCard]
    dealerSum = thirdCard
    renderPlayer()
    renderDealer()
    messageEl.textContent = "Beat the Dealer!"
}


function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13 ) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


function hit() {
    if (isAlive === true && hasBlackJack === false) {
        let pCard = getRandomCard()
        playerSum += pCard   
        playerCards.push(pCard)
        renderPlayer()        
    }
}

function stay(){
    dealerCard()
    if (isAlive === true && playerSum > dealerSum){
        dealerCard()
    }

}

function dealerCard(){
    if (dhasBlackJack === false) {
    let dCard = getRandomCard()
    dealerSum += dCard
    dealerCards.push(dCard)
    renderDealer()
    }
}


function renderPlayer() {
    
    playerCardsEl.textContent = "Cards: "
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i] + " "
        
    }
    playerSumEl.textContent = "Sum: " + playerSum
    if (playerSum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (playerSum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "Dealer Wins!"
        isAlive = false
    }
    messageEl.textContent = message
}

function renderDealer(){
    dealerCardsEl.textContent = "Cards: "
    for (let i = 0; i < dealerCards.length; i++) {
    dealerCardsEl.textContent += dealerCards[i] + " "
    }
    dealerSumEl.textContent = "Sum: " + dealerSum
    if (dealerSum === 21){
        dhasBlackJack = true
        message = "Dealer Wins!"
    }else if (isAlive == false){
        message = "Dealer Wins!"
    }else if (hasBlackJack == true){
        message = "You Win!"
    }else if (playerSum>dealerSum){
        message = "You Win!"   
    }else if(dealerSum>=playerSum && dealerSum<22){
        message = "Dealer Wins!"
    }else{
        message = "You Win!"
    }
        
    messageEl.textContent = message
}