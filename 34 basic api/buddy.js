const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
   for (const buddy of buddies){
       console.log(buddy.name.last)
       //we can display their name, id , first name last and so on
       //display Ui
       const p = document.createElement('p');
       p.innerText = `
       Name: ${buddy.name.title} ${buddy.name.first}  ${buddy.name.last}  email: ${buddy.email}` ;
      buddiesDiv.appendChild(p);
    }
}