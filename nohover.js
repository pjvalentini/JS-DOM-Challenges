//Creating a mouseover feature by isolating the ID "yellatyou" and event binding.

document.getElementById("yellatyou").addEventListener("mouseover", onClick);

function onClick(event) {
	alert("Hey, I told you not to hover over me!");
}
