////counts wins
var wins = 0;
////counts losses
var losses = 0;



////////////////////{Write a function that{changes the variable, push to the dom}}

var wordCorrectArray = [];

/////empty array used to store randomized animal object
var answerBank = [];
////empty array for which underscores are used as placeholders for the index of the correct answer
var userGuessArray = [];

////empty array for which the hint is placed for the correct answer
var hintArray = [];
////empty array for incorrect user guesses to be stored
var userIncorrectArray = [];

////counts guesses
var guessCount = 0;
///an array filled with objects to be used as the answer
var animal = [{
    species: "zebra",
    hint: "Africa",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "koala",
    hint: "australia",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "bison",
    hint: "north america",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "panda",
    hint: "asia",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "anteater",
    hint: "south america",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "polar bear",
    hint: "north pole",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "penguin",
    hint: "antarctica",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
{
    species: "reindeer",
    hint: "europe",
    //picture: $('#objectPicture').prepend('<img id="theImg" src="./images/zebra.jpg" />'),
},
]

////randomize selection through the animal array
var answerBank = animal[Math.floor(Math.random() * animal.length)];
console.log(answerBank.species)

console.log(animal)
var initGame = function () {
         generateNewWord()
 }
////////randomizes and returns  random object from the animal array
function generateNewWord() {
var correctAnswerBlank = ""
wordCorrectArray = [1, 2, 3];
userGuessArray = []
    answerBank = animal[Math.floor(Math.random() * animal.length)];
    console.log(answerBank.species)


wordCorrectArray = answerBank.species.split("")
console.log(wordCorrectArray)
//////loops through the stored answerBank to return
for (var i = 0; i < answerBank.species.length; i++) {
    ////// for each indices of species push an underscore at that index
    userGuessArray.push("_ ")
    //////removes spaces as a guess from the array and splices in a space in the DOM
    if (answerBank.species[i] == " ") {
        userGuessArray.splice(i, 1, " ")
    }
    ////take the length of userGuessArray and make it equal to guessCount
    var guessCount = userGuessArray.length
}
////add the guessCount to the dom
$('#guessCount').html("<div>Guesses: " + guessCount + "</div>")
//// joins together blanks that exist in the array
correctAnswerBlank = userGuessArray.join("")
console.log(correctAnswerBlank)
///append blank array to the div


$('#userCorrect').html("<div>" + correctAnswerBlank + "</div>");

////grabs html button element and assigns a click function to it
$("#objectHint").click(function () {
    /////grabs the html hintDiv and appends the object's hint when the button is clicked
    $('#hintDiv').html("<div>" + answerBank.hint + "</div>")
    ////makes the button only clickable once
    $(this).attr('disabled', true);
})
} 
/////////////////////////////////////////////////////end of initGame function

document.onkeyup = function (e) {
    var userInput = e.key.toLowerCase();
    userIncorrectArray = [];
    $('#userIncorrect').append("<div>" + userIncorrectArray + "</div>")



    for (var j = 0; j < wordCorrectArray.length; j++) {
        console.log(wordCorrectArray[j])
        console.log(userGuessArray[j])
        if (userInput == wordCorrectArray[j]) {
            userGuessArray[j] = userInput

        }
    }
    var speciesDisplay = userGuessArray.join("")
    document.getElementById('userCorrect').textContent = speciesDisplay.toUpperCase()

    if (speciesDisplay === answerBank.species) {
        wins++
        console.log(wins)
        $('#winCount').html("<div>Wins: " + wins + "</div>")
    }

    if (userInput !== wordCorrectArray[j]) {
        guessCount--
        console.log(wins)
        $('#guessCount').html("<div>Guesses:" + guessCount + "</div>")
    }
    if (guessCount === 0) {
        losses++
        alert("You Lose, Try Again")
        $('#lossCount').html("<div>Losses: " + losses + "</div>")
        
    }



    if (userInput !== wordCorrectArray[j]) {
        userIncorrectArray = userInput
        $('#userIncorrect').append("<div>" + userIncorrectArray + "</div>")
    }

    if (userInput == " "){
    generateNewWord()
    }
   
} ///// end of onkeyup function