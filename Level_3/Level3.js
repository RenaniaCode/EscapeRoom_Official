window.onload = ()=>{
    let lives = 3;

    function livesCount () {
        let number = document.getElementById('number');
            lives -= 1
            number.innerText = lives;
            if(lives === 0){
                dead();
            }
    }

    function dead() {
        const scene = document.getElementById('mainGame');
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

    addEventListener('keydown',event=>{
        if(event.keyCode === 75){
            location.href = 'http://127.0.0.1:5500/Level_4/Level4.html'
        }else{
            livesCount();
        }
    })
}

