// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Offsetting header height gracefully
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Search button alert
document.querySelector('.search-bar button').addEventListener('click', function () {
  const input = document.querySelector('.search-bar input').value.trim();
  if (input) {
    alert('Searching for trips to: ' + input);
  } else {
    alert('Please enter a destination to search.');
  }
});

// Book Now buttons
document.querySelectorAll('.package .btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const pkgName = this.closest('.package').querySelector('h3').textContent;
    alert('You selected the ' + pkgName + ' package! Redirecting to booking...');
  });
});

// Contact form submit
document.querySelector('.contact-form .btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent unexpected form submissions if wrapped down the line
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  let allFilled = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.style.borderColor = '#ef4444'; // Visual alert for missing fields
    } else {
      input.style.borderColor = ''; // Reset
    }
  });

  if (allFilled) {
    alert('Thank you! Your message has been sent. We will get back to you soon.');
    inputs.forEach(input => input.value = '');
  } else {
    alert('Please fill in all highlighted fields before sending.');
  }
});