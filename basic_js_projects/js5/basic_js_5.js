// TYPEOF

var n = 6;
document.getElementById("type").innerHTML = typeof n;

// NaN & isNaN

function myNaN1() {
	document.getElementById("nan").innerHTML = 0 / 0;
}

function myNaN2() {
	document.getElementById("isnan").innerHTML = isNaN(5);
}

function myNaN3() {
	document.getElementById("isnan2").innerHTML = isNaN("Brian");
}

// DISPLAY INFINITY/-INFINITY

document.getElementById("inf").innerHTML = 2e310;

document.getElementById("ninf").innerHTML = -2e310;

// Boolean

document.getElementById("bool").innerHTML = 11 > 9;

// CONSOLE LOG

console.log(11 + 9);

// COERSCION

document.getElementById("coer").innerHTML = 9 + "11";

console.log(11 < 9);

// DOUBLE & TRIPLE EQUAL SIGNS

document.getElementById("true").innerHTML = 11 == 11;

document.getElementById("false").innerHTML = 9 == 11;

var a = "Brian";
var b = "Bryan";
var c = "Brian";
var d = 9;
var e = "9";

document.getElementById("true2").innerHTML = a === c;

document.getElementById("false2").innerHTML = a === d;

document.getElementById("false3").innerHTML = d === e;

document.getElementById("false4").innerHTML = a === b;

//  AND aka "&&", OR aka "||" & NOT aka "!"

document.getElementById("and1").innerHTML = 9 < 11 && 11 > 9;

document.getElementById("and2").innerHTML = 9 > 11 && 11 > 9;

document.getElementById("or1").innerHTML = 9 < 11 || 11 > 9;

document.getElementById("or2").innerHTML = 9 > 11 || 11 < 9;

document.getElementById("not1").innerHTML = !(9 < 11);

document.getElementById("not2").innerHTML = !(9 > 11);
