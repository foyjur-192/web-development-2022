function loadAlbums(){
    fetch("https://via.placeholder.com/600/92c952")
    .then(res => res.json())
    .then(data => displayAlbums(data));
}
//call the fuction
loadAlbums(); 
function displayAlbums(albums){
  const albumsContainer = document.getElementById('albums');

  for (const album of albums){
      console.log(albums);

     
  }
}