function showDataSet(setNumber) {
  // Semua set data disembunyikan terlebih dahulu
  document.querySelectorAll(".data-set").forEach((set) => {
    set.style.display = "none";
  });

  // Hanya menampilkan set data yang sesuai
  const dataSetToShow = document.querySelector(`.data-set-${setNumber}`);
  dataSetToShow.style.display = "block";

  // Menandai tombol navigasi yang aktif
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `.nav-btn:nth-child(${setNumber})`
  );
  activeButton.classList.add("active");
}

// Menampilkan set data pertama saat halaman pertama dimuat
showDataSet(1);
