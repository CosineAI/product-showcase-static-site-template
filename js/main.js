const form = document.getElementById('newsletter-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').style.display = 'block';
    form.style.display = 'none';
  });
}
