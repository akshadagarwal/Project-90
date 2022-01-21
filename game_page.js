var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var score_p1 = 0;
var score_p2 = 0;
var word = "";


document.getElementById("question_turn").innerHTML = "Question Turn - " + player1;
document.getElementById("answer_turn").innerHTML = "Answer Turn  - " + player2;
document.getElementById('p2_name').innerHTML = player2 + ":";
document.getElementById('p1_name').innerHTML = player1 + ":";
document.getElementById("p1_score").innerHTML = score_p1;
document.getElementById("p2_score").innerHTML = score_p2; 