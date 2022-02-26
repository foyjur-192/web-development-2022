document.getElementById('Add-color').addEventListener('click', function(){
const container = document.getElementById('friend-container');
container.style.border = '2px solid yellow';
container.style.background = '#458796';

});
//onclick
function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');
for(const friend of friends ){
    friend.style.backgroundColor = 'yellow';
}
}

//we can add friend name
document.getElementById('add-friend').addEventListener('click', function(){
const container = document.getElementById('friend-container');
const friendDiv = document.createElement('div');
friendDiv.classList.add('friend');
friendDiv.innerHTML = `
<h3 class= "friend-name"> Semal </h3>
        <p>Ab aspernatur et esse soluta.</p>`

container.appendChild(friendDiv);
})