function msc(x){console.log(x)}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const container = $('.container');
const demo = $('.demo');
const circle = $('.circle');
const luckyNumber = $('#luckyNumber');
const concor = $('.concor');
var inputCont = $('.placeChoice');
var dsp = $('.msg');
var your_choice = $('.your_choice');
var timer = $('.timer');
var winCount = $('.winCount');

var msk = {
    setting: { 
        speed: 800, 
        target: 10,
        bg: 'green'
    }
}



var win = '';
var points = 0;
var totalBalls = 0;
var maxBalls = 30;
var ballsToRoll = 1;
var speed = msk.setting.speed;


var circlesArray = [];
function msg(m){dsp.style = `display: flex; width: 100%; justify-content: center;`;dsp.innerText = m}


circle.style.display = 'none';

circle.onclick = startCounter;

concor.onclick = (e)=>{
    if(luckyNumber.value != ''){
        circle.style.display = 'flex';
        your_choice.style.display = 'flex';
        win = luckyNumber.value;
        your_choice.innerText = `Your Number: ${luckyNumber.value}`;
        startCounter();
        inputCont.style.display = 'none';
        dsp.style.display = 'none';
        luckyNumber.value = '';
        luckyNumber.focus();
    }else{
        msg('Please pick a number');
    }
    
}



function startCounter (e){
    totalBalls = 0;
    var tc = 40;
var counter = setInterval((e)=>{
    timer.innerText = tc--;
    if(tc == 0){
        window.clearInterval(counter);
        msg('Time up');
        your_choice.innerText = '';
        circle.style.display = 'none';
        inputCont.style.display = 'flex';
        $('body').style.background = 'var(--primary)';
        timer.innerText = '';
    }else{
        var randColorRed = Math.floor((Math.random() * 255) + 1);
        var randColorYellow = Math.floor((Math.random() * 255) + 1);
        var randColorBlue = Math.floor((Math.random() * 255) + 1);
        var leftToRight = Math.floor((Math.random() * 90) + 1);
        var aim = Math.floor((Math.random() * msk.setting.target) + 1);

            totalBalls += ballsToRoll;
            circle.style = `background: rgb(${randColorRed}, ${randColorYellow}, ${randColorBlue});
                            margin-top: ${randColorRed}px; 
                            margin-left: ${leftToRight}%`;
            circle.innerHTML = aim;
            
            if(aim == win){
                $('body').style.background = 'green';
                points += 1;
                tc = tc + 5;
            }else{
                $('body').style.background = 'var(--primary)';
            }
            winCount.innerText = `Wins: ${points}`;
    }
}, speed);



}
function theme(c){
    if(c == '#000' || c == 'black'){
        $('body').style.color = 'white';
        $('body').style.background = c;
    }else{
        $('body').style.background = c;
    }
    
}



