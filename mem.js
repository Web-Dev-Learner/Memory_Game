const cardsArray = [
    {
        name:'horse',
        icon:'<i class="fa-solid fa-horse-head"></i>'
    },
    {
        name:'dove',
        icon:'<i class="fa-solid fa-dove"></i>'
    },
    {
        name:'feather',
        icon:'<i class="fa-solid fa-feather"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'jet',
        icon:'<i class="fa-solid fa-jet-fighter-up"></i>'
    },

    {
        name:'horse',
        icon:'<i class="fa-solid fa-horse-head"></i>'
    },
    {
        name:'dove',
        icon:'<i class="fa-solid fa-dove"></i>'
    },
    {
        name:'feather',
        icon:'<i class="fa-solid fa-feather"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'jet',
        icon:'<i class="fa-solid fa-jet-fighter-up"></i>'
    }
];

//shuffle method last card each one with other postion by using random int
// curr i with random indx - 2 cards swap

let flippedCards = []
let matchedPairs = 0;
shuffleCard();
const gameBoard = document.getElementById('gameBoard')
displayCards();

function shuffleCard(){
    for(let i=cardsArray.length-1;i>0;i--){
        const randIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index)
        card.classList.add('cardback');
        card.classList.add("active");
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
}


function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active')){
        let cardId = this.getAttribute('id');
        flippedCards.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardId].icon;
        if(flippedCards.length==2){
            setTimeout(checkMatch,1000);
        }
    }
}

function checkMatch(){
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');
    if(cardsArray[card1Id].name === cardsArray[card2Id].name){
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.background = '#070b1e';
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.remove('active');
        flippedCards[1].classList.remove('active');
        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor = '#070b1e';
        flippedCards[1].innerHTML = "";
        matchedPairs++;
        checkGameOver();

    }

    else{
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.add('cardback');
    }
    flippedCards = [];

}
function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');

    }


}