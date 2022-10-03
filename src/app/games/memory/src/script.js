console.log('memory game');

const numberOfElements = 31;
let cardsArray = Array.from(Array(numberOfElements).keys());
let chosenCards = [];
let points = 0;

let time = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function checkChosenCards(card) {
  chosenCards.push(card);
  console.log('chosenCards: ', chosenCards);
  if (chosenCards.length === 2) {
    if (chosenCards[0].value === chosenCards[1].value) {
      console.log('chosenCards: ', chosenCards, ' you choose the same card, good job');
      setTimeout(() => {
        chosenCards[0].className = 'card-item-disabled';
        chosenCards[1].className = 'card-item-disabled';
        chosenCards = [];
        points++;
        document.getElementById('points').innerHTML = points;
        if (points === numberOfElements) {
          time = 0;
          setTimeout(() => alert(`you won. your time = ${time}`), 500);
          
        }
      }, 400);
    } else {
      setTimeout(() => {
        chosenCards[0].innerHTML = 'X';
        chosenCards[1].innerHTML = 'X';
        chosenCards = [];
      }, 400);
    }
  }
}

setInterval(() => {
  time++;
  document.getElementById('time').innerHTML = time;
}, 1000);

function prepareGameCards() {
  const gridGameFloor = document.querySelector('.game-floor');
  console.log('gridGameFloor = ', gridGameFloor);
  cardsArray = shuffle(cardsArray.concat(cardsArray));
  
  for (let cardIndex=0 ; cardIndex< cardsArray.length; cardIndex++) {
    const cardItem = document.createElement('div');
    cardItem.className = "card-item";
    cardItem.innerHTML = 'X';
    cardItem.value = cardsArray[cardIndex];
    gridGameFloor.appendChild(cardItem);
  }
}




prepareGameCards();

const cards = document.querySelectorAll('.card-item');

for (let card of cards) {
  card.addEventListener('click', () => {
    card.innerHTML = card.value;
    checkChosenCards(card);
  });
}