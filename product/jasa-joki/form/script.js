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

    // if (event.target.classList.contains('wrapper')) {
    //     // Ambil id checkbox dari atribut data-target
    //     const targetCheckboxId = event.target.getAttribute('data-target');
    //     const checkbox = document.getElementById(targetCheckboxId);

    //     // Toggle checkbox jika ditemukan
    //     if (checkbox) {
    //         checkbox.checked = !checkbox.checked;
    //     }
    // }
});


//bagian kategori
// Cache elemen yang sering digunakan
const kategoriElements = document.querySelectorAll('.kategori');
const kontenDivs = {}; // Objek cache untuk div konten
let aktifDiv = null;  // Referensi div aktif saat ini

// Inisialisasi cache untuk konten-div
document.querySelectorAll('.konten-div').forEach(div => {
    kontenDivs[div.id] = div;
});

// Fungsi untuk menangani klik kategori
kategoriElements.forEach(kategori => {
    kategori.addEventListener('click', () => {
        const targetId = kategori.getAttribute('data-kategori');

        // Jika div aktif sama dengan yang diklik, tidak melakukan apa-apa
        if (aktifDiv && aktifDiv.id === targetId) return;

        // Sembunyikan div aktif sebelumnya (jika ada)
        if (aktifDiv) {
            aktifDiv.classList.remove('aktif');
        }

        // Tampilkan div baru dan perbarui referensi aktif
        aktifDiv = kontenDivs[targetId];
        if (aktifDiv) {
            aktifDiv.classList.add('aktif');
        }
    });
});


// link wa
const inputText1 = document.getElementById('inputText1');
const inputText2 = document.getElementById('inputText2');
const encodeButton = document.getElementById('encodeButton');

encodeButton.addEventListener('click', () => {
    const text1 = inputText1.value.trim(); // Ambil nilai dari input pertama
    const text2 = inputText2.value.trim(); // Ambil nilai dari input kedua

    if (text1 === "" || text2 === "") {
        outputLink.textContent = "Harap masukkan pesan untuk kedua input!";
        outputLink.style.color = "red";
        return;
    }

    // Gabungkan kedua teks dan encode menjadi URL yang aman
    const combinedText = `${text1}\n${text2}`; // Menambahkan newline antara pesan
    const encodedText = encodeURIComponent(combinedText);

    // Format link WhatsApp
    const waLink = `https://wa.me/?text=${encodedText}`;
});