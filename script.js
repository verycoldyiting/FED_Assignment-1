document.addEventListener('DOMContentLoaded', function () {
  // Show the pop-up after a delay
  setTimeout(function () {
    document.getElementById('popup-container').style.display = 'block';
  }, 1000); // Adjust the delay (in milliseconds) as needed

  // Close the pop-up when the close button is clicked
  document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'none';
  });
})


// Toggle Menu/NavBar Header Dropdown
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.header .navbar');

  menuBtn.addEventListener('click', function () {
      navbar.classList.toggle('show');
  });

  if (window.innerWidth > 768) {
      navbar.classList.remove('show');
  }

  window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
          navbar.classList.remove('show');
      }
  });
});



function validateForm() {
  var nameInput = document.getElementById('name');
  var name = nameInput.value.trim();
  var nameError = document.getElementById('nameError');

  if (name == "") {
    nameError.textContent = "Name can't be blank";
    return false;
  }

  // Capitalize the name
  var capitalizedName = capitalizeFirstLetter(name);

  // Assign the capitalized name back to the input field
  nameInput.value = capitalizedName;
  nameError.textContent = ""; // Clear the error

  // Validate email
  var emailInput = document.getElementById('email');
  var email = emailInput.value.trim();
  var emailError = document.getElementById('emailError');

  if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  }
  emailError.textContent = ""; // Clear the error

  // Validate phone number
  var phoneInput = document.getElementById('phone');
  var phone = phoneInput.value.trim();
  var phoneError = document.getElementById('phoneError');

  if (!validatePhone(phone)) {
    phoneError.textContent = "Please enter a valid phone number";
    return false;
  }
  phoneError.textContent = ""; // Clear the error


  // Allow the form submission
  return true;
}

function validateEmail(email) {
  // Create a regular expression for basic email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  // Remove any non-digit characters
  var digitsOnly = phone.replace(/\D/g, "");

  // Check if the cleaned phone number has at least 8 digits
  return digitsOnly.length >= 8;
}

function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}
