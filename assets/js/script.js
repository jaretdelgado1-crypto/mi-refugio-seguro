/* ================= RESPIRACIÓN ================= */
const circle = document.getElementById("breathCircle");

if (circle) {
  let phase = 0;

  function breathingCycle() {
    if (phase === 0) {
      circle.textContent = "Inhala";
      circle.style.transform = "scale(1.25)";
    } 
    else if (phase === 1) {
      circle.textContent = "Mantén";
      circle.style.transform = "scale(1.25)";
    } 
    else {
      circle.textContent = "Exhala";
      circle.style.transform = "scale(1)";
    }

    phase = (phase + 1) % 3;
  }

  breathingCycle();               // inicia de inmediato
  setInterval(breathingCycle, 4000);
}

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
