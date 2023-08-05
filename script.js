const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding 
// regular expressions
requirements = [
	{regex: /.{8,}/, index: 0}, // Minimum 8 characters
	{regex: /[0-9]/, index: 1}, // At least 1 numcber
	{regex: /[a-z]/, index: 2},	// At least 1 lowercase letter
	{regex: /[^A-Za-z0-9]/, index: 3}, // At least 1 special symbol
	{regex: /[A-Z]/, index: 4} // At least 1 uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
	requirements.forEach(item => {
		// Check if the password matches the requirements
		const isValid = item.regex.test(e.target.value);
		const requirementItem = requirementList[item.index]; 

		// Updating icon of requirement item if requirement matched or not
		if (isValid) {
			requirementItem.firstElementChild.className = "fa-solid fa-check";
			requirementItem.classList.add("valid");
		}else {
			requirementItem.firstElementChild.className = "fa-solid fa-circle";
			requirementItem.classList.remove("valid");
		}
	});
});

eyeIcon.addEventListener("click", () => {
	// Toggle the password input between "password" and "text"
	passwordInput.type = passwordInput.type === "password" ? "text" : "password";

	// Update the fa-eye icon based on the password input type
	eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});