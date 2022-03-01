// 1. button event handler setup
// 2. get input value
// error handling for string value

// https://deckofcardsapi.com/api/deck/new/draw/?count=10
// https://api.thedogapi.com/v1/breeds
const mobileFinder = document.getElementById("mobile");
const searchButton = () =>{
    const searchInput = document.getElementById("search-input");
    const error = document.getElementById("error");
    

    const inputValue = parseInt(searchInput.value);
    if(isNaN(inputValue) || inputValue==""){ //isNaN check number or string /others-true
        // alert("Please enter a number");
        error.innerText="Mobile brand not found";
        searchInput.value="";
        mobileFinder.innerHTML="";
    }
    else if(inputValue <= 0){
        error.innerText="Please give a positive number";
        searchInput.value="";
        mobileFinder.innerHTML="";
    }
    else{
        mobileFinder.innerHTML="";
        fetch( `https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards))

        searchInput.value="";
        error.innerHTML=""
    }
}


// Practice


















const cardsDisplay = (cards) =>{
    // cards = cards.cards;
    console.log(cards);
    for(const card of cards){
        console.log(card);
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML=`
            <div class="card" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.suit}</h5>
                    <p class="card-text">${card.code}</p>
                    <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
                </div>
            </div>
        `
        mobileFinder.appendChild(div)
    }
}

const cardDetails = (code) =>{
    fetch(`https://openapi.programming-hero.com/api/phone/`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code === code)
            const div = document.createElement("div");
            mobileFinder.innerHTML="";
            div.innerHTML=`
                <div class="card" style="width: 18rem;">
                    <img src="${singleCard.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${singleCard.suit}</h5>
                        <p class="card-text">${singleCard.code}</p>
                        <p class="card-text">${singleCard.value}</p>
                    </div>
                </div>
            `
            mobileFinder.appendChild(div)
        })
}
