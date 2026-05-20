// LOGIN

function login(){

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  if(username === "admin" &&
     password === "12345"){

    alert("Login berhasil!");

    window.location.href =
      "dashboard.html";

  } else {

    alert("Username atau Password salah!");

  }

}
// DATA MATERI
const materi = [
 

  {
    judul: "Pengenalan Algoritma",
    link: "https://youtu.be/60K7zxIjHQo?si=luinz_OmVL8Py1mM"
  },

  {
    judul: "Variabel dan Tipe Data",
    link: "https://youtu.be/1oN7JxLTVzA?si=AOaqw70pmz5CccT5"
  },

  {
    judul: "Percabangan dan Perulangan",
    link: "https://youtu.be/Fc3eESOB8fY?si=8sRAYRj3gWD68njE"
  }

];

// DATA TUGAS
const tugas = [
  "Latihan Algoritma",
  "Program Hello World"
];

// MENAMPILKAN MATERI
function tampilkanMateri() {

  const container =
    document.getElementById("daftar-materi");

  if(!container) return;

  container.innerHTML = "";

  materi.forEach((item,index)=>{

    container.innerHTML += `

      <div class="item">

        <h4>
          📘 Materi ${index + 1}
        </h4>

        <p>
          ${item.judul}
        </p>

        <a
          href="${item.link}"
          target="_blank"
          class="btn-materi">

          ▶ Buka Video

        </a>

      </div>

    `;

  });

}
// MENAMPILKAN TUGAS
function tampilkanTugas() {

  const container = document.getElementById("daftar-tugas");

  container.innerHTML = "";

  tugas.forEach((item, index) => {

    container.innerHTML += `
      <div class="item">
        📝 Tugas ${index + 1}: ${item}
      </div>
    `;
  });
}

// PINDAH HALAMAN
function bukaHalaman(id, element = null) {

  // SEMBUNYIKAN SEMUA PAGE
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("aktif");
  });

  // TAMPILKAN PAGE TERPILIH
  document.getElementById(id).classList.add("aktif");

  // RESET MENU ACTIVE
  document.querySelectorAll(".menu-item").forEach(menu => {
    menu.classList.remove("active");
  });

  // TAMBAHKAN ACTIVE KE MENU YANG DIKLIK
  if(element){
    element.classList.add("active");
  }

  // LOAD DATA
  if(id === "materi"){
    tampilkanMateri();
  }

  if(id === "tugas"){
    tampilkanTugas();
  }
}

// KUMPULKAN TUGAS
function kumpulkanTugas(){

  const tugas = document.getElementById("pilih-tugas").value;
  const jawaban = document.getElementById("jawaban").value;

  if(jawaban.trim() === ""){
    alert("Jawaban masih kosong!");
    return;
  }

  alert(`
Tugas berhasil dikumpulkan!

Tugas:
${tugas}

Jawaban:
${jawaban}
  `);

  document.getElementById("jawaban").value = "";
}

function lihatPoin(){

  alert(
    "🎉 Total poin kamu adalah 145 poin!"
  );

}

function lihatProgress(){

  alert(
    "📈 Progress belajar kamu sudah 80%"
  );

}

// LOGOUT

function logout(){

  const konfirmasi =
    confirm("Apakah kamu yakin ingin logout?");

  if(konfirmasi){

    // KEMBALI KE HALAMAN LOGIN
    window.location.href = "index.html";

  }

}


// LOAD AWAL
tampilkanMateri();
tampilkanTugas();