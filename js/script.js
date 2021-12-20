const name = document.querySelector(`#name`);
const playorpause = document.querySelector(`#play`);
const forward = document.querySelector(`#next`);
const backward = document.querySelector(`#previous`);
const trackTime = document.querySelector(`#tracktime`);
const trackDuration = document.querySelector(`#trackduration`);
const trackProgress = document.querySelector(`#trackprogress`);
let num = 0;
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

const load = function (music){
    document.querySelector(`#information`).innerHTML += `
    <li class="song">
    <p>${music.name} by ${music.singer}</p>
    <i class="${music.icon}" data-prodID="${music.prodID}"></i>
    </li>
    `
}



const filterfunction = function(){
    const search = document.querySelector(`#searchName`).value;
    const rating = document.querySelector(`#rate`).value;
    document.querySelector(`#information`).innerHTML = ``;
    musiclist.filter(product => product.rating <= rating).filter(product => product.name.toUpperCase().includes(search.toUpperCase())).forEach(load)
}

const filterForm = document.querySelector(`#filterproducts`);

filterForm.addEventListener(`submit`,function(event){
    event.preventDefault();
    filterfunction();
})

document.querySelector(`#rate`).addEventListener(`change`, function(event) {
    filterfunction();
})

document.querySelector(`#searchName`).addEventListener(`input`, function(event) {
    filterfunction();
})
window.addEventListener(`load`,function(event){
    filterfunction();
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


const alteraction = function(){
     if(document.querySelector(`#fa-stop`).className === "fas fa-2x fa-stop"){
         theAudio.pause();
         document.querySelector(`#fa-stop`).className = "fas fa-2x fa-play";
     }
     else{
         document.querySelector(`#fa-stop`).className = "fas fa-2x fa-stop";
         theAudio.play();
     }
}


