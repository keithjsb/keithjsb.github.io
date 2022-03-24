function placeholderFunction() {
	document.getElementById("placeholder").innerHTML = "Another placeholder here.";
}

$(document).ready(function () {
	$(".txtYear").text(getYear());
	$("#resolution1").text("Width: " + screen.width + ", Length: " + screen.height);
	$("#resolution2").text("Width: " + (screen.width * 0.7) + ", Length: " + (screen.height * 0.7));
	console.log(getYear());
});

function getDate(){
	return new Date();
}

function getYear(){
	return getDate().getFullYear();
}
