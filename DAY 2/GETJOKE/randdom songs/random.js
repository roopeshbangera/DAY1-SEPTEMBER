document.getElementById('jokeBtn').addEventListener('click', displayRandomSong);

const songs = [
    "Anuvanuvuu. Sunny M.R., Arijit Singh.",
    "Oh My Baby. Thaman S, Shilpa Rao.",
    "Idhe Idhe. Hesham Abdul Wahab.",
    "Chilaka. Vijai Bulganin, Lakshmi Meghana.",
    "Asalelaa. ...",
    "Sooseki From Pushpa 2 The Rule ...",
    "Needhe Needhe. ...",
    "Nandanandanaa From The Family Star",
    "Bohemian Rhapsody - Queen",
    "Fear song-Devara",
    "Davudi song-Devara",
    "Hotel California - Eagles",
    "Stairway to Heaven - Led Zeppelin",
    "Imagine - John Lennon",
    "Smells Like Teen Spirit - Nirvana",
    "Shape of You - Ed Sheeran",
    "Blinding Lights - The Weeknd",
    "Billie Jean - Michael Jackson",
    "Rolling in the Deep - Adele",
    "Hey Jude - The Beatles"
];

function displayRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    document.getElementById('jokeDisplay').textContent = randomSong;
}
