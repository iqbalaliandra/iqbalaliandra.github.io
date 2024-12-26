(function () {
    "use strict";
    
    let form = document.querySelectorAll(".php-email-form");
    async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
        thisForm.querySelector('.sent-message').classList.remove('d-block');
        form.reset()
    } else {
        response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
        thisForm.querySelector('.error-message').innerHTML = error;
        } else {
            thisForm.querySelector('.error-message').classList.add('d-block');
        }
    })
    }
    }).catch(error => {
        thisForm.querySelector('.error-message').classList.add('d-block');
    });
    }
    form.addEventListener("submit", handleSubmit)

})();