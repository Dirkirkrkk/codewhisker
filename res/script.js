function addRecommendation() {
	// Get text from textarea
	let recommendation = document.getElementById("message");
	
	// Ensure user entered a value
	if (recommendation.value != null && recommendation.value.trim() != "") {
		var element = document.createElement("section");
		element.innerHTML = recommendation.value;
		document.getElementById("reclist").appendChild(element); 

		// Reset the value of the textarea
		recommendation.value = "";
		
		// Show user message
		showPopup(true);
	} else {
		alert("Please enter a text 😼")
	}
	
	return false;
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
