const scriptURL = 'https://script.google.com/macros/s/AKfycbyGJBck6PfpAmELh1w7KNzl_nLtIl-jMM4Jbs2aaVmTAkWExOocG6AAt0O9tDftcVsIHw/exec'; // Replace with your deployed script URL
const form = document.forms['registrationForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (response.ok) {
                alert('Anmeldung erfolgreich!');
                form.reset(); // Reset the form after successful submission
            } else {
                alert('Es gab ein Problem mit der Anmeldung.');
            }
        })
        .catch(error => console.error('Fehler!', error.message));
});

document.getElementById('togglePrivacy').addEventListener('click', function() {
    var privacyPolicy = document.getElementById('privacyPolicy');
    if (privacyPolicy.style.display === 'none' || privacyPolicy.style.display === '') {
        privacyPolicy.style.display = 'block';
    } else {
        privacyPolicy.style.display = 'none';
    }
});


