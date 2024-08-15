document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Email atau Nomor HP: ${email}\nKata Sandi: ${password}`);
        // Lakukan validasi dan login di sini.
    } else {
        alert('Harap isi semua kolom!');
    }
});
