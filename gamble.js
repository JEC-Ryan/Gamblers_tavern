var money = 10;//Starting money
var round = 1;
var gamble = 1;
var game = false;
var lose = false;
var win = false;


function dice(){
    return Math.floor(Math.random() * 3);
}

function double(){
    if (win || lose) { 
    } else if (!game) {
        money-=gamble;
        document.getElementById('roundNum').innerHTML = "第" + round + "輪";
        document.getElementById('moneyNum').innerHTML = "目前的金錢：" + money ;
        document.getElementById('gambleNum').innerHTML = "賭金：" + gamble ;
        document.getElementById('keepGamble').innerHTML = "繼續賭" ;
        game = true;
    } else {
        var diceNum=dice();
        if (diceNum===0) {
            gamble=1;
            game = false;
            //document.getElementById('roundNum').innerHTML = "第" + round + "輪";
            //document.getElementById('moneyNum').innerHTML = "目前的金錢：" + money ;
            document.getElementById('gambleNum').innerHTML = "你賭輸了！賭金：0" ;
            if (money===0) {
                document.getElementById('result').innerHTML = "你輸光光了！" ;
                lose=true;
            } else {
            document.getElementById('keepGamble').innerHTML = "下注！" ;
            round++;    
            }
        } else {
            gamble=gamble*2;
            //document.getElementById('roundNum').innerHTML = "第" + round + "輪";
            //document.getElementById('moneyNum').innerHTML = "目前的金錢：" + money ;
            document.getElementById('gambleNum').innerHTML = "你賭贏了，賭金翻倍：" + gamble ;
        }
    }
}

function save(){
    if (game && !win && !lose) {
        money+=gamble;
        gamble = 1;
        game = false; 
        //document.getElementById('roundNum').innerHTML = "第" + round + "輪";
        document.getElementById('moneyNum').innerHTML = "目前的金錢：" + money ;
        document.getElementById('gambleNum').innerHTML = "賭金：0" ;
        if (money>=250) {
            win = true;
            document.getElementById('result').innerHTML = "恭喜獲勝！密碼是88888。" ;  
        } else {
            document.getElementById('keepGamble').innerHTML = "下注！" ;
            round++;    
        }
    }
}


