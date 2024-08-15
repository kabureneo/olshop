document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const phone = document.getElementById('phone').value;
    const signupPassword = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (signupPassword !== confirmPassword) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
    } else {
        alert(`Nama Lengkap: ${fullname}\nEmail: ${signupEmail}\nNomor HP: ${phone}\nKata Sandi: ${signupPassword}`);
        // Lakukan validasi dan proses pendaftaran di sini.
    }
});
