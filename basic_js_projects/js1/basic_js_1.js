// SETTING & USING VARS & .FONTCOLOR METHOD

var S = "This is a string, baybee.";
var H = "Y'all just gonna stop by without saying howdy?";
var C = ' Can\'t use "quotes".' + " Oh, but I can." + " Nevermind...";
var Fam = "The Bakers",
	Dad = "Dennis",
	Mom = "Marlene",
	Sis = "Shellie",
	Bro = "Denny";
var Fam = Fam.fontcolor("navyblue"),
	Dad = Dad.fontcolor("green"),
	Mom = Mom.fontcolor("red"),
	Sis = Sis.fontcolor("brown"),
	Bro = Bro.fontcolor("orange");

// ALERT, now a window.alert, add doc.write, using variables instead of text,
//concatenate to vars

window.alert(H);
document.write(S + C);
document.write(Fam);
document.write(Mom);
document.write(Sis);
document.write(Dad);
document.write(Bro);
