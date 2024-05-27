const scriptURL = 'https://script.google.com/macros/s/AKfycbzhWYuxuzlu76Cv_fz9zk48FLQXx7L9_wAx0xqSj46Btg-QqylWmYYQ-zG6QZu6RcnqSw/exec';
const form = document.forms['registrationForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const preferredPools = formData.getAll('preferredPool[]');
    formData.delete('preferredPool[]');
    formData.append('preferredPool', preferredPools.join(', '));

    fetch(scriptURL, { method: 'POST', body: formData})
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

document.querySelector('a[href="#privacyPolicy"]').addEventListener('click', function(e) {
    e.preventDefault();
    var privacyPolicy = document.getElementById('privacyPolicy');
    if (privacyPolicy.style.display === 'none' || privacyPolicy.style.display === '') {
        privacyPolicy.style.display = 'block';
    } else {
        privacyPolicy.style.display = 'none';
    }
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



