window.onload = ()=>{

    /* export let getName = prompt('Write your name','Name'); */

    document.getElementById('startGame').onclick = ()=>{
        startGame();
    }

    document.getElementById('levels').onclick = ()=>{
        level1();
    }

    function startGame() {
        location.href = 'Level_1/Level1.html';
    }

    function level1() {
        location.href = 'Level_4/Level4.html';
    }
}