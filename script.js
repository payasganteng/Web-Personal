// Musik
function playMusic() {
  const music = document.getElementById("bg-music");
  music.volume = 0.3; // kecilkan volume default
  music.play();
  document.getElementById("musicBtn").style.display = "none"; 
}

// Slide system
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
showSlide(currentSlide);

// Teka-teki
const clues = [
  "Clue 1: Aku tak terlihat tapi selalu terasa.",
  "Clue 2: Aku berhubungan dengan hati.",
  "Clue 3: Namaku sering disebut saat rindu.",
  "Clue 4: Jawabannya dua kata, diawali 'rasa'."
];
let wrongCount = 0;

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");
  const correctAnswer = "rasa sayangku";

  if (input === "") {
    feedback.textContent = "jawab dulu pls";
    feedback.className = "feedback wrong";
    nextBtn.style.display = "none";
    return;
  }

  if (input.includes("sayang") || input === correctAnswer) {
    feedback.textContent = "Eh kok bener 😳❤️ Berarti kita jodoh!";
    feedback.className = "feedback correct";
    nextBtn.style.display = "inline-block";
    wrongCount = 0;
  } else {
    let clueText = clues[wrongCount] || "Clue terakhir: Jawabannya 'rasa sayangku'";
    feedback.textContent = `Salah 😢 ${clueText}`;
    feedback.className = "feedback wrong";
    nextBtn.style.display = "none";
    wrongCount++;
  }
}

// Yes/No button logic
function handleYesClick() {
  window.location.href = "yes_page.html";
}

let noClickCount = 0;
const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');

  if (noClickCount < messages.length) {
    noButton.textContent = messages[noClickCount];
    noClickCount++;
  } else {
    noButton.textContent = "System Error 😢";
    noButton.disabled = true;
    noButton.style.opacity = "0.7";
    noButton.style.cursor = "not-allowed";
  }

  // Random posisi tombol
  const maxX = window.innerWidth - noButton.offsetWidth - 20;
  const maxY = window.innerHeight - noButton.offsetHeight - 20;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "fixed";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // Efek emote 😢
  const emote = document.createElement('div');
  emote.textContent = "😢 pls";
  emote.style.position = "fixed";
  emote.style.left = `${Math.floor(Math.random() * (window.innerWidth - 80))}px`;
  emote.style.top = `${Math.floor(Math.random() * (window.innerHeight - 40))}px`;
  emote.style.fontSize = "2rem";
  emote.style.fontWeight = "bold";
  emote.style.color = "#ff2e63";
  emote.style.pointerEvents = "none";
  emote.style.zIndex = 9999;
  emote.style.userSelect = "none";
  emote.style.animation = "fadePls 1.5s forwards";

  document.body.appendChild(emote);
  setTimeout(() => emote.remove(), 1500);
}
