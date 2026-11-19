var rupiah = prompt("Masukkan nominal uang dalam Rupiah (IDR):");
var usd = parseFloat(rupiah) / 18246;
alert("Hasil konversi ke USD: UD$" + usd.toFixed(2));