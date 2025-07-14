
const questions = [
  {
    question: "Apa makanan favorit Egi yang paling sering disebut? Tapi ga pernah makan lagi",
    options: ["Rendang", "Semur jengkol", "Ayam geprek", "Bakso"],
    answer: 1
  },
  {
    question: "Apa warna favorit Egi?",
    options: ["Hijau dan Kuning", "Hitam dan Biru Gelap", "Merah dan Putih", "Ungu dan Emas"],
    answer: 1
  },
  {
    question: "Siapa yang paling susah buat minta maaf duluan?",
    options: ["ipak", "qolby", "Syifa", "kak ipak"],
    answer: 2
  },
  {
    question: "Siapa nama lengkap anak kakakmu?",
    options: ["El Kafi Nugroho", "Kenbi", "Emier el kafi", "El Rizal Nugroho"],
    answer: 1
  },
  {
    question: "Tanggal pernikahan kalian adalah?",
    options: ["14 Februari 2020", "1 Januari 2020", "20 Februari 2020", "31 Desember 2019"],
    answer: 2
  },
  {
    question: "Di mana Egi bekerja sekarang?",
    options: ["Optik Melawai Transmart Bogor", "Optik Sehat Banjarnegara", "Optik Melawai Epicentrum Lombok", "Optik Melawai Pontianak"],
    answer: 2
  },
  {
    question: "Apa jurusan Egi saat SMK?",
    options: ["Multimedia", "TKJ (Teknik Komputer dan Jaringan)", "Farmasi", "RPL"],
    answer: 1
  },
  {
    question: "Suku apa yang mengalir di darah Egi?",
    options: ["Sunda", "Minang", "Jawa", "Bali"],
    answer: 2
  },
  {
    question: "Apa hobi Egi di waktu senggang?",
    options: ["✓ trading", "Baca novel", "Nonton film MCU", "Mancing"],
    answer: 2
  },
  {
    question: "Apa makanan sederhana yang Egi suka banget walau dimasak apa aja?",
    options: ["Telur", "Ayam", "Tempe", "Mie instan"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 180;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const options = document.getElementById("options");
  options.innerHTML = "";
  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${i}"> ${opt}`;
    options.appendChild(label);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Pilih dulu ya sayang!");

  if (parseInt(selected.value) === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result").innerHTML = `<h2>Kamu menjawab ${score} dari 10 dengan benar 💕</h2>`;
    document.getElementById("result").style.display = "block";
  }
}

function startTimer() {
  const timer = document.getElementById("timer");
  const countdown = setInterval(() => {
    timeLeft--;
    timer.innerText = `Sisa waktu: ${timeLeft} detik`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("quiz-box").style.display = "none";
      document.getElementById("result").innerHTML = `<h2>Waktu habis! Kamu jawab ${score} dari 10 soal 💕</h2>`;
      document.getElementById("result").style.display = "block";
    }
  }, 1000);
}

window.onload = () => {
  showQuestion();
  startTimer();
};
