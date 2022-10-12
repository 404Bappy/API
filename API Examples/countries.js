const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
   // for(const country of countries ){
   //     console.log(country);
    //}
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        console.log(country);
    })
}