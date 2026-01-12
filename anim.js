var lyrics = document.querySelector("#lyrics");

// FRASES BONITAS (AMISTAD, NO ROMANCE)
var lyricsData = [
  { text: "Me encanta tu pelo, siempre se ve bonito", time: 2 },
  { text: "Tu sonrisa mejora el ambiente", time: 6 },
  { text: "Tienes una energía muy linda", time: 10 },
  { text: "La verdad, me matan tus ojos", time: 14 },
  { text: "Hablar contigo siempre se siente bien", time: 18 },
  { text: "Eres una persona muy especial", time: 22 },
  { text: "Me gusta mucho cómo eres", time: 26 },
  { text: "Eres una estrella, pero tranquila", time: 30 },
  { text: "Tu forma de ser es muy bonita", time: 34 },
  { text: "Eres como la flor más linda del jardín", time: 38 },
  { text: "Tu sonrisa es contagiosa", time: 42 },
  { text: "Gracias por estar", time: 46 }
];

// TIEMPO MANUAL (NO AUDIO)
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

// OCULTAR TÍTULO DESPUÉS DE UN TIEMPO
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease forwards";

  setTimeout(() => {
    titulo.style.display = "none";
  }, 3000);
}

// SE OCULTA A LOS 20 SEGUNDOS
setTimeout(ocultarTitulo, 20000);
