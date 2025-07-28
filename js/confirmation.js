document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const conf = params.get("conf");

    if (!conf) {
        document.getElementById('errorMsg').textContent = "Error: No confirmation number provided.";
        document.getElementById('confNum').textContent = "N/A";
        document.getElementById('name').textContent = "N/A";
        document.getElementById('email').textContent = "N/A";
        document.getElementById('phone').textContent = "N/A";
    } else {
        fetch(`/api/confirmation?conf=${conf}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then(data => {
                document.getElementById('confNum').textContent = data.confirmationNumber;
                document.getElementById('name').textContent = data.name;
                document.getElementById('email').textContent = data.email;
                document.getElementById('phone').textContent = data.phone;
            })
            .catch(err => {
                document.getElementById('errorMsg').textContent = "Error: Confirmation not found.";
                document.getElementById('confNum').textContent = "N/A";
                document.getElementById('name').textContent = "N/A";
                document.getElementById('email').textContent = "N/A";
                document.getElementById('phone').textContent = "N/A";
            });
    }
});
