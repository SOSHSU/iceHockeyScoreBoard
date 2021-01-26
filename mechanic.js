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