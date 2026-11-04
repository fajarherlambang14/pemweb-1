console.log("--- Percabangan Soal 2 ---");
function cekRole(kode) {
  switch (kode) {
    case "A":
      console.log("Admin");
      break;
    case "U":
      console.log("User");
      break;
    default:
      console.log("Guest");
  }
}
cekRole("A"); // Admin
cekRole("U"); // User
cekRole("X"); // Guest