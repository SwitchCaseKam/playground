console.log('breakout');

const gameGrid = document.querySelector('.game-grid');
const gameStatusInfo = document.querySelector('.game-status-info');
const blocks = document.querySelector('.blocks');

const createSingleBlock = () => {
  const block = document.createElement('div');
  block.classList.add('single-block');
  blocks.appendChild(block);
};

const createUserPaddle = () => {
  const userPaddle = document.createElement('div');
  userPaddle.classList.add('user-paddle');
  gameGrid.appendChild(userPaddle);
  userPaddle.style.left = '350px';
  window.addEventListener('keydown', (e) => {
    let leftAttributeUserPaddle = Number(userPaddle.style.left.split('p')[0]);
    switch (e.key) {
      case 'ArrowLeft':
        leftAttributeUserPaddle = leftAttributeUserPaddle - 5;
        if (leftAttributeUserPaddle < 0) {
          leftAttributeUserPaddle = 0;
        }
        userPaddle.style.left= leftAttributeUserPaddle + 'px';
        break;
      case 'ArrowRight':   
        leftAttributeUserPaddle = leftAttributeUserPaddle + 5;
        if (leftAttributeUserPaddle > 700) {
          leftAttributeUserPaddle = 700;
        }
        userPaddle.style.left= leftAttributeUserPaddle + 'px';
        break;
      default:
        break;
    }
  });
};

const createBall = () => {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  gameGrid.appendChild(ball);
  ball.style.left = "390px";
  ball.style.bottom = "80px";
  let leftAttributeBall = Number(ball.style.left.split('p')[0]);
  let bottomAttributeBall = Number(ball.style.bottom.split('p')[0]);
  
  console.log(ball.style.left, ball.style.bottom)
  console.log('ball :', leftAttributeBall, bottomAttributeBall)
  setInterval(() => {
    ball.style.left= leftAttributeBall + 2 + 'px';
    ball.style.bottom= bottomAttributeBall + 2 + 'px';
  }, 100);
};

createUserPaddle();
createBall();
for (let i=0; i<133; i++) {
  createSingleBlock();
} 

