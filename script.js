function checkPassword() {
  const correctPassword = "JPSF@mily";
  const passwordInput = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");

  if (passwordInput === correctPassword) {
    document.getElementById("password-protect").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
}
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would typically send the form data to your server
  // For demonstration, we'll just simulate a successful submission
  console.log("Form submitted:", { name, email, message });
  
  // Display a success message
  const responseDiv = document.getElementById("form-response");
  responseDiv.textContent = "Thank you, " + name + "! Your message has been sent.";
  responseDiv.style.display = "block";

  // Clear the form fields
  document.getElementById("contact-form").reset();
  
  return false; // Prevent any default form action
}
