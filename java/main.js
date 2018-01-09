// Define a function
function sayOuch() {
	alert ('Ouch! Stop poking me!');
}

// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');

// Assign the function to the click event
foxImage.onclick = sayOuch;