function scrollToLayanan() {
  document.getElementById("layanan").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("formKontak").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan Anda telah dikirim. Terima kasih!");
  this.reset();
});
