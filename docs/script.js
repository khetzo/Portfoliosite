// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('contactButton');
  const popup = document.getElementById('popup');
  const profileViews = 3;
  const postImpressions = 0;
  const searchAppearances = 1;

  button.addEventListener('click', function () {
    // Show the popup
    popup.style.display = 'flex';

    // Delay the actions by 2 seconds
    setTimeout(function () {
      // Phone call
      window.location.href = 'tel:+27767786789';

      // WhatsApp message
      window.location.href = 'https://wa.me/27767786789';
      popup.style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
  });

  // Hide the popup when clicking outside
  window.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });




  document.querySelectorAll(".value")[0].textContent = `${profileViews} profile views`;
  document.querySelectorAll(".value")[1].textContent = `${postImpressions} post impressions`;
  document.querySelectorAll(".value")[2].textContent = `${searchAppearances} search appearance`;
});
