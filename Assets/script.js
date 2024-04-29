const submitButton = document.querySelector(".submit");

function renderWeather (weather){
    console.log(weather);

    var resultsContainer = document.querySelector('#weather-results');
    //create h2 for name
    var city = document.createElement('h2');
    city.textContent = weather.name;
    resultsContainer.append(city);
    
    //create p tag for humidity,wind,description,tempature
    var temp = document.createElement('p');
    temp.textContent = 'Temp:' + weather.main.temp + 'F';
    resultsContainer.append(temp);

    var humidity= document.createElement('p');
    humidity.textContent = 'Humidity:' + weather.main.humidity + '%';
    resultsContainer.append(humidity);

    var wind = document.createElement('p');
    wind.textContent = 'Wind:' + weather.wind.speed + ' mph, '+ weather.wind.deg + '°';
    resultsContainer.append(wind);

    var feels = document.createElement('p');
    feels.textContent = 'Feels like: ' + weather.main.feels_like + 'F';
    resultsContainer.append(feels);


    
}
//fetching the api for city name 
function fetchWeather(query){

    const url ='https://api.openweathermap.org/data/2.5/weather?q='+query+'&units=imperial&appid=bdb92833e9ffe0c191530c632b403a41';

    fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));

}
let searchBar = document.querySelector('.searchBar');

submitButton.addEventListener('click', function(event){
        event.preventDefault(); // Prevent default form submission behavior
        const query = searchBar.value;
        fetchWeather(query);
});