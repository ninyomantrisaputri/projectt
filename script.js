// JavaScript untuk preview gambar
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

closeModal.onclick = function() {
  modal.style.display = "none";
}

// Tutup modal kalau klik di luar gambar
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Inisialisasi AOS
AOS.init();

// Validasi Formulir
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Semua bidang wajib diisi!');
    return;
  }

  if (!validateEmail(email)) {
    alert('Alamat email tidak valid!');
    return;
  }

  // Kirim data formulir
  alert('Terima kasih! Pesan Anda telah dikirim.');

  // Reset formulir
  document.getElementById('contactForm').reset();
});

// Fungsi validasi email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}