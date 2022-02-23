const musiclist = [
    {
        singer: `ItsWatR`,
        name: `Let It Go`,
        icon: `fas fa-play-circle fa-2x`,
        prodID: 1,
        length: 230,
        rating: 3.9,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Coma-Media`,
        name: `Jazzy Abstract Beat`,
        icon: `fas fa-play-circle fa-2x`,
        prodID: 2,
        length: 130,
        rating: 4.2,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Coma-Media`,
        name: `Sexy Fashion Beats`,
        icon: `fas fa-play-circle fa-2x`,

        prodID: 3,
        length: 130,
        rating: 4.5,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `tobylane`,
        name: `Fluidity (1:00 IG edit)`,
        icon: `fas fa-play-circle fa-2x`,

        prodID: 4,
        length: 230,
        rating: 3.5,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `ItsWatR`,
        name: `Awakening Instrumental`,
        icon: `fas fa-play-circle fa-2x`,

        prodID: 5,
        length: 310,
        rating: 4.1,
        likeit: true,
        isplaying: false,
    }
]

const theAudio = new Audio();
const name = document.querySelector(`#name`);
const playorpause = document.querySelector(`#stop`);
const forward = document.querySelector(`#next`);
const backward = document.querySelector(`#previous`);
const trackTime = document.querySelector(`#tracktime`);
const trackDuration = document.querySelector(`#trackduration`);
const trackProgress = document.querySelector(`#trackprogress`);
let num = 0;
const testcode = function (music){
    document.querySelector(`#information`).innerHTML += `
    <li class="song">
    <p>${music.name}</p>
    <i class="${music.icon}" data-prodid="${music.prodID}"></i>
    </li>
    `
}



const condition = function(){
    const search = document.querySelector(`#searchName`).value;
    const rating = document.querySelector(`#rate`).value;
    document.querySelector(`#information`).innerHTML = ``;
    musiclist.filter(product => product.rating <= rating).filter(product => product.name.toUpperCase().includes(search.toUpperCase())).forEach(testcode)
}

const filterForm = document.querySelector(`#filterproducts`);

filterForm.addEventListener(`submit`,function(event){
    event.preventDefault();
    condition();
})

document.querySelector(`#rate`).addEventListener(`change`, function(event) {
    condition();
})

document.querySelector(`#searchName`).addEventListener(`input`, function(event) {
    condition();
})
window.addEventListener(`load`,function(event){
    condition();
    document.querySelector(`#information`).addEventListener(`click`, function(event){
        const iitem=  event.target.closest(`i`);
        console.log(iitem.dataset.prodid);
        if(iitem.matches(`.fa-play-circle`)){
            theAudio.src=`music/${iitem.dataset.prodid}.mp3`;
            theAudio.play();
            num = parseInt(iitem.dataset.prodid);
            albumpicture.src=`albumpic/${iitem.dataset.prodid}.jpg`;
            name.textContent = `Name:${musiclist[parseInt(iitem.dataset.prodid) - 1].name}`
            albumname.textContent=`Album:${musiclist[parseInt(iitem.dataset.prodid) - 1].albumname}`;
        }
    })

})


const changebutton = function(){
     if(document.querySelector(`#fa-stop`).className === "fas fa-2x fa-stop"){
         theAudio.pause();
         document.querySelector(`#fa-stop`).className = "fas fa-2x fa-play";
     }
     else{
         document.querySelector(`#fa-stop`).className = "fas fa-2x fa-stop";
         theAudio.play();
     }

}

const nextsong = function(){
    num = (num + 1) > 12 ? 1: num + 1;
    theAudio.src=`music/${num}.mp3`;
    theAudio.play();
}
const previoussong = function(){
    num = (num -1) < 0 ? 12: num -1;
    theAudio.src=`music/${num}.mp3`;
    theAudio.play();
}

theAudio.addEventListener(`canplaythrough`,event =>{
    trackTime.textContent = secondtomin(theAudio.currentTime);
    trackDuration.textContent = secondtomin(theAudio.duration);
    trackProgress.value = 0;
})

theAudio.addEventListener(`durationchange`,event =>{
    trackDuration.textContent = secondtomin(theAudio.duration);
    trackTime.value = 0;
})

theAudio.addEventListener(`timeupdate`,event=>{
    trackProgress.value = theAudio.currentTime/ theAudio.duration;
    trackTime.textContent = secondtomin(theAudio.currentTime);
})
const secondtomin = (sec) =>{
    return `${Math.floor(sec/60)}: ${Math.round(sec % 60).toString().padStart(2,'0')}`
}
playorpause.addEventListener(`click`,changebutton);
forward.addEventListener(`click`,nextsong)
backward.addEventListener(`click`,previoussong)