var searchFormElement = document.querySelector("#search-form");
var searchButton = document.getElementById("search-btn");
var weatherInfo = document.getElementById("weather-info-container");
var weatherCity =  document.getElementById("citySearch");


function getApi() {

    var citySearch = weatherCity.value;
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial";

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.main.temp);
            var currentTemp =document.createElement('p');
            currentTemp.textContent = data.main.temp;
            weatherInfo.append(currentTemp);
            
        })


};


searchButton.addEventListener("click", getApi);