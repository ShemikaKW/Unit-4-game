
//<-----VARIABLES----->
var userScore = 0;
var numberToMatch; //Needs to be set between 19-120

var wins = 0;
var losses = 0;

//Object to hold each crystal
var crystals = [
    {
        img: "assets/images/diamond.jpg",
        name: "diamond",
        value: 0
    },
    {
        img: "assets/images/emerald.jpg",
        name: "emerald",
        value: 0
    },
    {
        img: "assets/images/Purple.jpg",
        name: "Purple",
        value: 0
    },
    {
        img: "assets/images/ruby.jpg",
        name: "ruby",
        value: 0
    }]


//<-----FUNCTIONS----->

$(document).ready(function () {

    function reset() {
        wins;
        losses;
        userScore = 0;
        numberToMatch = Math.round(Math.random() * 102 + 19);
        console.log(numberToMatch);
        //print numberToMatch to screen
        $("#random").text(numberToMatch);
        }

    //function to give each crystal a random value between 1-12 each time the page is loaded
    function makeCrystalScores() {
        for (var i = 0; i < 4; i++) {
            var crystal = Math.round(Math.random() * 12 + 1);
            crystals[i].value = crystal;
        }
    }

    //function to create crystal images and append them to the page
    function makeCrystalButtons () {
        for (var i = 0; i < 4; i++) {
            var crystalImage = $("<img>")
            crystalImage.attr("src", crystals[i].img)
            crystalImage.attr("value", crystals[i].value)
            crystalImage.addClass("crystal")
            $("#crystals").append(crystalImage)
        }
    }

    //function for when userScore matches numberToMatch
    function winner () {
        wins++;
        $("#wins").text(wins);
        $("#message").text("You Win!!!");
        reset();
    }

    //function for when userScore is greater than numberToMatch
    function loser () {
        losses++;
        $("#losses").text(losses);
        $("#message").text("You Lose!");
        reset();
    }

    //call the makeCrystalScores and makeCrystalButtons functions
    function setUpBoard () {
        makeCrystalScores();
        makeCrystalButtons();
    }

    //use jquery to make the images function as buttons
    setUpBoard();
    $("#crystals").on("click", "img", function(){
        console.log(this);
        var valueOfSelectedCrystal = $(this).attr("value");
        console.log(valueOfSelectedCrystal);
        //parseInt function to convert valueOfSelectedCrytal from string to integer
        valueOfSelectedCrystal = parseInt(valueOfSelectedCrystal);
        userScore = userScore + valueOfSelectedCrystal;
        console.log(userScore);
        console.log(numberToMatch);
        //print userScore to screen
        $("#score").text(userScore);

            //if/else statements
            //if userScore equals numberToMatch, wins++
            if (userScore === numberToMatch) {
                winner ();
                reset();
            }
            
            //if userScore is higher than numberToMatch, losses++
            if (userScore > numberToMatch) {
                loser ();
                reset();
            }

        });

        //when user wins or loses, reset numberToMatch and crystal variables and userScore
        //push those reset variables to HTML
    reset();
});