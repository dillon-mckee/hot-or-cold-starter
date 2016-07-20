$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var gameGuess = $('#userGuess').val();
    //fizzBuzz(gameGuess);
  });
generateNumber();

    function generateNumber() {
    var x = Math.floor((Math.random() * 100) + 1);
    console.log(x);
  }

    // function testFunction(x, y) {
    //  return x + y;
    // }
    // console.log(testFunction(5, 10));



  function fizzBuzz(max) {
    console.log(max);
    for (var i = 0; i <= max; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz");
      }
      else if (i % 3 === 0) {
        console.log("fizz");
      }
      else if (i % 5 === 0) {
        console.log("buzz");
      }
      else {
        console.log(i);
      }
    }
  }


    //var gameGuess = $('#userGuess').val();
    //document.log(gameGuess);
    //});

  // onLoad();
  // function onLoad() {
  //   newGame();

  // }

  // function newGame() {

  // }




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



});


