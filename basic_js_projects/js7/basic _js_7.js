// GLOBAL VS LOCAL VARS
// WITH CONSOLE FOR DEBUGGING THE "ERROR"

function times1() {
	var x = 20;
	document.getElementById("answer1").innerHTML = 5 * x;
	console.log(5 * x);
}

var y = 10;
function times2() {
	document.getElementById("answer2").innerHTML = x * y;
	console.log(y * x);
}

// IF STATEMENTS

function date1() {
	if (new Date().getHours() < 18) {
		document.getElementById("greet").innerHTML = "How are you today?";
	}
	if (new date().getHours() > 18) {
		document.getElementById("greet").innerHTML = "How was your day?";
	}
}

// ELSE STATEMENTS

function voting() {
	ballot = document.getElementById("ballot").value;
	if (ballot == "Biden") {
		vote = "Correct";
	}
	else {
		vote = "Try again...";
	}
	document.getElementById("voted").innerHTML = vote;
}

// IF ELSE STATEMENTS

function time() {
	var time = new Date().getHours();
	var reply;
	if (time < 12 == time > 0) {
		reply = "It's morning time.";
	}
	else if (time > 12 == time < 18) {
		reply = "It's the afternoon.";
	}
	else {
		reply = "It's the evening."
	}
	document.getElementById("timeofday").innerHTML = reply;
}