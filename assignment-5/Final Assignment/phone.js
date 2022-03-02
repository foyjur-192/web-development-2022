//get input value
//error handling for string value
const main = document.getElementById('main');

const searchButton = () => {
  const input = document.getElementById('input-value');
  const error = document.getElementById('error');
  const inputValue = input.value;
  if(isNaN ('inputValue') == 'inputValue'){                 //=== data use later
    error.innerText = "Brand not found";
    input.value="";
    main.innerHTML="";
  }
    else if (inputValue == 'brand'){
      error.innerText="Please give a brand name";
      input.value="";
    }

    else{
      main.innerHTML="";  
      const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
      fetch(url)
      .then(res => res.json())
      .then(data => cardDetails(data.data))
      input.value="";
      error.innerHTML="";
    }
}


const cardDetails = (cards) => {
for(const card of cards){
  const div = document.createElement('div');
  div.classList.add('col-lg-4');
  div.classList.add('mb-5');
  div.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.phone_name}</h5>
    <p class="card-text">${card.brand}</p>
    <button href="#" onclick="featureDetails('${card.slug}')" class="btn btn-primary">Explore Features</button>
  </div>
</div>
  
  `
  main.appendChild(div);
}
}

const featureDetails = (slug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
  const allCards = data.cards;
  console.log(allCards);
}










/**/