// Ambil elemen HTML
const startButton = document.getElementById("start-btn");
const jumpscareContainer = document.getElementById("jumpscare-container");
const jumpscareImage = document.getElementById("jumpscare-image");
const jumpscareAudio = document.getElementById("jumpscare-audio");

// Fungsi untuk memulai permainan
startButton.addEventListener("click", () => {
  // Tunda selama beberapa detik untuk efek
  setTimeout(() => {
    // Tampilkan jumpscare
    jumpscareContainer.style.display = "flex";

    // Putar suara
    jumpscareAudio.play();

    // Sembunyikan jumpscare setelah 5 detik
    setTimeout(() => {
      jumpscareContainer.style.display = "none";
      alert("Kaget? Coba lagi!");
    }, 5000);
  }, Math.random() * 3000 + 2000); // Jeda acak antara 2-5 detik
});
