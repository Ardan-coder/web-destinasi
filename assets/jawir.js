// 1. Tentukan waktu akhir promo (Contoh: 12 jam dari sekarang)
// Anda juga bisa menentukan tanggal spesifik, misal: new Date("2026-12-31T23:59:59").getTime();
const targetTime = new Date().getTime() + (12 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    // Jika waktu promo sudah habis
    if (difference <= 0) {
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        clearInterval(timerInterval);
        alert("Promo telah berakhir!");
        return;
    }

    // Hitung Jam, Menit, dan Detik dari sisa selisih waktu
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Tampilkan ke dalam HTML (menggunakan String.padStart agar selalu 2 digit: 01, 02, dst)
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

// Jalankan fungsi pertama kali agar tidak ada delay 1 detik saat muat halaman
updateCountdown();

// Jalankan fungsi secara berulang setiap 1 detik (1000 ms)
const timerInterval = setInterval(updateCountdown, 1000);