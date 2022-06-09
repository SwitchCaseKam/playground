console.log('welcome to breakout game');

const gameBoard = document.querySelector('.game-board');
const gameInfo = document.querySelector('.game-info');

const gameResult = document.querySelector('.game-result');

const startButton = document.querySelector('.start-button');

const pointsSpan = document.querySelector('#points-span');




let points = 0;

const blockWidth = 25;
const blockHeight = 25;

const startingX = 0;
const startingY = 450;

const userPaddleWidth = 100;
const userPaddleHeight = 20;

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
    this.x = x;
    this.y = y;
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

const blocks = [];

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

    currentXPosition += 30;
    if (currentXPosition > 630) {
      currentXPosition = 0;
      currentYPosition -= 30; 
    }
  }
}

const createUserPaddle = () => {
  const userPaddle = document.createElement('div');
  userPaddle.classList.add('user-paddle');
  userPaddle.style.left = '300px';
  userPaddle.style.bottom = '20px';
  gameBoard.appendChild(userPaddle);

}

const createBall = () => {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = '300px';
  ball.style.bottom = '28px';
  gameBoard.appendChild(ball);
}



createBall();
createBlocks(132)
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

console.log(userPaddleObj)

let moveToLeft = false;
let moveToDown = false;

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      userPaddleObj.leftUp[0] -= 15;
      userPaddleObj.rightUp[0] -= 15;
      if ( userPaddleObj.leftUp[0] < 0) {
        userPaddleObj.leftUp[0] = 0;
      }
      userPaddle.style.left=  userPaddleObj.leftUp[0] + 'px';
      break;
    case 'ArrowRight':   
      userPaddleObj.leftUp[0] += 15;
      userPaddleObj.rightUp[0] += 15;
      if ( userPaddleObj.leftUp[0] > 555) {
        userPaddleObj.leftUp[0] = 555;
      }
      userPaddle.style.left=  userPaddleObj.leftUp[0] + 'px';
      break;
    default:
      break;
  }

});


setInterval(() => {
  if (ballObj.x > 640) {
    moveToLeft = true;
    if (moveToLeft) {
      ballObj.x -= 6;
      ball.style.left= ballObj.x + 'px';
    } else {
      ballObj.x += 6;
      ball.style.left= ballObj.x + 'px';
    }
  } else if (ballObj.x < 5) {
    moveToLeft = false;
    if (moveToLeft) {
      ballObj.x -= 6;
      ball.style.left= ballObj.x + 'px';
    } else {
      ballObj.x += 6;
      ball.style.left= ballObj.x + 'px';
    }
  } else {
    if (moveToLeft) {
      ballObj.x -= 6;
      ball.style.left= ballObj.x + 'px';
    } else {
      ballObj.x += 6;
      ball.style.left= ballObj.x + 'px';
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
    gameResult.innerHTML = "You lost!";
    ball.style.bottom = "28px";
    ball.style.left = "300px";
    points = 0;
    pointsSpan.innerHTML = points;
    // createBlocks(132)
    setTimeout(() => {
      gameResult.innerHTML = "";
    }, 1000);

  } else {
    if (moveToDown) {
      ballObj.y -= 2;
      ball.style.bottom= ballObj.y + 'px';
    } else {
      ballObj.y += 2;
      ball.style.bottom= ballObj.y + 'px';
    }
  }

  for (let j=0; j< blocks.length; j++) {
    if (ballObj.x >= blocks[j].leftDown[0] 
      && ballObj.x <= blocks[j].rightDown[0]
      &&
      ballObj.y >= blocks[j].leftDown[1] 
      && ballObj.y <= blocks[j].leftUp[1]) {
        const allBlocks = Array.from(document.querySelectorAll('.single-block'));
        allBlocks[j].classList.remove('single-block')
        blocks.splice(j, 1);
        moveToDown = true;
        ballObj.y -= 2;
        ball.style.bottom=  ballObj.y + 'px';
        points++;
        pointsSpan.innerHTML = points;
        
        }
    }


    if (ballObj.x >= userPaddleObj.leftUp[0] && ballObj.x <= userPaddleObj.rightUp[0] && ballObj.y <= userPaddleObj.leftUp[1]) {
      moveToDown = false;
      if (moveToDown) {
        ballObj.y -= 2;
        ball.style.bottom= ballObj.y + 'px';
      } else {
        ballObj.y += 2;
        ball.style.bottom= ballObj.y + 'px';
      }
    }
  }, 20);
