let startTime;
let endTime;
let timeout;
let isGameActive = false;

const box = document.getElementById('box');
const messageDisplay = document.getElementById('message');
const reactionTimeDisplay = document.getElementById('reactionTime');
const startButton = document.getElementById('startButton');

// Fungsi untuk mendapatkan waktu acak antara 1 sampai 5 detik
function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 1000;
}

// Fungsi untuk memulai permainan
function startGame() {
    messageDisplay.textContent = 'Bersiap...';
    reactionTimeDisplay.textContent = '-';
    box.style.backgroundColor = '#3498db'; // Warna awal
    isGameActive = false;

    // Timer untuk mengubah warna setelah waktu acak
    timeout = setTimeout(() => {
        box.style.backgroundColor = '#2ecc71'; // Warna ketika kotak berubah
        startTime = Date.now();
        isGameActive = true;
        messageDisplay.textContent = 'Klik sekarang!';
    }, getRandomTime());
}

// Fungsi untuk menangani klik pada kotak
box.addEventListener('click', () => {
    if (isGameActive) {
        endTime = Date.now();
        const reactionTime = endTime - startTime;
        reactionTimeDisplay.textContent = `${reactionTime} ms`;
        messageDisplay.textContent = 'Waktu reaksi Anda!';
        isGameActive = false;
    } else {
        messageDisplay.textContent = 'Tunggu sampai kotak berubah warna!';
    }
});

// Fungsi untuk memulai permainan kembali
startButton.addEventListener('click', () => {
    clearTimeout(timeout);
    startGame();
});