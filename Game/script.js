score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play()
},1000);
document.onkeydown = function(e) {
    console.log("key code is:", e.keyCode);
    if (e.keyCode == 38) {
        var dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX +112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}//jgihohoh

setInterval(() => {
    var dino = document.querySelector('.dino');
    var gameover = document.querySelector('.gameover');
    var obstacle = document.querySelector('.obstacle');

    var dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    var dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    var ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    var oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    var offsetX = Math.abs(dx - ox);
    var offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration:',newDur)
        },500);
        
    }
}, 10);

function updateScore(score){
    scorecont.innerHTML = "your score:" + score
}
