// DATA ATTRIBUTES

function shipCapt(capt) {
    var captType = capt.getAttribute("data-capt-type");
    alert(captType + " is the Captain of the " + capt.innerHTML + ".");
}
