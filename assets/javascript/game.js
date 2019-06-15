/*function displayImage(){
    $("#crystal-images").html('<img src= "../images/blueCrystal.jpg" width="50px">');
    $("#crystal-images").html('<img src="/images/greenCrystal.jpg">');
    $("#crystal-images").html('<img src="../assets/images/redCrystal.jpg">');
    $("#crystal-images").html('<img src="yellowCrystal.jpg">');
}

displayImage();*/

var wins = 0;
var losses = 0;
var goal;
var score = 0;
var blueNumber;
var greenNumber;
var redNumber;
var yellowNumber;

goal = Math.floor(Math.random()*120)+19;//19-120
blueNumber = Math.floor(Math.random()*12)+1;//1-12
greenNumber = Math.floor(Math.random()*12)+1;
redNumber = Math.floor(Math.random()*12)+1;
yellowNumber = Math.floor(Math.random()*12)+1;

function setGame(){
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#score").html(score);
    $("#goal").html(goal);
    
}
$("#game").on("click", function(){
    
    $("#blue").on("click", function(){
        score = blueNumber+score;
        console.log(score);
        $("#score").html(score);
    });
    
    $("#green").click(function(){
        score = greenNumber+score;
        console.log(score);
        $("#score").html(score);
    });
    
    $("#red").click(function(){
        score = redNumber+score;
        console.log(score);
        $("#score").html(score);
    });
    
    $("#yellow").click(function(){
        score = yellowNumber+score;
        console.log(score);
        $("#score").html(score);
    });
    
    if(score === goal){
        wins++;
        reset();
    }
    else if(score > goal){
        losses++;
        reset();
    }

});


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