var score = 0
function addScore()
{
    score++
    document.querySelector(".homeScore").innerHTML = score
}
function minusScore()
{
    if(score > 0)
    {
        score--
    }
    document.querySelector(".homeScore").innerHTML = score
}

var score2 = 0
function addScore2()
{
    score2++
    document.querySelector(".guestScore").innerHTML = score2
}
function minusScore2()
{
    if(score2 > 0)
    {
        score2--
    }
    document.querySelector(".guestScore").innerHTML = score2
}

var period = 1
function nextPeriod()
{
    if(period >= 3)
    {
        period = 1
    }
    else
    {
        period++
    }
    document.querySelector(".periodtime").innerHTML = period
}

var name1 = ""
function addName1()
{
    name1 = prompt("What is the name?")   
    document.querySelector(".player1").innerHTML = name1
}
function removeName1()
{
    name1 = ""
    document.querySelector(".player1").innerHTML = name1
}

var name2 = ""
function addName2()
{
    name2 = prompt("What is the name?")   
    document.querySelector(".player2").innerHTML = name2
}
function removeName2()
{
    name2 = ""
    document.querySelector(".player2").innerHTML = name2
}

function reset()
{
    score = 0
    score2 = 0
    period = 1
    name1 = ""
    name2 = ""
    document.querySelector(".homeScore").innerHTML = score
    document.querySelector(".guestScore").innerHTML = score2
    document.querySelector(".periodtime").innerHTML = period
    document.querySelector(".player1").innerHTML = name1
    document.querySelector(".player2").innerHTML = name2
}