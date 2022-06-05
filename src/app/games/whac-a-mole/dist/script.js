console.log('memory game');

const cardsArray = [
  {
    name: 'one',
    value: 1
  }, {
    name: 'two',
    value: 2
  }, {
    name: 'three',
    value: 3
  }, {
    name: 'four',
    value: 4
  }, {
    name: 'five',
    value: 5
  }, {
    name: 'six',
    value: 6
  },  {
    name: 'seven',
    value: 7
  }, {
    name: 'eight',
    value: 8
  }
];

let points = 0;

function prepareGameCards() {
  let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const cards = document.querySelectorAll('.card-item');
  for (let card of cards) {
    const randIndex = Math.floor(Math.radom()*nums.length;
    console.log(nums[randIndex]);
    card.nativeElement.innerHTML = nums[randIndex];
    console.log('X')
  }
  
}


prepareGameCards();