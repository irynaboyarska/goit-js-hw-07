const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();

    if (email === "" || password === "") {
        alert(`All form fields must be filled in`);
        return;
    }

    const obj = {
        email,
        password,
    }
    console.log(obj);
    
    form.reset();
})
