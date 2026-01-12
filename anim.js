// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me encanta tu pelo", time: 10 },
  { text: "Siempre es chévere pasar un rato contigo", time: 16 },
  { text: "Me matan tus ojos", time: 22 },
  { text: "Contigo las charlas se sienten fáciles", time: 28 },
  { text: "Tu sonrisa es muy linda", time: 34 },
  { text: "Me agrada mucho tu forma de ser", time: 40 },
  { text: "Eres una estrella, siempre destacas", time: 46 },
  { text: "Da gusto coincidir contigo", time: 52 },
  { text: "Tu vibra es muy bonita", time: 58 },
  { text: "Eres la flor más bonita del jardín", time: 64 },
  { text: "Me cae muy bien hablar contigo", time: 70 },
  { text: "Siempre traes buena energía", time: 76 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
