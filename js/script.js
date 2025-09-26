const form = document.getElementById('dataForm');
    const resText = document.getElementById('resText');
    const curTime = document.getElementById('curTime');

    function updateTime() {
      const now = new Date();
      curTime.textContent = now.toString();
    }
    updateTime();

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value || '-';
      const tgl = document.getElementById('tglLahir').value || '-';
      const gender = document.querySelector('input[name="jenisKelamin"]:checked')?.value || '-';
      const pesan = document.getElementById('pesan').value || '-';

      resText.textContent = 
        "Nama : " + nama + "\n" +
        "Tanggal Lahir : " + tgl + "\n" +
        "Jenis Kelamin : " + gender + "\n" +
        "Pesan : " + pesan;
    });