let searchInputEl = document.getElementById("searchInput");
let spinnerEL = document.getElementById("spinner");
let resultCountriesEl = document.getElementById("resultCountries");

let searchInputval = "";
let countriesList = [];


function createAndAppendCountry(country) {
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountriesEl.appendChild(countryEl);

    let countryflagEl = document.createElement("img");
    countryflagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryflagEl.src = country.flag;
    countryEl.appendChild(countryflagEl);

    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(countryInfoEl);


    let countrynameEl = document.createElement("p");
    countrynameEl.classList.add("country-name");
    countrynameEl.textContent = country.name;
    countryInfoEl.appendChild(countrynameEl);

    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = country.population;
    countryPopulationEl.classList.add("country-population");
    countryInfoEl.appendChild(countryPopulationEl);

}

function displaysearchResults() {
    resultCountriesEl.textContent = "";
    for (let country of countriesList) {
        let countryName = country.name;

        if (countryName.toLowerCase().includes(searchInputval.toLowerCase())) {
            createAndAppendCountry(country);

        }
    }
}

function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET",
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();

        })
        .then(function(jsonData) {
            countriesList = jsonData;
            displaysearchResults();

        });
}

function onchangesearchInput(event) {
    searchInputval = event.target.value;
    displaysearchResults();
}
getCountries();
searchInputEl.addEventListener("keyup", onchangesearchInput);
