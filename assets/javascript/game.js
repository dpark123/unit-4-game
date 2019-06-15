var wins = 0;
var losses = 0;
var goal = Math.floor(Math.random()*120)+19;//19-120
var score = 0;
var blueNumber = Math.floor(Math.random()*12)+1;//1-12
var greenNumber = Math.floor(Math.random()*12)+1;
var redNumber = Math.floor(Math.random()*12)+1;
var yellowNumber = Math.floor(Math.random()*12)+1;;

function setGame(){
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#score").html(score);
    $("#goal").html(goal);
}

$("#blueImg").click(function(){
    score = blueNumber+score;
    console.log(score);
    $("#score").html(score);
});

$("#greenImg").click(function(){
    score = greenNumber+score;
    console.log(score);
    $("#score").html(score);
});

$("#redImg").click(function(){
    score = redNumber+score;
    console.log(score);
    $("#score").html(score);
});

$("#yellowImg").click(function(){
    score = yellowNumber+score;
    console.log(score);
    $("#score").html(score);
});

$(document).on("click", function(){
    if(score === goal){
        wins++;
        reset();
        $("#status").html("You win!");
    }
    else if(score > goal){
        losses++;
        reset();
        $("#status").html("You lose :(");
    }
})

function reset(){
    score = 0;
    goal = Math.floor(Math.random()*120)+19;//19-120
    blueNumber = Math.floor(Math.random()*12)+1;//1-12
    greenNumber = Math.floor(Math.random()*12)+1;
    redNumber = Math.floor(Math.random()*12)+1;
    yellowNumber = Math.floor(Math.random()*12)+1;
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#score").html(score);
    $("#goal").html(goal);
}

setGame ();