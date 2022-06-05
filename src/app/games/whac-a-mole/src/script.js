console.log('whac-a-mole');

const gameGrid = document.querySelector('.game-grid');
const pointsField = document.querySelector('#points');
const timeLeftField = document.querySelector('#time-left');
const startGameButton = document.querySelector('#start-game-button');

let time = 60;
let points = 0;

let previousIndex = 0;
let currentHighlightedElementIndex = 0;

const gameBoxSize = 400;

startGameButton.addEventListener('click', () => {
  drawNextElement();
  points = 0;
  pointsField.innerHTML = points;
  time = 60;
  timeLeftField.innerHTML = time;
  const clock = setInterval(() => {
    time--;
    if (time === 0) {
      timeLeftField.innerHTML = "Time finished";
      clearInterval(clock);
      alert('Game over. You scored', points, ' points');
    }
    timeLeftField.innerHTML = time;
  }, 1000);
});

for (let cellItemIndex = 0; cellItemIndex < gameBoxSize; cellItemIndex++) {
  const cellItem = document.createElement('div');
  cellItem.className = "grid-cell-item";
  cellItem.value = cellItemIndex;
  cellItem.innerHTML = ' ';
  cellItem.addEventListener('click', () => {
    if (currentHighlightedElementIndex === cellItemIndex) {
      points++;
      pointsField.innerHTML = points;
      drawNextElement();
    }
  });
  gameGrid.appendChild(cellItem);
}

const cellItems = document.querySelectorAll('.grid-cell-item');
const drawNextElement = () => {
  let randIndex = Math.floor(Math.random()*gameBoxSize);
  if (randIndex == previousIndex) {
    randIndex = previousIndex+1;
  }

  const randGridCellItem = cellItems[randIndex];
  currentHighlightedElementIndex = randIndex;
  const previousGridCellItem = cellItems[previousIndex];
  previousGridCellItem.style.backgroundColor = "transparent";
  randGridCellItem.style.backgroundColor = "orange";
  previousIndex = randIndex;
}

