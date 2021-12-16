const songsOfTheList = [
    { name: `drivers license`, genre: `indie pop`, artist: `Olivia Rodrigo`, country:`US`}, //0
    { name:`Kiss Me More`, genre:`R&B`, artist: `Doja Cat`, country:`US`}, //1
    { name:`Save Your Tears (Remix)`, genre: `synthwave`, artist:`the Weeknd` `Ariana Grande`, country:`Canada`}, //2
    { name:`STAY`, genre: `pop`, artist:`Justin Bieber` `the Kid Laroi`, country: `Canada`}, //3
    { name:`Easy On Me`, genre: `pop`, artist: `Adele`, country: `UK`}, //4
    { name:`Wants and Needs`, genre:`rap`, artist: `Drake`, country: `Canada`}, //5 
    { name:`Levitating`, genre: `funk`, artist:`Dua Lipa`, country: `UK`}, //6
    { name:`Peaches`, genre: `trap`, artist: `Justin Bieber`, country: `Canada`}, //7
    { name: `Heat Waves`, genre: `R&B`, artist: `Glass Animals`, country: `UK`}, //8
]
console.table(songsOfTheList)

const appendSongToList = function(song){
    document.querySelector(`#songs`).innerHTML += `<li class="song ${song.country}">${song.name}</li>`
}
songsOfTheList.forEach(appendSongToList)




// let playlist = [
// 	{src:'https://soundcloud.com/shubhneet-singh-3/we-rollin-shubhers', title:"Songggg", artist:"Songey"},  // 0
// 	{src:'https://www.bensound.com/bensound-music/bensound-funnysong.mp3', title:"Final Day", artist:"Songey"},  // 1
//   {src:'https://www.bensound.com/bensound-music/bensound-tomorrow.mp3', title:"Hello world", artist:"Songey"}  // 2
// ]

// // Keeping track of things  ---------------------------
// let whichSongAmIOn = 0
// let isPlaying = false
// let audio = null // empty for now

// // Load up songs  -------------------------------------
// let playASong = function(whichSong) {
// 	let song = playlist[whichSong] // The song you want to play from the Array above
// 	if (audio) { // means it's not null (something was previously loaded)
// 		audio.src = song.src // Change the song
// 		if (isPlaying) { audio.play() } // Play it
// 	} else {
// 		audio = new Audio(song.src) 
// 	}
// 	// Here you can do stuff with the title, artist, etc.
// }

// // Play/Pause song -------------------------------------
// let pressedPlay = function() {
// 	if (isPlaying) {
// 		audio.pause()
// 		isPlaying = false  // Flip the switch
// 		play.textContent = `▶️`
// 	} else {
// 		audio.play()
// 		isPlaying = true
// 		play.textContent = `⏸`
// 	}
// }
// let play = document.querySelector(`#play`)
// play.addEventListener(`click`, pressedPlay)


// // Next song -----------------------------------------
// let pressedNext = function() {
// 	whichSongAmIOn = whichSongAmIOn + 1
// 	playASong(whichSongAmIOn)
// 	// What if there is no song at that index? 😬
// }
// let next = document.querySelector(`#next`)
// next.addEventListener(`click`, pressedNext)


// // ---------------------------------------------------
// // Start by loading up a new song (but don't play it yet, user must press ▶️)
// playASong(0)