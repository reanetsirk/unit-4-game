

// crystal object variables
var crystal = {
  blue: 
  {
    names: "Blue",
    value: "0"
  },
  green: {
    name: "Green",
    value: "0"
  },
  red: {
    name: "Red",
    value: "0"
  },
  yellow: {
    name: "Yellow",
    value: "0"
  },
};


// variables
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var loseCount = 0;

// function to generate  random value
var getRandom = function(min, max){
  //return Math.floor(Math.random() * (max - min + 1)) + 19;
  return Math.floor(Math.random() * (max - min)) + min;
}


// the start of the game or reset of the game
function reset() {
  currentScore = 0;
  $("#yourScore").html(currentScore);

  // generate the target score and putit to the html
  targetScore = getRandom(19, 120);
  //console.log("target=" + targetScore);
  $("#targetScore").text(targetScore);// assigns values to your crystal variables

  // setting random values to each gem
  crystal.blue.value   = getRandom(1, 12);
  //console.log(crystal.blue.value);
  crystal.green.value  = getRandom(1, 12);
  crystal.red.value    = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

}



// on click listener
$("#one").click(function() {
 //console.log("on click crystal 1")
 addValues(crystal.blue.value);
});

$("#two").click(function() {
  addValues(crystal.green.value);
});

$("#three").click(function() {
  addValues(crystal.red.value);
});

$("#four").click(function() {
  addValues(crystal.yellow.value);
});


// adds the crystal value to the current score and
// puts it to the html
var addValues = function(aCrystalValue){
  //console.log("crystalValue=" + aCrystalValue);
 
  currentScore = currentScore + aCrystalValue;
  //console.log("currentScore=" + currentScore)

  $("#yourScore").html(currentScore);
  //console.log("yourScore: " + currentScore);

  // win / lose processing
  if ( currentScore == targetScore){
     console.log("YOU WIN!!!");
     winCount = winCount + 1; 
     $("#winCountId").text(winCount);
     reset();
  } else if ( currentScore > targetScore) {
             console.log("YOU LOSE!!!!");
             loseCount++;
             $("#loseCountId").text(loseCount);
             reset();
          }
 }





reset();  // the start of the game

