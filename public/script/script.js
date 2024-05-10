document.addEventListener("DOMContentLoaded", function() {
  // Query all links
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior

          var targetId = this.getAttribute("href"); // Get the href attribute
          var targetElement = document.querySelector(targetId); // Select the target element

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth', // Smooth scroll
                  block: 'start'     // Align to the top
              });
          }
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const typedText = document.querySelector('.typed-text');
  const cursor = document.querySelector('.cursor');
  const textArray = ["Maris"];
  let typingSpeed = 200;
  let deletingSpeed = 100;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < textArray[textArrayIndex].length) {
          if (!cursor.classList.contains('typing')) cursor.classList.add('typing');
          typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingSpeed);
      } else {
          cursor.classList.remove('typing');
      }
  }
  type();

  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('.header-nav ul');
  navToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
  });
});

document.querySelector('.portfolio-button').addEventListener('click', function() {
  window.location.href = 'http://your-portfolio-url.com'; // Redirect to your portfolio
});
