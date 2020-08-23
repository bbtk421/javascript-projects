// ADDITION

function myFun1() {
	var add = 9 + 11;
	document.getElementById("math").innerHTML = "9 + 11 = " + add;
}

// SUBTRACTION

function myFun2() {
	var sub = 20 - 11;
	document.getElementById("math2").innerHTML = "20 - 11 = " + sub;
}

// MULTIPLY

function myFun3() {
	var mult = 9 * 11;
	document.getElementById("math3").innerHTML = "9 * 11 = " + mult;
}

// DIVIDE

function myFun4() {
	var div = 99 / 11;
	document.getElementById("math4").innerHTML = "99 / 11 = " + div;
}

// ALL THE THINGS

function myFun5() {
	var all = 9 + 11 - (11 * 11) / 11;
	document.getElementById("math5").innerHTML =
		"9 plus 11, minus 11, times 11, divided by, you guessed it... 11 equals " +
		all;
}

// REMAINDERS

function myFun6() {
	var mod = 11 % 9;
	document.getElementById("math6").innerHTML =
		"When you divide 11 by 9 you have a remainder of: " + mod;
}

// NEGATION OPERATOR

function myFun7() {
	var neg = 911;
	document.getElementById("math7").innerHTML =
		"The negative of 911 is: " + -neg;
}

// INCREMENT/DECREMENT OPERATORS

function myFun8() {
	var inc = 8;
	inc++;
	document.getElementById("math8").innerHTML = "8 inremented is: " + inc;
}

function myFun9() {
	var dec = 12;
	dec--;
	document.getElementById("math9").innerHTML = "12 decemented is: " + dec;
}

// MATH FUNCTIONS/OBJECTS

function myFun10() {
	var rand = Math.random() * 10;
	document.getElementById("math10").innerHTML = "Between 0 and 10 is: " + rand;
}

function myFun11() {
	var pi = Math.PI;
	document.getElementById("math11").innerHTML =
		"Pi to this many digits is:  " + pi;
}
