let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let audio = new Audio("bergema.mp3"); // pastikan file mp3 ada di folder yang sama

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  slides[currentSlide].classList.add('active');
}

function checkAnswer() {
  let answer = document.getElementById("answerInput").value.trim().toLowerCase();
  let feedback = document.getElementById("feedback");
  let nextBtn = document.getElementById("nextBtn");
  if (answer === "cinta" || answer === "love") {
    feedback.textContent = "❤️ Benar! Kamu pintar!";
    feedback.className = "feedback correct";
    nextBtn.style.display = "inline-block";
  } else {
    feedback.textContent = "😢 Salah, coba lagi!";
    feedback.className = "feedback wrong";
  }
}

function handleYesClick() {
  alert("Yay! 💖");
}

function handleNoClick() {
  alert("Oh no 😢");
}

function playMusic() {
  audio.volume = 0.3;  // set volume awal
  audio.loop = true;   // ulang terus
  audio.play();
}

function setVolume(val) {
  audio.volume = val;
}
