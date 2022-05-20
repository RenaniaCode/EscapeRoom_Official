class DeadlyRectangle {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 70;/* Math.floor(Math.random() * 130) + 100; */
    this.height = 70;
    this.x = Math.floor(Math.random() * (500 - this.width + 1));
    this.y = -25;
    this.img = new Image();
    this.img.src = 'images/knife.png';
  }
  // setStartingX(){
  //   this.x = Math.floor(Math.random() * (500 - this.width + 1))
  // }
  move() {
    this.y += 7;
  }
  draw() {
    this.ctx.drawImage(this.img,this.x, this.y, this.width, this.height);
  }
  leftBorder() {
    return this.x;
  }
  rightBorder() {
    return this.x + this.width;
  }
  topBorder() {
    return this.y;
  }
  bottomBorder() {
    return this.y + this.height;
  }
  isOffBottomOfCanvas() {
    return this.y > 700;
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
  function startGame() {
    const myCanvas = document.querySelector('#canvas');
    myCanvas.style.border = '1px solid black';
    const ctx = myCanvas.getContext('2d');

    let numFrame = 0;

    const roadImage = new Image();
    roadImage.src = 'images/background.jpg';

    const carImage = new Image();
    carImage.src = 'images/character.png';

    const roadImageObject = {
      img: roadImage,
      x: 0,
      y: 0,
      speed: 1,

      move: function () {
        this.y += this.speed;
        // if(this.y > myCanvas.height){
        //   this.y = 0;
        // }
        this.y %= myCanvas.height;
      },

      draw: function () {
        ctx.drawImage(this.img, 0, this.y, 500, 500);
        if (this.speed < 0) {
          ctx.drawImage(this.img, 0, this.y + this.img.height, 500, 500);
        } else {
          ctx.drawImage(this.img, 0, this.y - myCanvas.height, 500, 500);
        }
      },
    };

    const carImageObject = {
      img: carImage,
      x: 250,
      y: 410,
      width: 90,
      height: 90,
      // speedX: 0,
      moveLeft: function () {
        // this.x -= this.speedX;
        this.x -= 35;
      },
      moveRight: function () {
        // this.x += this.speedX;
        this.x += 35;
      },
      draw: function () {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      },
      left() {
        return this.x;
      },
      right() {
        return this.x + this.width;
      },
      top() {
        return this.y;
      },
      bottom() {
        return this.y + this.height;
      },
      crashWith(aDeadlyRectangle) {
        return !(
          this.bottom() < aDeadlyRectangle.topBorder() ||
          this.top() > aDeadlyRectangle.bottomBorder() ||
          this.right() < aDeadlyRectangle.leftBorder() ||
          this.left() > aDeadlyRectangle.rightBorder()
        );
      },
    };

    const myDeadlyRectangleArray = [];

    let myScore = 0;

    

    function updateBackgroundCanvas() {
      if (numFrame % 50 === 0) {
        myDeadlyRectangleArray.push(new DeadlyRectangle(ctx));
      }

      numFrame += 1;

      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

      roadImageObject.move();
      roadImageObject.draw();

      if (myDeadlyRectangleArray[0].isOffBottomOfCanvas()) {
        myDeadlyRectangleArray.shift();
        myScore += 1;
        document.querySelector('h1 span').textContent = myScore;
      }

      for (let i = 0; i < myDeadlyRectangleArray.length; i++) {
        myDeadlyRectangleArray[i].move();
        myDeadlyRectangleArray[i].draw();
      }

      carImageObject.draw();

      function dead() {
        const scene = document.getElementById('main');
        scene.id = 'dead';
        scene.innerHTML = `
        <img src="Images/dead-png.png" alt="you are dead" id="deadImg">
        <button class="button-86" id="reStart">Start Again</button>
        `;

        reStart();
    }

    function reStart(){
        document.getElementById('reStart').onclick = ()=>{
            location.href = '/index.html';
            console.log('di click')
        }    
    }

      for (let i = 0; i < myDeadlyRectangleArray.length; i++) {
        if (carImageObject.crashWith(myDeadlyRectangleArray[i])) {
          dead();
          // document.getElementById('start-button').click();
        }
      }

      if(myScore === 100){
        location.href = 'win.html';
      }

      requestAnimationFrame(updateBackgroundCanvas);
    }

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          carImageObject.moveRight();
          break;
        case 'ArrowLeft':
          carImageObject.moveLeft();
          break;
        case 'ArrowDown':
          location.href = 'win.html'
      }
    });

    /* window.addEventListener('keydown',event=>{
      if(event.keyCode === 37 && carImageObject.x > 50){
        carImageObject.moveLeft();
      }
      if(event.keyCode === 39 && carImageObject.x < 180){
        carImageObject.moveRight();
      }
    }) */

    roadImage.onload = () => {
      // deadlyRectangleObject.setStartingX();
      updateBackgroundCanvas();
    };
  }
};