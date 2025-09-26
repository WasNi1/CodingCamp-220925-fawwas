const form = document.getElementById('dataForm');
    const resText = document.getElementById('resText');
    const curTime = document.getElementById('curTime');
    const welcomeText = document.getElementById('welcomeText');

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

        if(nama !== '-') {
            welcomeText.textContent = `Hi ${nama}, Welcome To Our Website`;
        }
    });


const sections = document.querySelectorAll("section, .home, .profile, .headquarter, .container");
const navLinks = document.querySelectorAll("nav ul li a");


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.6 });

  
  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });