// Put ''; after multiline comments to make them properly collapsible
// I don't know why but cloud9 is wierd like that

var $;

//Avoided by loading script after body;
// $( document ).ready(function() {

$('.main-content-box').css('width', $('.main-content-box').height() * 3 / 2 ) ;
 
$('ready-button').focus();
 
//Display background particles
$('#particles').particleground({
    dotColor: '#ffffff',
    lineColor: '#ffffff',
    particleRadius: 3,
    lineWidth: 0.4,
    parallax: false,
    density: 5500,
    proximity: 65,
    minSpeedX:0,
    maxSpeedX:0.75,
    minSpeedY:0,
    maxSpeedY:0.75,
});
console.log("Particleground init");

// Generate whole number between min and max inclusive.
var randomInt = function(min, max, amount) {
    // Default amount to 1 if not specified
    if (amount === undefined) {amount = 1}
    var valArray = [];
    for (var i = 0; i < amount; i++) {
        var val = Math.floor(Math.random() * (max - min + 1)) + min;
        valArray.push(val);
    }
    if (valArray.length === 1) { return valArray[0] }
    else { return valArray }
};
// randomInt() testing 
/*
console.log("2 Rand between 1 and 100: " + randomInt(1,100,2).join(', '));
console.log("2 Rand between 1 and 100: " + randomInt(1,100,2).join(', '));
console.log("5 rand between 5 and 5: " + randomInt(5,5,5).join(', '));
console.log("0 rand between 1 and 10: " + randomInt(1, 10, 0).join(', '));
console.log("Default rand between 0 and 100: " + randomInt(0, 100).join(', '));
console.log("2 rand between -10 and 10: " + randomInt(-10, 10, 2).join(', '));
console.log("2 rand between -10 and 10: " + randomInt(-10, 10, 2).join(', '));
/**/
'';

// for use in the array.sort() function to properly sort numbers.
// i.e. if a - b <= 0 sort such that a is before b
//      if a - b >= 0 sort such that b is before a
//      if a - b === 0 do nothing
var numericalSort = function(a, b) {
    return a - b;
};

var factorsOf = function (num) {
    var factors = [];
    // Test all values up to half of num
    for (var i = 1; i < (num/2); i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    // Add the value to list of its factors
    factors.push(num);
    return factors;
};
// factorsOf() testing
/*
console.log("factors of 12: " + factorsOf(12));
console.log("factors of 36963: " + factorsOf(36963));
// nothing (since i is less than num in for loop)
console.log("factors of 0: " + factorsOf(0));
// nothing (since i is less than num in for loop)
console.log("factors of -1: " + factorsOf(-1));
//console.log("factors of infinity" + factorsOf(Infinity)); //Freezes code
console.log("factors of nothing" + factorsOf());
console.log("factors of 'submarine'" + factorsOf("submarine"));
/**/
'';

var randomDivisibleIntegers = function(min, max) {
    // ensure min,max have lowest val first
    var orderedParams = [min, max].sort(numericalSort);
    var val1 = randomInt(orderedParams[0], orderedParams[1]);
    var val1Factors = factorsOf(val1);
    // Random element from the array of val1 factors
    //                      random between 0 (first el) and length - 1 (last el)
    var val2 = val1Factors[ randomInt(0, (val1Factors.length - 1) ) ];
    return [val1, val2];
};
//randomDivisibleIntegers() testing
/*
console.log("randomDivisibleIntegers(1,120): " + randomDivisibleIntegers(1,120).join(", "));
console.log("randomDivisibleIntegers(1,120): " + randomDivisibleIntegers(1,120).join(", "));
console.log("randomDivisibleIntegers(1,120): " + randomDivisibleIntegers(1,120).join(", "));
// no second int returned (because factorsOf() returns no values for 0)
console.log("randomDivisibleIntegers(0,1): " + randomDivisibleIntegers(0,1).join(", "));
// no second int returned (because factorsOf() returns no values for 0)
console.log("randomDivisibleIntegers(-5,2): " + randomDivisibleIntegers(-5,2).join(", "));
*/
'';

// Object with method for each module
var modules = {
    addition: function() {
        var valArray = randomInt(0,100,2);
        return {
            firstNumber: valArray[0],
            secondNumber: valArray[1],
            answer: valArray[0] + valArray[1],
            operation: {
                name: "addition",
                code: "&plus;",
                symbol: "+"
            }
        };
    },
    subtraction: function() {
        var valArray = randomInt(0,100,2);
        // Take the array, sort it, then reverse it
        valArray.sort(numericalSort).reverse();
        return {
            firstNumber: valArray[0],
            secondNumber: valArray[1],
            answer: valArray[0] - valArray[1],
            operation: {
                name: "subtraction",
                code: "&minus;",
                symbol: "-"
            }
        };
    },
    multiplication: function() {
        var valArray = randomInt(1, 12, 2);
        return {
            firstNumber: valArray[0],
            secondNumber: valArray[1],
            answer: valArray[0] * valArray[1],
            operation: {
                name: "multiplication",
                code: "&times;",
                symbol: "×"
            }
        };
    },
    division: function() {
        var valArray = randomDivisibleIntegers(1,12);
        return {
            firstNumber: valArray[0],
            secondNumber: valArray[1],
            answer: valArray[0] / valArray[1],
            operation: {
                name: "division",
                code: "&divide;",
                symbol: "÷"
            }
        };
    },
    rand: function() {
        switch ( randomInt(1,4) ) {
            case 1:
                // Call addition module
                return modules.addition();
            case 2:
                // Call subtraction module
                return modules.subtraction();
            case 3:
                // Call multiplication module
                return modules.multiplication();
            case 4:
                // Call division module
                return modules.division();
        }
    }
};
//modules testing
/**
console.log(modules.addition());
console.log(modules.subtraction());
console.log(modules.multiplication());
console.log(modules.division());
console.log("Random: " + modules.rand());
/**/
'';

/* plus sign   (+) => &#43;              \u002b
 * minus sign  (-) => &#45;              \u002d
 * times sign  (×) => &#215; OR &times;  \u00d7
 * divide sign (÷) => &#247; OR &divide; \u00f7
 * shuffle sign (🔀) => &#128256;        \u
 */
 
// App variables
var name,
    questionType,
    questionAmount,
    progress = 0,
    streak = 0,
    // timeTaken,
    score = 0,
    questions,
    correct,
    startTime;

var hideAllMain = function () {
  $('.main-content-box').hide("slow", "swing");
  console.log("HIDE class .main-content-box");
};

var showInSet = function (setClass, itemID) {
    $('.' + setClass).hide();
    console.log("HIDE class " + setClass);
    $('#' + itemID).show();
    console.log("SHOW id " + itemID);
};

showInSet('app-state','starting-form');

//type = addition|subtraction|multiplication|division|rand
var createQuestionArray = function (type, amount) {
    //init the array
    var questionArray = [];
    //repeat as many times as amount
    for (var i = 0; i < amount; i++) {
        //and an element to the aray, being the return of a module
        //                 equivalent to modules.rand(), if type = rand
        //push the result of the module to the array, as an object
        //result is [{...}, {...} ... {...}]
        questionArray.push(modules[type]());
    }
    return questionArray; 
};

// Object for manipulating the coloured bar at the top.
var progressBar = {
    // Increment by a fraction of a total.
    // e.g. incr by 2/11, 4/11, 6/11, 8/11
    fractionIncrement: function (total, amount) {
        //default
        if (amount === undefined) {amount = 1}
        
        var val = (amount / total) * 100;
        var increment = "+=" + val.toString() + "%";
        //shift bar along by amount
        // $('.progress-bar').css('margin-left', increment);
        $('.progress-bar').animate({marginLeft: increment},200);
    },
    increment: function (amount) {
        var increment = "+=" + amount;
        // $('.progress-bar').css('margin-left', increment);
        $('.progress-bar').animate({marginLeft: increment},200);
    },
    reset: function () {
        $('.progress-bar').css('margin-left', "0");
    }
};
console.log(progressBar);

//GENERAL GOTO's
$( '.goto-menu' ).on('click', function() {
    $('#side-nav').animate({width: 'toggle'}, 250);
    console.log("TOGGLE id #side-nav");
    
    $('#side-help').animate({width: 'hide'}, 250);
    console.log("HIDE id #side-help");
});

$('.goto-home').on('click', function() {
    hideAllMain();
    $('#home').show('slow','swing');
    console.log("SHOW id #home");
});

$('.goto-app').on('click', function () {
    hideAllMain();
    $('#app').show('slow','swing');
    console.log("SHOW id #app");
});

$( '.goto-help' ).on('click', function() {
    $('#side-help').animate({width: 'toggle'}, 250);
    console.log("TOGGLE id #side-help");
    
    $('#side-nav').animate({width: 'hide'}, 250);
    console.log("HIDE id #side-nav");
});

$('.goto-settings').on('click', function() {
    hideAllMain();
    $('#settings').show('slow','swing');
    console.log("SHOW id #setttings");
});

$('.goto-author').on('click', function() {
    hideAllMain();
    $('#author').show('slow','swing');
    console.log("SHOW id #author");
});
$('.goto-exit').on('click', function() {
    hideAllMain();
    $('#exit').show('slow','swing');
    console.log("SHOW id #exit");
    exit();
});

//CHANGE HANDLERS
$('.question-val').on('change', function() {
  $('.question-val').val($(this).val());
});

//SPECIFIC BUTTONS
$('#ready-button').on('click', function() {
    showInSet('app-state', 'starting-form');
});

$('#try-again').on('click', function() {
    showInSet('app-state', 'starting-form');
});
//GAME RELEVANT FUNCTIONS

var next = function() {
    if (progress < questionAmount) {
        //enable the input
        $("#answer :input").prop("disabled", false)
        //update question
        $('#first-number').text(
            questions[progress].firstNumber
        );
        $('#second-number').text(
            questions[progress].secondNumber
        );
        $('#operation').text(
            questions[progress].operation.symbol
        );
        
        //start the timer
        startTime = Date.now();
        
        //clear the answer box and focus it
        $('input[name="answer"]').val('').focus();
        
        progress++;
        $('#progress').text(progress);
        
        
    } else {
        // i.e. game over
        
        //disable form just in case
        $("#answer :input").prop("disabled", true);
        
        finished();
    }
};

var displayResult = function (result) {
    if (result) {
        console.log("pulse green");
        $('#answer').addClass('green-pulse');
        setTimeout( function () {
            $('#answer').removeClass('green-pulse');
        }, 250);
        
        $('#first-number').empty();
        $('#second-number').empty();
        $('#operation').text("Correct!");
    } else {
        console.log("pulse red");
        $('#answer').addClass('red-pulse');
        setTimeout( function () {
            $('#answer').removeClass('red-pulse');
        }, 250);
        
        $('#first-number').empty();
        $('#second-number').empty();
        $('#operation').text("Incorrect.");
    }
};

//EFFECTIVE GAME START
$('#details').on('submit', function() {
    
    progress = 0;
    streak = 0;
    $('#streak').val(0);
    correct = 0;
    //reset score
    score = 0;
    $('#score').text(0);
    progressBar.reset();
    //re-enable input
    $("#answer :input").prop("disabled", false);
    
    
    name = $('input[name="name"]').val();
    console.log("SET name = " + name);
    questionType = $('input[name="question-type"]:checked').val();
    console.log("SET questionType = " + questionType);
    questionAmount = $('input[name="question-amount"]').val();
    console.log("SET questionAmount = " + questionAmount);
    
    questions = createQuestionArray(questionType, questionAmount);
    
    $('#question-amount').text(questionAmount);
    
    showInSet('app-state', 'game');
    next();
    //avoid page reload on submit button press
    return false;
});

//ANSWER SUMBITTED
$('#answer').on('submit', function() {
    var timeTaken = Date.now() - startTime,
        response = $('input[name="answer"]').val(),
        question = questions[progress - 1];
        
    //diasble input
    $("#answer :input").prop("disabled", true);
    
    if (response == question.answer) {
        //i.e. correct
        
        displayResult(true);
        
        //calculate and update score
        //amount of seconds under 10 seconds for answer, round up
        var bonus = timeTaken < 10000 ? Math.ceil(10 - (timeTaken / 1000)) : 0;
        score += 10 + bonus;
        $('#score').text(score);
        
        //increase the counter of correct answers
        correct++;
        
        //increase streak by one and update
        streak++;
        $('#streak').text(streak);
        
        
    } else {
        //i.e. incorrect
        
        displayResult(false);
        
        //kill the streak
        streak = 0;
        $('#streak').text(streak);
    }
    
    //increase progress bar by amount
    progressBar.fractionIncrement(questionAmount);
    
    //next question
    setTimeout(next,750);
    
    //avoid page reload on submit
    return false;
});

var finished = function() {
    //check if name is only whitespaces
    //if not, prepend ", " for correct grammar when inserting into a string
    var displayName = name.trim() == '' ? '' : (', ' + name);
    $('.name').text(displayName);
    
    
    //Set the points equal to the games score
    //You got $points points!
    $('#points').text(score);
    
    //You got $correct out of $total correct!
    $('#correct').text(correct);
    $('#total').text(questionAmount);
    
    //get percentage correct to 3 sig fig
    var percentage = (correct / questionAmount * 100).toFixed(1);
    //That's $percent % correct!
    $('#percentage').text(percentage);
    
    
    var encouragement = percentage < 50 ? "Nice try" : "Good work";
    $('.encouragement').text(encouragement);
    
    showInSet('app-state', 'finished');
    progressBar.reset();
};

//themes module for changing all the colours
/*
Relevant CSS rule
    main text color:            body {color}
    background color:           body {background-color}
    sidebar background color:   .sidebar {background-color}
    particles colour:           
    header text colour:         #logo {color}
    header shadow colour:       #logo {text-shadow}
    icon button colours:        .
    sidebar background colour:  .
    sidebar text colour:        .
    input box background colour:.
Light:
    main text color:            #424242
    background color:           #80deea
    sidebar background color:   #424242
    particles colour:           #ffffff
    header text colour:         #f48fb1
    header shadow colour:       .
    icon button colours:        .
    sidebar background colour:  .
    sidebar text colour:        .
    input box background colour:.
Dark:
    main text color:            .
    background color:           .
    sidebar background color:   .
    particles colour:           .
    header text colour:         .
    header shadow colour:       .
    icon button colours:        .
    sidebar background colour:  .
    sidebar text colour:        .
    input box background colour:.
/**/

var aesthetic = function() {
	$('body,h1').css('text-shadow','.1em 0 0 skyblue, -0.2em 0 0 pink');
	$('h1').css('color','black');
	$('document, body, div, header').css('background-color','black');
	$('body, h1, button').css('color','white');
	$('input, button').css('background-color','black');
	$('div, nav, p, h1, span').css('box-shadow', '0px 0px 25px 0px rgba(132,132,132,1)');
	//UNIVERSAL SELECTOR! IF ANYTHING BREAKS ITS BECAUSE OF THIS
	$('*').css('box-shadow', '0px 0px 25px 0px rgba(132,132,132,1)');
	$('#particles').css('z-index','100')
	               .css('background-color','transparent')
	               .css('pointer-events', 'none');
	$('input').css('color','#eee');
};

var boring = function() {
	$('body,h1').css('text-shadow','');
	$('h1').css('color','');
	$('document, body, div, header').css('background-color','');
	$('body, h1, button').css('color','');
	$('input, button').css('background-color','');
	$('div, nav, p, h1, span').css('box-shadow', '');
	$('*').css('box-shadow', '');
	$('#particles').css('z-index','')
	               .css('background-color','')
	               .css('pointer-events', '');
	$('input').css('color','');

};

var strobe = false;
$('#set-strobe').click(function(){
    if (document.getElementById('strobe').checked) {
        strobe = true;
        console.log("SET strobe true");
    } else {
        strobe = false;
        console.log("SET strobe false");
    }
});
$('#set-dark').click(function(){
    if (document.getElementById('dark').checked) {
        aesthetic();
        console.log("SET dark true");
    } else {
        boring();
        console.log("SET dark false");
    }
});
$(document)
    .mousedown( function () {
        if(strobe){aesthetic()}
    })
    .keydown( function () {
        if(strobe){aesthetic()}
    })
    .mouseup( function () {
        if(strobe){boring()}
    })
    .keyup( function () {
        if(strobe){boring()}
    })

//functino to call when the exit button is pressed
var exit = function () {
    $('.sidebar').remove();
    $('.icon-button').css('visibility','hidden');
    $('.goto-home').off();
    $('#logo-container').removeClass();
    strobe = true;
};