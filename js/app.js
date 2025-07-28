// Navigation toggle
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous error messages
        clearErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const confInput = document.getElementById('confirmationNumber');

        let valid = true;

        // Name validation
        if (name.length === 0) {
            triggerBlink('nameError', 'Name is required.');
            valid = false;
        }

        // Email validation
        if (email.length === 0) {
            triggerBlink('emailError', 'Email is required.');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            triggerBlink('emailError', 'Enter a valid email address.');
            valid = false;
        }

        // Phone number validation: exactly 10 digits
        if (!/^\d{10}$/.test(phone)) {
            triggerBlink('phoneError', 'Phone number must be exactly 10 digits.');
            valid = false;
        }

        if (valid) {
            // Generate confirmation number and set it in hidden input
            const confirmationCode = "CONF" + Math.floor(100000 + Math.random() * 900000);
            confInput.value = confirmationCode;

            // Submit the form programmatically
            form.submit();
        }
    });
});

// Animate error messages
function triggerBlink(id, message) {
    const element = document.getElementById(id);
    element.textContent = message;

    element.classList.remove('blink');  // Reset animation
    void element.offsetWidth;           // Trigger reflow
    element.classList.add('blink');     // Reapply animation
}

// Clear errors before new validation
function clearErrors() {
    ['nameError', 'emailError', 'phoneError'].forEach(id => {
        const el = document.getElementById(id);
        el.textContent = '';
        el.classList.remove('blink');
    });
}
