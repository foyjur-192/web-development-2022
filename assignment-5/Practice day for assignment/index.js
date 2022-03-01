const allPlayers = () => {
    document.getElementById('player-container').innerHTML = ""; // Result will shown in first row
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
   fetch(url)
   
   .then (response => response.json())
   .then(data => showPlayerDetails(data.player));

};


//how can show 2 or 3 player
const showPlayerDetails = (players) => {
for (const player of players) {
    const parent = document.getElementById('player-container');
const div = document.createElement('div');
div.innerHTML = `<div id="card" class="card text-left p-5 border">
<div class="pro-pic ">
    <img src="${player.strThumb}" class="w-50 mb-3" alt="">
</div>
<h5>Name: ${player.strPlayer}</h5>
<h5>Country: ${player.strNationality}</h5>
<p></p>
<div class="allbutton">
    <button class="btn btn-danger">Delete </button>
    <button onclick="deatilsButton('${player.idPlayer}')" class="btn btn-primary">Details </button>
</div>
</div>`
parent.appendChild(div);
}
};

const deatilsButton = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
    .then (response => response.json())
    .then(data => setDetails(data.players[0])); //we can add from any number such from 5 4 3 even 1
};


const setDetails = (info) => {

if(info.strGender == 'male') {
document.getElementById('male').style.display = 'block';
document.getElementById('female').style.display = 'none';
}else {
    document.getElementById('male').style.display = 'none';
    document.getElementById('female').style.display = 'block'; 
}




document.getElementById('details-container').innerHTML = `
<div>
<img src="" alt="">
<h4> Name: ${info.strPlayer} </h4>
</div>
`;
};
