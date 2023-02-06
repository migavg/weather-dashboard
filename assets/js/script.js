var searchFormElement = document.querySelector("#search-form");
var searchButton = document.getElementById("search-btn");
var weatherInfo = document.getElementById("weather-info-container");
var weatherCity =  document.getElementById("citySearch");


function getApi() {

    var citySearch = weatherCity.value;
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial&weather";

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                console.log(data);
                console.log(data.main.temp);
                console.log(data.wind.speed);
                console.log(data.main.humidity);
                console.log(citySearch);

        var currentCity = document.createElement("p");
        var currentTemp = document.createElement("p");
        var currentWind = document.createElement("p");
        var currentHum = document.createElement("p");

        currentCity.textContent = "Current Temp in: " + citySearch;
        currentTemp.textContent = "Temperature " + data.main.temp + "°F";
        currentWind.textContent = "Wind Speed: " + data.wind.speed + "MPH";
        currentHum.textContent = "Humidity " + data.main.humidity + "%";

        

        weatherInfo.append(currentCity);
        weatherInfo.append(currentTemp);
        weatherInfo.append(currentWind);
        weatherInfo.append(currentHum);

            
        })


};


searchButton.addEventListener("click", getApi);