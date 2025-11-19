const audio = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('nowPlaying');
const playlist = document.getElementById('playlist');

// Add your songs here (file names must match files in music/ folder)
const songs = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3"
];

// Populate playlist
songs.forEach(song => {
  const li = document.createElement('li');
  li.textContent = song;
  li.addEventListener('click', () => playSong(song));
  playlist.appendChild(li);
});

function playSong(song) {
  audio.src = `music/${song}`;
  audio.play();
  nowPlaying.textContent = `Now Playing: ${song}`;
}
