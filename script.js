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

  if (name == "") {
    alert("Name can't be blank");
    return false;
  }

  // Capitalize the name
  var capitalizedName = capitalizeFirstLetter(name);

  // Assign the capitalized name back to the input field
  nameInput.value = capitalizedName;

  // Validate email
  var emailInput = document.getElementById('email');
  var email = emailInput.value.trim();

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate phone number
  var phoneInput = document.getElementById('phone');
  var phone = phoneInput.value.trim();

  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  // Additional validation for other fields can be added here if needed.

  // If all validations pass, show the success popup
  showSuccessPopup();

  // Prevent the default form submission
  return false;
}

function validateEmail(email) {
  // Create a regular expression for basic email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test if the provided email matches the regular expression
  var isValidEmail = regex.test(email);

  // Return the result of the test (true if valid, false otherwise)
  return isValidEmail;
}


function validatePhone(phone) {
  // Remove any non-digit characters
  var digitsOnly = phone.replace(/\D/g, "");

  // Check if the cleaned phone number has at least 8 digits
  if (digitsOnly.length >= 8) {
    return true; // Valid phone number
  } else {
    return false; // Invalid phone number
  }
}

function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

function showSuccessPopup() {
  var popupContainer = document.querySelector('.popupcontainer');
  popupContainer.style.display = 'block';

  // Close the popup when the "OK" button is clicked
  var okBtn = document.getElementById('okBtn');
  okBtn.addEventListener('click', function () {
    popupContainer.style.display = 'none';
  });

  // Close the popup when the close button is clicked
  var closeBtn = document.querySelector('.closebtn');
  closeBtn.addEventListener('click', function () {
    popupContainer.style.display = 'none';
  });
}