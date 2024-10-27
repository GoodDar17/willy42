function showHeart() {
    document.getElementById('heart-container').style.display = 'block';

    // Tampilkan animasi bunga atau kado setelah tombol diklik
    const giftContainer = document.getElementById('gift-container');
    giftContainer.classList.remove('hidden');
    giftContainer.style.display = 'block';
}
