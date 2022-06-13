const gameBoard = document.querySelector('.game-board');
const gameInfo = document.querySelector('.game-info');

const gameStatusText = document.querySelector('.game-status-text');
const pointsSpan = document.querySelector('.points-span');


let points = 0;

const blockWidth = 30;
const blockHeight = 30;

const startingX = 0;
const startingY = 450;

const gameBoardWidth = 660;
const gameBoardHeight = 480;

const userPaddleWidth = 100;
const userPaddleHeight = 20;

const ballWidth = 25;

const userPaddleSingleMove = 15;


const blocks = [];
const blocksNumber = 44; 

class Block {
  constructor(id, x, y) {
    this.id = id;
    this.leftDown = [x, y];
    this.rightDown = [x + blockWidth, y];
    this.leftUp = [x, y + blockHeight];
    this.rightUp = [x + blockWidth, y + blockHeight];
  }
}

class Ball {
  constructor(x, y) {
    this.x = x + ballWidth/2;
    this.y = y + ballWidth/2;
  }
}

class UserPaddle {
  constructor(x, y) {
    this.leftDown = [x, y - userPaddleHeight];
    this.rightDown = [x + userPaddleWidth, y - userPaddleHeight];
    this.leftUp = [x, y];
    this.rightUp = [x + userPaddleWidth, y]; 
  }
}

const createBlocks = (blocksNumber) => {
  let currentXPosition = startingX;
  let currentYPosition = startingY;
  for (let blockId = 0; blockId < blocksNumber; blockId++) {
    const singleBlock = document.createElement('div');
    singleBlock.classList.add('single-block');
    const block = new Block(blockId, currentXPosition, currentYPosition);
    blocks.push(block);
    singleBlock.style.left = block.leftDown[0] + 'px';
    singleBlock.style.bottom = block.leftDown[1] + 'px';
    singleBlock.style.width = blockWidth;
    singleBlock.style.height = blockHeight;
    gameBoard.appendChild(singleBlock);

    currentXPosition += blockWidth;
    if (currentXPosition > gameBoardWidth - blockWidth) {
      currentXPosition = 0;
      currentYPosition -= blockWidth; 
    }
  }
}

const createUserPaddle = () => {
  const userPaddle = document.createElement('div');
  userPaddle.classList.add('user-paddle');
  userPaddle.style.left = gameBoardWidth / 2 + 'px';
  userPaddle.style.bottom = '20px';
  gameBoard.appendChild(userPaddle);
}

const createBall = () => {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = gameBoardWidth / 2 + 'px';
  ball.style.bottom = gameBoardWidth / 3 + 'px';
  gameBoard.appendChild(ball);
}

createBall();
createBlocks(blocksNumber);
createUserPaddle();

const userPaddle = document.querySelector('.user-paddle');
const ball = document.querySelector('.ball');

let ballObj = new Ball(
  Number(ball.style.left.split('p')[0]),
  Number(ball.style.bottom.split('p')[0])
);

let userPaddleObj = new UserPaddle( 
  Number(userPaddle.style.left.split('p')[0]),
  Number(userPaddle.style.bottom.split('p')[0])
);

let moveToLeft = false;
let moveToDown = false;

function handleWallsCollision() {
  if (ballObj.x > gameBoardWidth - ballWidth) {
    moveToLeft = true;
    if (moveToLeft) {
      ballObj.x -= 6;
      ball.style.left = ballObj.x + 'px';
    } else {
      ballObj.x += 6;
      ball.style.left = ballObj.x + 'px';
    }
  } else if (ballObj.x < 5) {
    moveToLeft = false;
    if (moveToLeft) {
      ballObj.x -= 6;
      ball.style.left = ballObj.x + 'px';
    } else {
      ballObj.x += 6;
      ball.style.left = ballObj.x + 'px';
    }
  } else {
    if (moveToLeft) {
      ballObj.x -= 6;
      ball.style.left = ballObj.x + 'px';
    } else {
      ballObj.x += 6;
      ball.style.left = ballObj.x + 'px';
    }
  }

  if (ballObj.y > 455) {
    moveToDown = true;
    if (moveToDown) {
      ballObj.y -= 2;
      ball.style.bottom= ballObj.y + 'px';
    } else {
      ballObj.y += 2;
      ball.style.bottom= ballObj.y + 2 + 'px';
    }
  } else if (ballObj.y < 0) {
    ball.style.bottom = gameBoardHeight / 5 + 'px';
    ball.style.left = gameBoardWidth / 2 + 'px';
    ballObj.y = gameBoardHeight / 5;
    ballObj.x = gameBoardWidth / 2;
    points = 0;
    moveToDown = false;
    pointsSpan.innerHTML = points;
    gameStatusText.innerHTML = "you lost";
    setTimeout(() => {
      gameStatusText.innerHTML = "";
    }, 1500)
  } else {
    if (moveToDown) {
      ballObj.y -= 2;
      ball.style.bottom= ballObj.y + 'px';
    } else {
      ballObj.y += 2;
      ball.style.bottom= ballObj.y + 'px';
    }
  }
}

function handleHitBlock() {
  for (let j = 0; j < blocks.length; j++) {
    if (ballObj.x >= blocks[j].leftDown[0]
      && ballObj.x <= blocks[j].rightDown[0]
      && ballObj.y >= blocks[j].leftDown[1]
      && ballObj.y <= blocks[j].leftUp[1]) {
      const allBlocks = Array.from(document.querySelectorAll('.single-block'));
      allBlocks[j].classList.remove('single-block');
      blocks.splice(j, 1);
      moveToDown = true;
      ballObj.y -= 2;
      ball.style.bottom = ballObj.y + 'px';
      points++;
      pointsSpan.innerHTML = points;
    }
  }
}

function handleUserPaddle() {
  if (ballObj.x >= userPaddleObj.leftUp[0]
    && ballObj.x <= userPaddleObj.rightUp[0]
    && ballObj.y <= userPaddleObj.leftUp[1] + 20) {
    moveToDown = false;
    if (moveToDown) {
      ballObj.y -= 2;
      ball.style.bottom = ballObj.y + 'px';
    } else {
      ballObj.y += 2;
      ball.style.bottom = ballObj.y + 'px';
    }
  }
}

function handleUserPaddleMoves() {
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        userPaddleObj.leftUp[0] -= userPaddleSingleMove;
        userPaddleObj.rightUp[0] -= userPaddleSingleMove;
        if (userPaddleObj.leftUp[0] < 0) {
          userPaddleObj.leftUp[0] = 0;
          userPaddleObj.rightUp[0] = userPaddleWidth;
        }
        userPaddle.style.left = userPaddleObj.leftUp[0] + 'px';
        break;
      case 'ArrowRight':
        userPaddleObj.leftUp[0] += userPaddleSingleMove;
        userPaddleObj.rightUp[0] += userPaddleSingleMove;
        if (userPaddleObj.leftUp[0] > gameBoardWidth - userPaddleWidth) {
          userPaddleObj.leftUp[0] = gameBoardWidth - userPaddleWidth;
          userPaddleObj.rightUp[0] = gameBoardWidth;
        }
        userPaddle.style.left = userPaddleObj.leftUp[0] + 'px';
        break;
      default:
        break;
    }
  });
}

handleUserPaddleMoves();
setInterval(() => {
  handleWallsCollision();
  handleHitBlock();
  handleUserPaddle();
}, 20);
