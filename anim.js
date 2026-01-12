var lyrics = document.querySelector("#lyrics");

// FRASES BONITAS, CERCANAS Y DE AMISTAD
var lyricsData = [
  { text: "Quería decirte algo bonito, nada más", time: 2 },
  { text: "Me encanta tu pelo, siempre se ve lindo", time: 6 },
  { text: "Tu sonrisa tiene algo que calma", time: 10 },
  { text: "La verdad, me matan tus ojos", time: 14 },
  { text: "Eres una persona muy agradable de tener cerca", time: 18 },
  { text: "Hablar contigo siempre se siente natural", time: 22 },
  { text: "Tienes una forma de ser muy bonita", time: 26 },
  { text: "Eres como una luz tranquila", time: 30 },
  { text: "Eres una estrella, pero sin darte cuenta", time: 34 },
  { text: "Eres la flor más bonita del jardín", time: 38 },
  { text: "Gracias por ser como eres", time: 42 },
  { text: "Solo quería que supieras eso", time: 46 }
];

// TIEMPO SIMULADO (SIN AUDIO)
var currentTime = 0;

function updateLyrics() {
  currentTime++;

  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time && currentTime < line.time + 3
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// ACTUALIZA CADA SEGUNDO
setInterval(updateLyrics, 1000);

// OCULTAR EL TÍTULO
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease forwards";

  setTimeout(() => {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 20000);
