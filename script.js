const scriptURL = 'https://script.google.com/macros/s/AKfycbxFhG_m2_IwH-K3MmTgoibemhPnJJydJqeYtQM_B0z0gP5lXbd8peO9n7xHgc3IQY2ysA/exec'; // Replace with your deployed script URL
const form = document.forms['registrationForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (response.ok) {
                displayMessage('Anmeldung erfolgreich!', 'success');
                form.reset(); // Reset the form after successful submission
            } else {
                displayMessage('Es gab ein Problem mit der Anmeldung.', 'error');
            }
        })
        .catch(error => displayMessage('Fehler! ' + error.message, 'error'));
});

document.getElementById('togglePrivacy').addEventListener('click', function() {
    var privacyPolicy = document.getElementById('privacyPolicy');
    if (privacyPolicy.style.display === 'none' || privacyPolicy.style.display === '') {
        privacyPolicy.style.display = 'block';
    } else {
        privacyPolicy.style.display = 'none';
    }
});

// Event-Listener für den Link zur Datenschutzerklärung
document.querySelector('a[href="#datenschutzerklaerung"]').addEventListener('click', function(e) {
    e.preventDefault();
    var privacyPolicy = document.getElementById('privacyPolicy');
    if (privacyPolicy.style.display === 'none' || privacyPolicy.style.display === '') {
        privacyPolicy.style.display = 'block';
    } else {
        privacyPolicy.style.display = 'none';
    }
    // Scrollen zur Datenschutzerklärung
    privacyPolicy.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('toggleImpressum').addEventListener('click', function() {
    var impressum = document.getElementById('impressum');
    if (impressum.style.display === 'none' || impressum.style.display === '') {
        impressum.style.display = 'block';
    } else {
        impressum.style.display = 'none';
    }
});

function displayMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${type}`;
    messageContainer.innerText = message;
    document.body.appendChild(messageContainer);
    setTimeout(() => {
        messageContainer.remove();
    }, 5000);
}


