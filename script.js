function checkPassword() {
  const correctPassword = "JPSF@mily";  // Updated password
  const passwordInput = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");
  
  if (passwordInput === correctPassword) {
    document.getElementById("password-protect").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
}
