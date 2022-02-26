
//Button one

const nameOfPeople = () => {
    //declare arry funciton
fetch('https://restcountries.com/v3.1/all')
.then (res => res.json())
.then(data => displayCountries(data))
}

const displayCountries = (contryList) => {
const main = document.getElementById('countryList');

const first10Data = contryList.slice(0, 10); //We can call any amount of data from 1000

for(const country of first10Data){
    //this div must be inside for loop
    const div = document.createElement('div')
    div.className = 'col-lg-3 p-2'
   
    //display the data in html Ui
  div.innerHTML = `
  <h5> ${country.name.common}</h5>
  <img width='200px' height='100px' src= "${country.flags.png}" />
  `
 main.appendChild(div)
}
}

//Button one
const nameOfCountry = () => {
    //declare arry funciton
fetch('https://restcountries.com/v3.1/all')
.then (res => res.json())
.then(data => displayCountryList(data))
}

const displayCountryList = (countryListed) => {
const main = document.getElementById('countryListed');

const first10Data = countryListed.slice(0, 50); //We can call any amount of data from 1000

for(const country of first10Data){
    //this div must be inside for loop
    const div = document.createElement('div')
    div.className = 'col-lg-3 p-2'
   
    //display the data in html Ui
  div.innerHTML = `
  <h5> ${country.name.common}</h5>
  `
 main.appendChild(div)
}
}


//Button Three Location
const nameOfLocation = () => {
    //declare arry funciton
fetch('https://restcountries.com/v3.1/all')
.then (res => res.json())
.then(data => displayCountryListThree(data))
}

const displayCountryListThree = (countryListedThree) => {
const main = document.getElementById('countryListedThree');

const first10Data = countryListedThree.slice(0, 50); //We can call any amount of data from 1000

for(const country of first10Data){
    //this div must be inside for loop
    const div = document.createElement('div')
    div.className = 'col-lg-3 p-2'
   
    //display the data in html Ui
  div.innerHTML = `
  <h5> ${country.timezones}</h5>
 
  `
 main.appendChild(div)
}
}


//Button Four

const nameOfId = () => {
    //declare arry funciton
fetch('https://restcountries.com/v3.1/all')
.then (res => res.json())
.then(data => displayCountryListFour(data))
}

const displayCountryListFour = (countryListedFour) => {
const main = document.getElementById('countryListedFour');

const first10Data = countryListedFour.slice(10, 50); //We can call any amount of data from 1000
console.log(countryListedFour);
for(const country of first10Data){
    //this div must be inside for loop
    const div = document.createElement('div')
    div.className = 'col-lg-3 p-2'
   
    //display the data in html Ui
  div.innerHTML = `
  <h5> ${country.name.common}</h5>
  <h5> ${country.population}</h5>
  
 
  `
 main.appendChild(div)
}
}