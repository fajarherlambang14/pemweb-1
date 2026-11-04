
console.log("--- Pola Soal 1: Segitiga ---");
for (let i = 1; i <= 4; i++) {
  console.log("*".repeat(i));
}


console.log("--- Pola Soal 2: Persegi panjang ---");
for (let i = 1; i <= 4; i++) {
  console.log("*".repeat(8));
}


console.log("--- Pola Soal 3: Persegi panjang kosong ---");
const tinggi = 5;
const lebar = 8;
for (let baris = 1; baris <= tinggi; baris++) {
  let teks = "";
  for (let kolom = 1; kolom <= lebar; kolom++) {
    if (baris === 1 || baris === tinggi || kolom === 1 || kolom === lebar) {
      teks += "*";
    } else {
      teks += " ";
    }
  }
  console.log(teks);
}


console.log("--- Pola Soal 4: Segitiga sama sisi ---");
const n4 = 4;
for (let i = 1; i <= n4; i++) {
  console.log(" ".repeat(n4 - i) + (i + " ").repeat(i).trim());
}


console.log("--- Pola Soal 5: Segitiga sama sisi 2 ---");
const n5 = 4;
let angka = 1;
for (let i = 1; i <= n5; i++) {
  let baris = [];
  for (let j = 1; j <= i; j++) {
    baris.push(angka);
    angka++;
  }
  console.log(" ".repeat(n5 - i) + baris.join(" "));
}


console.log("--- Pola Soal 6: Belah ketupat ---");
const n6 = 4;
for (let i = 1; i <= n6; i++) {            // bagian atas (naik)
  console.log(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}
for (let i = n6 - 1; i >= 1; i--) {        // bagian bawah (turun)
  console.log(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}


console.log("--- Pola Soal 7: Segitiga jam pasir ---");
const n7 = 4;
for (let i = n7; i >= 1; i--) {            // bagian atas (menyempit)
  console.log(" ".repeat(n7 - i) + "*".repeat(2 * i - 1));
}
for (let i = 2; i <= n7; i++) {            // bagian bawah (melebar)
  console.log(" ".repeat(n7 - i) + "*".repeat(2 * i - 1));
}


console.log("--- Pola Soal 8: Segitiga kosong ---");
const n8 = 5;
for (let i = 1; i <= n8; i++) {
  if (i === 1) {
    console.log(" ".repeat(n8 - 1) + "*");
  } else if (i === n8) {
    console.log("*".repeat(2 * n8 - 1));
  } else {
    console.log(" ".repeat(n8 - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}