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

//bagian isi form
const checkboxes = document.querySelectorAll('.single-checkbox');
const container = document.querySelector('.container');
const formContainer = document.querySelector('.konten-divv');

// Objek untuk menyimpan nilai input lainnya
const formData = {};

// Delegasi event untuk semua input (teks, date, email)
formContainer.addEventListener('input', (event) => {
    const target = event.target;

    if (target.classList.contains('form-input')) {
        const name = target.id || target.name; // Gunakan id atau name sebagai key
        formData[name] = target.value; // Simpan nilai input ke formData
    }
});

// Delegasi event pada container untuk klik pada wrapper
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('wrapper')) {
        // Ambil id checkbox dari atribut data-target
        const targetCheckboxId = event.target.getAttribute('data-target');
        const checkbox = document.getElementById(targetCheckboxId);

        if (checkbox) {
            // Toggle status dan pastikan hanya satu checkbox yang dicentang
            checkboxes.forEach(cb => {
                cb.checked = (cb === checkbox) ? !cb.checked : false;
            });

            // Update produk terpilih
            updateSelectedProduct();
        }
    }
});

// Event listener untuk klik langsung pada checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            // Pastikan hanya satu checkbox yang dicentang
            checkboxes.forEach(cb => {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        }

        // Update produk terpilih
        updateSelectedProduct();
    });
});

// Fungsi untuk mengambil produk terpilih
function updateSelectedProduct() {
    const checkedBox = [...checkboxes].find(cb => cb.checked); // Cari checkbox yang dicentang
    selectedValue = checkedBox ? checkedBox.value : null;
}

// Event listener untuk tombol submit
document.getElementById('submit-btn').addEventListener('click', () => {
    // Gabungkan nilai checkbox dengan input lainnya
    const completeData = {
        ...formData,
        selectedProduct: selectedValue
    };

    
    // Tampilkan hasil
    const output = `Data Form: ${JSON.stringify(completeData, null, 2)}`;
    console.log(completeData); // Log hasil lengkap ke konsol
    console.log(output); // Log hasil lengkap ke konsol
    
    const textPesanan = `Judul : ${completeData.inputText1}
Nama Kelompok :\n${completeData.inputText2}
Deadline : ${completeData.date}
Tiers : ${completeData.selectedProduct}`
    // const textPesanan = Object.entries(completeData)
    // .map(([key, value]) => `${key}: ${value}`)
    // .join("\n");

    //convert ke encode
    const combinedText = textPesanan; // Menambahkan newline antara pesan
    const encodedText = encodeURIComponent(combinedText);

    // Format link WhatsApp
    const waLink = `https://wa.me/+6287859430256?text=${encodedText}`;
    console.log(waLink);
    
    const link = document.getElementById('myLink');
    const kirim = document.getElementById('myKirim')
    // Ubah href menjadi tautan baru
    link.href = waLink;
    kirim.style.backgroundColor = "#27ae60";
});




