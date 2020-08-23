// CONCAT STRINGS

function sentence() {
	var p1 = "Please tell me ";
	var p2 = "why you would ";
	var p3 = "need to ";
	var p4 = "do this.";
	var whole = p1.concat(p2, p3, p4);
	document.getElementById("concat").innerHTML = whole;
}

// SLICE METHOD

function slice1() {
	var sentence = "The world's a hard place Danny...";
	var chunk = sentence.slice(25, 33);
	document.getElementById("slice").innerHTML = chunk;
}

// TOUPPERCASE METHOD

function upper1() {
	var low = "stop";
	var up = low.toUpperCase();
	document.getElementById("upper").innerHTML = up;
}

// SEARCH METHOD

function search1() {
	var sent = "Where is the fourth word?";
	var search = sent.search("fourth");
	document.getElementById("search").innerHTML = search;
}

// NUMBER TO STRING

function tostring1() {
	var x = 42;
	document.getElementById("string").innerHTML = x.toString();
}

// TO PERCISION

function precision1() {
	var y = 3.14159265359;
	document.getElementById("precision").innerHTML = y.toPrecision(3);
}

// TOFIXED METHOD

function fixed1() {
	var z = 3.14159265359;
	document.getElementById("fixed1").innerHTML = z.toFixed();
}

function fixed2() {
	var z = Math.PI;
	document.getElementById("fixed2").innerHTML = z.toFixed(50);
}

// VALUEOF METHOD what is the real world use???

function value1() {
	var text = "Same text.";
	document.getElementById("value").innerHTML = text.valueOf();
}
