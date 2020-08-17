// DICTIONARY

function myDict1() {
	var Bicycle = {
		Type: "Road Bike",
		Color: "Navy Blue",
		Brand: "Custom",
		Gears: "7x2",
		Sound: "RING RING!",
	};
	delete Bicycle.Sound;
	document.getElementById("dict").innerHTML = Bicycle.Sound;
}
