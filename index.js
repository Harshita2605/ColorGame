var newgame = document.getElementById("new");

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");

var x;
var score;
var round;
var right;
var wrong;
var correctColor;

function getRandomColor() 
{
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
    return color;
}

function newGame() 
{
    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);
    score = 0;
    round = 0;
    right = 0;
    wrong = 0;

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
}

newgame.addEventListener("click", function(){location. reload()});

t1.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t1.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t2.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t2.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t3.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t3.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t4.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t4.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t5.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t5.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t6.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t6.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t7.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t7.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t8.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t8.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});

t9.addEventListener("click", function () 
{
    round += 1;
    document.getElementById("round").innerHTML = "Round = " + round;

    if (t9.style.background == correctColor) {score += 10; right += 1;}
    else {score -= 5; wrong +=1;}

    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();
    t7.style.background = getRandomColor();
    t8.style.background = getRandomColor();
    t9.style.background = getRandomColor();

    x = Math.floor(Math.random() * 9 + 1);

    switch(x)
    {
        case 1: correctColor = t1.style.background; break;
        case 2: correctColor = t2.style.background; break;
        case 3: correctColor = t3.style.background; break;
        case 4: correctColor = t4.style.background; break;
        case 5: correctColor = t5.style.background; break;
        case 6: correctColor = t6.style.background; break;
        case 7: correctColor = t7.style.background; break;
        case 8: correctColor = t8.style.background; break;
        case 9: correctColor = t9.style.background; break;
    }

    document.getElementById("sidebar").style.background = correctColor;
    document.getElementById("score").innerHTML = "Score = " + score;
    document.getElementById("stats").innerHTML = "Rounds Played = " + round + "<br>Correct Attempts = " + right + "<br>Incorrect Attempts = " + wrong + "<br>Score = " + score;
});


var modal = document.getElementById("myModal");
var end = document.getElementById("end");
var span = document.getElementsByClassName("close")[0];

end.onclick = function(){ modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none"; location.reload();}
window.onclick = function(event) {if (event.target == modal) {modal.style.display = "none";};}

