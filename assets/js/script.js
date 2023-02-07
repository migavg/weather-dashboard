var searchFormElement = document.querySelector("#search-form");
var searchButton = document.getElementById("search-btn");
var weatherInfo = document.getElementById("weather-info-container");
var weatherCity =  document.getElementById("citySearch");
var weatherForecast1 = document.getElementById("forecast-one");


function getWeather() {

    var citySearch = weatherCity.value;
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial";

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


        fiveDayForecast();
};



function fiveDayForecast () {
    var citySearch = weatherCity.value;
    var fiveDayWeather ="http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch +"&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial&cnt=5";
    var dayNumber = 0;
    
    fetch(fiveDayWeather)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (dayNumber; dayNumber < 5; dayNumber++) {
            var weatherDay = dayNumber;
            console.log(data.list[weatherDay].main.temp);
            console.log(data.list[weatherDay].wind.speed);
            console.log(data.list[weatherDay].main.humidity);  
        
            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humidity = document.createElement("p");
 
            temp.textContent = "Temperature " + data.list[weatherDay].main.temp + "°F";
            wind.textContent = "Wind Speed: " + data.list[weatherDay].wind.speed + "MPH";
            humidity.textContent = "Humidity " + data.list[weatherDay].main.humidity + "%";

            weatherForecast1.appendChild(temp);
            weatherForecast1.appendChild(wind);
            weatherForecast1.appendChild(humidity);
        }
})
};

searchButton.addEventListener("click", getWeather);