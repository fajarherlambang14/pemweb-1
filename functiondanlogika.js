// Soal 1: FizzBuzz (1 sampai 100) 
function fizzBuzz(batas) {
  for (let i = 1; i <= batas; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("--- Function Soal 1: FizzBuzz ---");
fizzBuzz(15);

// Soal 2: Cek Genap & Ganjil
function genapGanjil(angka) {
  if (angka % 2 === 0) {
    return angka + " adalah bilangan genap";
  } else {
    return angka + " adalah bilangan ganjil";
  }
}

console.log("--- Function Soal 2: Genap & Ganjil ---");
console.log(genapGanjil(4));
console.log(genapGanjil(7));

//  Soal 3: Balik String 
function balikString(teks) {
  let hasil = "";
  for (let i = teks.length - 1; i >= 0; i--) {
    hasil += teks[i];
  }
  return hasil;
}

console.log("--- Function Soal 3: Balik String ---");
console.log(balikString("javascript")); // tpircsavaj
console.log(balikString("halo"));       // olah