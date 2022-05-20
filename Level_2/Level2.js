window.onload = ()=>{

    let inner1 = 0;
    let inner2 = 0;
    let inner3 = 0;
    setInterval(check,1000)
    setTimeout(dead,10000);

    document.getElementById('btn1').onclick = ()=>{
        num1();
    }

    document.getElementById('btn2').onclick = ()=>{
        num2();
    }

    document.getElementById('btn3').onclick = ()=>{
        num3();
    }

    document.getElementById('btn4').onclick = ()=>{
        min1();
    }

    document.getElementById('btn5').onclick = ()=>{
        min2();
    }

    document.getElementById('btn6').onclick = ()=>{
        min3();
    }

    function num1 () {
        inner1 += 1;
        let n1 = document.getElementById('n1');
        n1.innerText = inner1;
        if(inner1 > 9){
            inner1 = -1;
            num1();
        }
    }

    function num2 () {
        inner2 += 1;
        let n2 = document.getElementById('n2');
        n2.innerText = inner2;
        if(inner2 > 9){
            inner2 = -1;
            num2();
        }
    }

    function num3 () {
        inner3 += 1;
        let n3 = document.getElementById('n3');
        n3.innerText = inner3;
        if(inner3 > 9){
            inner3 = -1;
            num3();
        }
    }

    function min1 () {
        inner1 -= 1;
        let n1 = document.getElementById('n1');
        n1.innerText = inner1;
        if(inner1 < 0){
            inner1 = 10;
            min1();
        }
    }

    function min2 () {
        inner2 -= 1;
        let n2 = document.getElementById('n2');
        n2.innerText = inner2;
        if(inner2 < 0){
            inner2 = 10;
            min2();
        }
    }

    function min3 () {
        inner3 -= 1;
        let n3 = document.getElementById('n3');
        n3.innerText = inner3;
        if(inner3 < 0){
            inner3 = 10;
            min3();
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
    
    function check () {
        let no1 = document.getElementById('n1').innerText;
        console.log(no1)
        let no2 = document.getElementById('n2').innerText;
        console.log(no2)
        let no3 = document.getElementById('n3').innerText;
        console.log(no3)

        if(no1 == 1 && no2 == 1 && no3 == 6){
            console.log('pasa')
            location.href = '/Level_3/Level3.html'
        }else{
            console.log('you can')
        }
    }
}