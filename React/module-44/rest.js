const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then  (res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
console.log(countries);
const countriesHTML = countries.map(country => getCountryHTML(country));
// console.log(allCountriesHTML[0]);
const container = document.getElementById('countries');
container.innerHTML = countriesHTML.join('');
}// we can remove comma from arry by join('')

//We have three option to do Destrucring
//Using destructuring to make the process easy
const getCountryHTML = ({name, flags,area, capital, independent,region}) => {
    // option two by destrucring
    return `
    <div class="country">
   <h2> ${name.common}</h2>
   <p>${area}</p>
   <p>${region}</p>
   <h4>${capital}</h4>
   <h5>${independent}</h5>
   <img src="${flags.png}">
    </div>
    `
}



// //Using destructuring to make the process easy
// const getCountryHTML = (country) => {
//     // option one by destrucring
//     const {name, flags} =country;
//     return `
//     <div class="country">
//    <h2> ${name.common}</h2>
//    <img src="${flags.png}">
//     </div>
//     `
// }




//Orginal one
// const getCountryHTML = country => {
//     return `
//     <div class="country">
//    <h2> ${country.name.common}</h2>
//    <img src="${country.flags.png}">
//     </div>
//     `
// }


loadCountries();



