// Fungsi Enkripsi
function encryptText() {
    const plainText = document.getElementById("plaintext").value;
    const key = document.getElementById("key").value;
  
    if (!plainText || !key) {
      alert("Teks dan kunci rahasia tidak boleh kosong!");
      return;
    }
  
    const encrypted = CryptoJS.AES.encrypt(plainText, key).toString();
    document.getElementById("output").textContent = `Hasil Enkripsi: ${encrypted}`;
  }
  
  // Fungsi Dekripsi
  function decryptText() {
    const cipherText = document.getElementById("plaintext").value;
    const key = document.getElementById("key").value;
  
    if (!cipherText || !key) {
      alert("Teks terenkripsi dan kunci rahasia tidak boleh kosong!");
      return;
    }
  
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  
      if (!decrypted) throw new Error("Dekripsi gagal");
  
      document.getElementById("output").textContent = `Hasil Dekripsi: ${decrypted}`;
    } catch (e) {
      document.getElementById("output").textContent = "Dekripsi gagal! Pastikan teks terenkripsi dan kunci rahasia benar.";
    }
  }
  