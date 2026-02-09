/* ================= RESPIRACIÓN ================= */
const circle = document.getElementById("breathCircle");
let step = 0;

setInterval(() => {
  if (!circle) return;

  if (step === 0) {
    circle.textContent = "Inhala";
    circle.style.transform = "scale(1.2)";
  } else if (step === 1) {
    circle.textContent = "Mantén";
    circle.style.transform = "scale(1.2)";
  } else {
    circle.textContent = "Exhala";
    circle.style.transform = "scale(1)";
  }

  step = (step + 1) % 3;
}, 4000);

/* ================= AUDIO ================= */
const audio = document.getElementById("relaxAudio");
const btn = document.getElementById("audioBtn");

btn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      btn.textContent = "⏸ Pausar sonido";
    } catch (e) {
      console.log("Autoplay bloqueado");
    }
  } else {
    audio.pause();
    btn.textContent = "🎧 Escuchar sonido calmante";
  }
});
