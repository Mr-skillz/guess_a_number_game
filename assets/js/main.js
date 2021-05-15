function msc(x){console.log(x)}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const container = $('.container');
const demo = $('.demo');
const circle = $('.circle');
var ball = '<div class="circle"></div>';

var totalBalls = 0;
var maxBalls = 30;
var ballsToRoll = 1;
var speed = 800;

var circlesArray = [];

circle.onclick = startCounter;

startCounter();

function startCounter (e){
    msc('clicker')
    totalBalls = 0;
var counter = setInterval((e)=>{
    if(totalBalls >= maxBalls){
        window.clearInterval(counter);
        circle.innerHTML = 'Time up';
    }else{
        var randColorRed = Math.floor((Math.random() * 255) + 1);
        var randColorYellow = Math.floor((Math.random() * 255) + 1);
        var randColorBlue = Math.floor((Math.random() * 255) + 1);
        var leftToRight = Math.floor((Math.random() * 90) + 1);

        
        

            msc(totalBalls += ballsToRoll);
            // circle.style = 'postion: absolute';
            circle.style = `background: rgb(${randColorRed}, ${randColorYellow}, ${randColorBlue});
                            margin-top: ${randColorRed}px; 
                            margin-left: ${leftToRight}%`;
            circle.innerHTML = leftToRight;
            // circle.style = ``;
            if(circle.style.background == 'rgb(255, 0, 0)'){
                msc('true');
            }

            // circlesArray.push(ball);
            // container.innerHTML = circlesArray;

            msc(`rgb(${randColorRed}, ${randColorYellow}, ${randColorBlue})`);
            msc(`margin-left: ${leftToRight}px`);
    }
}, speed);

}


