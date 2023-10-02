// Ambil elemen avatar-button dan dropdown-content
var avatarButton = document.getElementById("avatar-button");
var dropdownContent = document.getElementById("dropdown-content");

// Tambahkan event listener untuk mengatur tampilan dropdown saat tombol diklik
avatarButton.addEventListener("click", function (e) {
  e.stopPropagation(); // Hentikan penyebaran peristiwa klik
  dropdownContent.classList.toggle("show");
});

// Tangani klik di luar dropdown untuk menyembunyikan dropdown
document.addEventListener("click", function (event) {
  if (!dropdownContent.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }
});
