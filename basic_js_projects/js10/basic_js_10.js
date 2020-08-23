// COUNTDOWN LOOP

function loop1() {
	var num = "";
	var x = 10;
	while (x > 0) {
		num += "<br>" + x;
		x--;
	}
	document.getElementById("loop").innerHTML = num;
}

// STRING LENGTH PROPERTY

function length() {
	var str = "Howdy Planet!";
	var l = str.length;
	document.getElementById("length").innerHTML = l;
}

// FOR LOOP

function loop2() {
	var inst = [
		"French Horn",
		"Oboe",
		"Alto Saxophone",
		"Cello",
		"Bass Clarinet",
		"Vibrophone",
	];
	var list = "";
	var i;
	for (i = 0; i < inst.length; i++) {
		list += inst[i] + "<br>";
	}
	document.getElementById("loop2").innerHTML = list;
}

// ARRAYS AS OBJECTS

function array1() {
	var naturepic = [];
	naturepic[1] = "Halfdome - Yosemite";
	naturepic[2] = "Foggy Forest";
	naturepic[3] = "Aurora Borealis";
	document.getElementById("array1").innerHTML =
		"This is a picture of " + naturepic[3] + ".";
}

// CONSTANTS

function const1() {
	const car = {
		make: "Toyota",
		model: "Prius",
		year: "2013",
		color: "Navy Blue",
	};
	car.color = "Charcoal Grey";
	car.trim = "Four";
	document.getElementById("const1").innerHTML =
		"Brian drives a " +
		car.model +
		" " +
		car.trim +
		" and it's " +
		car.color +
		".";
}

// LET/OBJECT

let pc = {
	brand: "Dell ",
	model: "XPS 13 ",
	cpu: "10th Gen i5 ",
	ram: "16gb ",
	description: function () {
		return "My laptop is a " + this.brand + this.model + "with a " + this.cpu + "and " + this.ram + "of ram.";
	}
};
document.getElementById("laptop").innerHTML = pc.description();

// BREAK & CONTINUE STATEMENTS

function break1() {
	var text = "";
	var i = 0;
	while (i < 5) {
		text += "<br>The number is " + i;
		i++;
		if (i === 3) {
			break;
		}
	}
	document.getElementById("break1").innerHTML = text;
}

function cont1() {
	var text = "";
	var i = 0;
	for (i = 0; i < 10; i++) {
		if (i === 8) { continue; }
		text += "The number is " + i + "<br>";
	}
	document.getElementById("cont1").innerHTML = text;
}