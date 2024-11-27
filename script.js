document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan script interaktivitas di sini jika diperlukan
});

function scrollLeft() {
    document.querySelector('.card-container').scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.card-container').scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
}
