
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


