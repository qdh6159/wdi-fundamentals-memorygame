console.log("Up and running!");

$(function () {
        $("header").hide(300).show(1000);
        

    })


var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}

};

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
    if(cardsInPlay.length > 1) {
	  checkForMatch();
    }

};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();

$(function () {
        $("img").hide(300).show(1000);
        

    })



var resetTheGame = function(){
    cardsInPlay=[];
    $(function () {
        $("img").hide(300);
        

    })
    for (var i = 0; i < cards.length; i++) {
        var x = document.getElementsByTagName("img")[i];
        x.setAttribute('src',"images/back.png");
        }

    $(function () {
        $("img").show(1000);
        

    })
};
	


document.getElementsByTagName('button')[0].addEventListener('click', resetTheGame);
