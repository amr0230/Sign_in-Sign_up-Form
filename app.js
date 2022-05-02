// Define 3 variables by calling them FROM HTML File Using DOM
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// Function When Click on Sign Up Button
signUpButton.addEventListener('click', function () {
	container.classList.add("right-panel-active");
});
// Function When Click on Sign In Button
signInButton.addEventListener('click', function () {
	container.classList.remove("right-panel-active");
});