const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function saveUsername(event) {
	event.preventDefault(); // Prevent the form from submitting
	var username = document.getElementById("signin-username").value;
	if (username === "Admin") {
	  window.location.href = "admin.html"; // Redirect to admin.html
	} 
	else if(username=="Client"){
		window.location.href = "index.html";
	}
	else if(username=="Banker"){
		window.location.href = "bankerservices.html";
	}
	else {
	  // Perform other actions if the username is not "Admin"
	  alert("Invalid username. Please try again.");
	}
  }
  
  
