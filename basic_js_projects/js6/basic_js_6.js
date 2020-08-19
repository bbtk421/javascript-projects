// TERNARY OPERATORS

function ride1() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = Height < 52 ? "You are too damned short" : "You're tall enough";
	document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}

function vote1() {
	var age, canvote;
	age = document.getElementById("age").value;
	canvote = age < 18 ? "To big of a babee" : "...I guess you can register";
	document.getElementById("vote").innerHTML = canvote + " to vote.";
}

// KEYWORD & CONSTRUCTORS

function vehicle(Make, Model, Year, Color) {
	this.vehicle_make = Make;
	this.vehicle_model = Model;
	this.vehicle_year = Year;
	this.vehicle_color = Color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White & Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFun1() {
	document.getElementById("keycon").innerHTML =
		"Erik drives a " +
		Erik.vehicle_color +
		"-colored " +
		Erik.vehicle_model +
		" manufactured in " +
		Erik.vehicle_year;
}

function pc(Make, Model, CPU) {
	this.pc_make = Make;
	this.pc_model = Model;
	this.pc_cpu = CPU;
}

var Brian = new pc("Dell", "XPS 13", "10th Gen i5");
var Jenny = new pc("Apple", "Macbook Air", "10th Gen i7");
function myFun2() {
	document.getElementById("newthis").innerHTML =
		"Brian has a " +
		Brian.pc_make +
		", " +
		Brian.pc_model +
		" with a " +
		Brian.pc_cpu +
		" processor.";
}

function count1() {
	document.getElementById("counting").innerHTML = count2();
	function count2() {
		var start = 1;
		function addone() {
			start += 1;
		}
		addone();
		return start;
	}
}
