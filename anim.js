var lyrics = document.querySelector("#lyrics");
var startTime = Date.now();

lyricsData.sort((a, b) => a.time - b.time);

function updateLyrics() {
  var elapsed = (Date.now() - startTime) / 1000;

  var currentLine = lyricsData.find(
    (line) => elapsed >= line.time && elapsed < line.time + 4
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.textContent = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.textContent = "";
  }

  requestAnimationFrame(updateLyrics);
}

updateLyrics();
