window.onload = ()=>{
    
        setTimeout(changeColor,1000);    

    document.getElementById('door1').onclick = ()=>{
        if(document.getElementById('door1')){
            location.href = '/Level_2/Level2.html'
        }else{
            dead();
        }
    }
    document.getElementById('door2').onclick = ()=>{
        dead();
    }
    document.getElementById('door3').onclick = ()=>{
        dead();
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

    function changeColor() {
        const door1 = document.getElementById('door1');
        door1.id = 'blueDoor1'
        const door2 = document.getElementById('door2');
        door2.id = 'redDoor2'
        const door3 = document.getElementById('door3');
        door3.id = 'yellowDoor3'
        setInterval(red,1000)
    }

    function red() {
        const door1 = document.getElementById('blueDoor1');
        door1.id = 'redDoor1'
        const door2 = document.getElementById('redDoor2');
        door2.id = 'yellowDoor2'
        const door3 = document.getElementById('yellowDoor3');
        door3.id = 'blueDoor3'
        setInterval(yellow,1000)
    }

    function yellow() {
        const door1 = document.getElementById('redDoor1');
        door1.id = 'yellowDoor1'
        const door2 = document.getElementById('yellowDoor2');
        door2.id = 'blueDoor2'
        const door3 = document.getElementById('blueDoor3');
        door3.id = 'redDoor3'
        setInterval(white,1000)
    }

    function white() {
        const door1 = document.getElementById('yellowDoor1');
        door1.id = 'door1'
        const door2 = document.getElementById('blueDoor2');
        door2.id = 'door2'
        const door3 = document.getElementById('redDoor3');
        door3.id = 'door3'
        setInterval(changeColor,1000)
    }
}

function level2() {
    location.href = 'index.html';
}