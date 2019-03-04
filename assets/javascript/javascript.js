//var words = {
//blackhole: "blackhole",
//planet: "planet",
//earth: "earth",
//space: "space",
//vacuum: "vacuum",
//celestial: "celestial",
//gravity: "gravity",





//}





//document.onkey = function showLetter(e) {
//if (KeyboardEvent.e === words) {
//return 




  //  }


//}


//Set word array
var words = ["blackhole","planet","earth","space","vacuum","celestial",
"gravity",]

//Choose word randomly
var word = words[Math.floor(Math.random() * words.length)];

//Make array for answer
var answer = [];
    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
    }

var remainingLetters = word.length;
    
    //The playing loop
    while (remainingLetters > 0) {
        //Show players progress
        document.getElementById("wordGuess").innerHTML = answer;
        answer.push("_");
        
        
        }
       
    
