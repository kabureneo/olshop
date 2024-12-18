//meambil data dari html
const container = document.querySelector('.container');

// Delegasi event pada container
container.addEventListener('click', (event) => {
    // Periksa apakah elemen yang diklik adalah div dengan class clickable-div
    if (event.target.classList.contains('wrapper')) {
        // Ambil id checkbox dari atribut data-target
        const targetCheckboxId = event.target.getAttribute('data-target');
        const checkbox = document.getElementById(targetCheckboxId);

        // Toggle checkbox jika ditemukan
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
        }
    }
});