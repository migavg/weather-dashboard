var searchButton = document.getElementById("search-btn");
var weatherInfo = document.getElementById("weather-info-container");
var weatherCity = document.getElementById("citySearch");
var weatherForecast = document.getElementById("weather-forecast");
var weatherForecast1 = document.getElementById("forecast-one");
var weatherForecast2 = document.getElementById("forecast-two");
var weatherForecast3 = document.getElementById("forecast-three");
var weatherForecast4 = document.getElementById("forecast-four");
var weatherForecast5 = document.getElementById("forecast-five");


// Function that grabs current weather and appends it to a div, then runs 5 day forecast



function getWeather() {


    var citySearch = weatherCity.value;
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial";


    if (!citySearch) {
        alert("Please enter a city.");
        return;
    }


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
            console.log(data.name);
         
         showWeather(data);

        }
        )



   

    // fiveDayForecast();
};


function showWeather(data) {

    var currentCity = document.createElement("p");
    var currentTemp = document.createElement("p");
    var currentWind = document.createElement("p");
    var currentHum = document.createElement("p");


    /// clears the previous search
    weatherInfo.innerHTML = "";

    currentCity.textContent = "Current Temp in: " + data.name;
    currentTemp.textContent = "Temperature " + data.main.temp + "°F";
    currentWind.textContent = "Wind Speed: " + data.wind.speed + "MPH";
    currentHum.textContent = "Humidity " + data.main.humidity + "%";

    weatherInfo.append(currentCity);
    weatherInfo.append(currentTemp);
    weatherInfo.append(currentWind);
    weatherInfo.append(currentHum);


    weatherInfo.classList.add("weatherCard");


};



// Function that grabs 5 day forecast and appends it to respective div in html  
// (had a for loop to make it shorter but in the end I couldn't append it to each independent div ID) 
// Kept my console.log data in order to see if thr data was populating correctly and also used as reference point while looking in the api array 

function fiveDayForecast() {
    var citySearch = weatherCity.value;
    var fiveDayWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=1585e0bbf2dbcb702a5708a67bf3b74d&units=imperial&cnt=5";

    fetch(fiveDayWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            // Day one of forecast 
            console.log(data.list[0].main.temp);
            console.log(data.list[0].wind.speed);
            console.log(data.list[0].main.humidity);

            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humidity = document.createElement("p");
            var day = document.createElement("p");

            //clears previous card
            weatherForecast1.innerHTML = "";

            day.textContent = "Day 1"
            temp.textContent = "Temperature " + data.list[0].main.temp + "°F";
            wind.textContent = "Wind Speed: " + data.list[0].wind.speed + "MPH";
            humidity.textContent = "Humidity " + data.list[0].main.humidity + "%";

            weatherForecast1.appendChild(day);
            weatherForecast1.appendChild(temp);
            weatherForecast1.appendChild(wind);
            weatherForecast1.appendChild(humidity);

            // Day two of forecast 
            console.log(data.list[1].main.temp);
            console.log(data.list[1].wind.speed);
            console.log(data.list[1].main.humidity);

            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humidity = document.createElement("p");
            var day = document.createElement("p");


            //clears previous card
            weatherForecast2.innerHTML = "";


            day.textContent = "Day 2"
            temp.textContent = "Temperature " + data.list[1].main.temp + "°F";
            wind.textContent = "Wind Speed: " + data.list[1].wind.speed + "MPH";
            humidity.textContent = "Humidity " + data.list[1].main.humidity + "%";

            weatherForecast2.appendChild(day);
            weatherForecast2.appendChild(temp);
            weatherForecast2.appendChild(wind);
            weatherForecast2.appendChild(humidity);

            // Day three of forecast 
            console.log(data.list[2].main.temp);
            console.log(data.list[2].wind.speed);
            console.log(data.list[2].main.humidity);

            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humidity = document.createElement("p");
            var day = document.createElement("p");


            //clears previous card
            weatherForecast3.innerHTML = "";

            day.textContent = "Day 3"
            temp.textContent = "Temperature " + data.list[2].main.temp + "°F";
            wind.textContent = "Wind Speed: " + data.list[2].wind.speed + "MPH";
            humidity.textContent = "Humidity " + data.list[2].main.humidity + "%";

            weatherForecast3.appendChild(day);
            weatherForecast3.appendChild(temp);
            weatherForecast3.appendChild(wind);
            weatherForecast3.appendChild(humidity);

            // Day four of forecast 
            console.log(data.list[3].main.temp);
            console.log(data.list[3].wind.speed);
            console.log(data.list[3].main.humidity);

            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humidity = document.createElement("p");
            var day = document.createElement("p");

            //clears previous card
            weatherForecast4.innerHTML = "";

            day.textContent = "Day 4"
            temp.textContent = "Temperature " + data.list[3].main.temp + "°F";
            wind.textContent = "Wind Speed: " + data.list[3].wind.speed + "MPH";
            humidity.textContent = "Humidity " + data.list[3].main.humidity + "%";

            weatherForecast4.appendChild(day);
            weatherForecast4.appendChild(temp);
            weatherForecast4.appendChild(wind);
            weatherForecast4.appendChild(humidity);

            // Day five of forecast 
            console.log(data.list[4].main.temp);
            console.log(data.list[4].wind.speed);
            console.log(data.list[4].main.humidity);

            var temp = document.createElement("p");
            var wind = document.createElement("p");
            var humidity = document.createElement("p");
            var day = document.createElement("p");

            //clears previous card
            weatherForecast5.innerHTML = "";


            day.textContent = "Day 5"
            temp.textContent = "Temperature " + data.list[4].main.temp + "°F";
            wind.textContent = "Wind Speed: " + data.list[4].wind.speed + "MPH";
            humidity.textContent = "Humidity " + data.list[4].main.humidity + "%";

            weatherForecast5.appendChild(day);
            weatherForecast5.appendChild(temp);
            weatherForecast5.appendChild(wind);
            weatherForecast5.appendChild(humidity);
        })

    // Adds classes to the weather forecast divs for basic styling git 

    weatherForecast.classList.add("weatherCardContainer");
    weatherForecast1.classList.add("weatherCard");
    weatherForecast2.classList.add("weatherCard");
    weatherForecast3.classList.add("weatherCard");
    weatherForecast4.classList.add("weatherCard");
    weatherForecast5.classList.add("weatherCard");




};


searchButton.addEventListener("click", getWeather);
