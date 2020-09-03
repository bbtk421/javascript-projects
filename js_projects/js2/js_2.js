// FORM VALIDATION

function validate() {
    var f = document.forms["form1"]["fname"].value;
    if (f == "") {
        alert("First name required.");
        return false;
    }
    var l = document.forms["form1"]["lname"].value;
    if (l == "") {
        alert("Last name required");
        return false;
    }
    var e = document.forms["form1"]["email"].value;
    if (e == "") {
        alert("Email required.");
        return false;
    }
    var b = document.forms["form1"]["dob"].value;
    if (b == "") {
        alert("Birthdate required.");
        return false;
    }
    var t = document.forms["form1"]["phone"].value; // ADDED
    if (t == "") {
        alert("Phone number required.");
        return false;
    }
}