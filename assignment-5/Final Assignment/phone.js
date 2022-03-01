




































/*
const searchButton = () => {
    document.getElementById('mobile-container').innerHTML = ""; // Result will shown in first row
    const searchInput = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
   fetch(url)
   .then (response => response.json())
   .then(data => mobileDetials(data.data));

};

const mobileDetials = (mobiles) => {
    for (const data of mobiles){
        const parent = document.getElementById('mobile-container');
       const div = document.createElement("div");
       div.classList.add("row")
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML=`
            <div class="card" style="width: 20rem;">
                <img src="${data.image}" class="card-img-top mt-3" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.brand}</h5>
                    <button onclick="cardDetails('${data.brand}')" class="btn btn-primary">See Details</button>
                </div>
            </div>
        `
        parent.appendChild(div);
    }
}


const cardDetails = (brand) => {
 fetch(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`)
  .then (response => response.json())
  .then(data => {
    const allBrand = data.memory;
    const eachBrand = allBrand.find(brand => data.brand === brand)
    console.log(eachBrand);
  })

}

*/