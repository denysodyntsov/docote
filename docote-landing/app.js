const form = document.getElementById('earlyAccessForm');
const message = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.textContent = '';
    message.className = 'form-message';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length < 2) {
      message.textContent = 'Please enter your name.';
      message.classList.add('error');
      return;
    }

    if (!emailRegex.test(email)) {
      message.textContent = 'Please enter a valid email address.';
      message.classList.add('error');
      return;
    }

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }
      message.textContent = data.message;
      message.classList.add('success');
      if (!data.duplicate) {
        form.reset();
      }
    } catch (error) {
      message.textContent = error.message || 'Unable to send request.';
      message.classList.add('error');
    }
  });
}
