document.addEventListener('DOMContentLoaded', function () {
  // Show the pop-up after a delay
  setTimeout(function () {
    document.getElementById('popup-container').style.display = 'block';
  }, 1000); // Adjust the delay (in milliseconds) as needed

  // Close the pop-up when the close button is clicked
  document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'none';
  });

  // Toggle the mobile menu
  document.getElementById('menu-btn').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'block';
    }
  });
});
