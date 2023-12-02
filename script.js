// Wait for the HTML document to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {

  // Show the pop-up after a delay of 1000 milliseconds (1 second)
  setTimeout(function () {
    // Find the element with the ID 'popup-container' and set its display style to 'block'
    document.getElementById('popup-container').style.display = 'block';
  }, 1000); // Adjust the delay (in milliseconds) as needed

  // Add a click event listener to the element with the ID 'close-popup'
  document.getElementById('close-popup').addEventListener('click', function () {
    // Find the element with the ID 'popup-container' and set its display style to 'none'
    // This will hide the pop-up when the close button is clicked
    document.getElementById('popup-container').style.display = 'none';
  });

});


// Wait for the HTML document to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {

  // Get references to the menu button and the navbar elements
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.header .navbar');

  // Add a click event listener to the menu button
  menuBtn.addEventListener('click', function () {
      // Toggle the 'show' class on the navbar, effectively showing or hiding it
      navbar.classList.toggle('show');
  });

  // Check if the window width is greater than 768 pixels on initial load
  if (window.innerWidth > 768) {
      // If so, remove the 'show' class from the navbar (hide it)
      navbar.classList.remove('show');
  }

  // Add a resize event listener to the window
  window.addEventListener('resize', function () {
      // Check if the window width is greater than 768 pixels
      if (window.innerWidth > 768) {
          // If so, remove the 'show' class from the navbar (hide it)
          navbar.classList.remove('show');
      }
  });

});




// Function to validate the form
function validateForm() {
  // Get the input element for the name, its value, and the error message element
  var nameInput = document.getElementById('name');
  var name = nameInput.value.trim();
  var nameError = document.getElementById('nameError');

  // Check if the name is blank
  if (name == "") {
    // If so, display an error message and prevent form submission
    nameError.textContent = "Name can't be blank";
    return false;
  }

  // Capitalize the name
  var capitalizedName = capitalizeFirstLetter(name);

  // Assign the capitalized name back to the input field
  nameInput.value = capitalizedName;
  nameError.textContent = ""; // Clear the error

  // Get the input element for the email, its value, and the error message element
  var emailInput = document.getElementById('email');
  var email = emailInput.value.trim();
  var emailError = document.getElementById('emailError');

  // Validate the email using a helper function
  if (!validateEmail(email)) {
    // If not valid, display an error message and prevent form submission
    emailError.textContent = "Please enter a valid email address";
    return false;
  }
  emailError.textContent = ""; // Clear the error

  // Get the input element for the phone, its value, and the error message element
  var phoneInput = document.getElementById('phone');
  var phone = phoneInput.value.trim();
  var phoneError = document.getElementById('phoneError');

  // Validate the phone number using a helper function
  if (!validatePhone(phone)) {
    // If not valid, display an error message and prevent form submission
    phoneError.textContent = "Please enter a valid phone number";
    return false;
  }
  phoneError.textContent = ""; // Clear the error

  // If all validations pass, allow the form submission
  return true;
}

// Function to validate an email using a regular expression
function validateEmail(email) {
  // Create a regular expression for basic email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test if the email matches the regular expression
  return regex.test(email);
}

// Function to validate a phone number
function validatePhone(phone) {
  // Remove any non-digit characters from the phone number
  var digitsOnly = phone.replace(/\D/g, "");

  // Check if the cleaned phone number has at least 8 digits
  return digitsOnly.length >= 8;
}

// Function to capitalize the first letter of each word in a string
function capitalizeFirstLetter(str) {
  // Use a regular expression to match the first letter of each word and convert it to uppercase
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

// Event listener for the form submission button
document.getElementById("submitBtn").addEventListener("click", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form using the validateForm function
  if (validateForm()) {
    // If the form is valid

    // Display a success message or redirect to a thank-you page
    alert("Your details have been successfully submitted. Thanks!");
  }
});
