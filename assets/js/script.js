var searchFormElement = document.querySelector("#search-form");
var searchButton = document.getElementById("search-btn");

function getApi() {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1585e0bbf2dbcb702a5708a67bf3b74d";

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

        })


};


searchButton.addEventListener("click", getApi);



