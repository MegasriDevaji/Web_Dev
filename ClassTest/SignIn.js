function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;    
    const errorDiv = document.getElementById('error');
    errorDiv.innerHTML = '';
    let valid = true;

    if (username.length < 5) {
        errorDiv.innerHTML += '<p>Username must be at least 5 characters long.</p>';
        valid = false;
    }   
    if (password.length < 8) {
        errorDiv.innerHTML += '<p>Password must be at least 8 characters long.</p>';
        valid = false;
    }
    if (valid) {
        alert('Form submitted successfully!');
        window.location.reload();   
    }
    return valid;
}
function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error').innerHTML = '';
}
