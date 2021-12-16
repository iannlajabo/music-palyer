const songsOfTheList = [
    { name: `drivers license`, genre: `indie pop`, artist: `Olivia Rodrigo`, country:`US`}, //0
    { name:`Kiss Me More`, genre:`R&B` `pop` `rap`, artist: `Doja Cat`, country:`US`}, //1
    { name:`Save Your Tears (Remix)`, genre: `synthwave` `pop`, artist:`the Weeknd` `Ariana Grande`, country:`US``Canada`}, //2
    { name:`STAY`, genre: `pop` `rock` `rap`, artist:`Justin Bieber` `the Kid Laroi`, country: `Canada` `Australia`}, //3
    { name:`Easy On Me`, genre: `pop`, artist: `Adele`, country: `UK`}, //4
    { name:`Wants and Needs`, genre:`rap`, artist: `Drake`, country: `Canada`}, //5 
    { name:`Levitating`, genre: `disco``electro``funk`, artist:`Dua Lipa`, country: `UK`}, //6
    { name:`Peaches`, genre: `R&B` `pop` `trap`, artist: `Justin Bieber`, country: `Canada`}, //7
    { name: `Heat Waves`, genre: `pop` `R&B`, artist: `Glass Animals`, country: `UK`}, //8
]
console.table(songsOfTheList)

const appendSongToList = function(song){
    document.querySelector(`#songs`).innerHTML += `<li class="song ${song.country}">${song.name}</li>`
}
songsOfTheList.forEach(appendSongToList)
