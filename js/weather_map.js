"use strict";

$(() => {

    ///////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////// GLOBAL VARIABLES //////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////

    const map = initializeMap();
    const marker = createMarker();


    // Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';


    // Simple way to create URL for request based on coordinates
    const ALAMO_COORDINATES = ['29.4260', '-98.4861'];
    const URL = getWeatherURL(...ALAMO_COORDINATES);

    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////// FUNCTIONS ///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////

    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252]
        }
        return new mapboxgl.Map(mapOptions);
    }

    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }

    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }


    // Request for displaying card info
    $.ajax(getWeatherURL(...ALAMO_COORDINATES))
        .done((data) => {
        })
        .fail(console.error);


    $.ajax(URL).done((data) => {
        renderWeatherCards(data);
        renderTodayWeather(data);
    })


    // Function for top row weather card
    function renderTodayWeather(todaysWeather) {
        const todayContainer = document.querySelector(".top-card-info")
        const todayWeatherCard = document.createElement('div');
        todayWeatherCard.innerHTML = `
        <div class= "weather-boxes">
            <p>${todaysWeather.list[0].dt_txt}</p>
             <p>${todaysWeather.list[0].main.temp_min}/${todaysWeather.list[0].main.temp_max}</p>
             <p>Description: ${todaysWeather.list[0].weather[0].description}</p>
             <p>Humidity: ${todaysWeather.list[0].main.humidity}</p>
             <p>Wind: ${todaysWeather.list[0].wind.speed}</p>
             <p>Pressure: ${todaysWeather.list[0].main.pressure}</p>
        </div>
        `;
        todayContainer.appendChild(todayWeatherCard);
    }


    // Function for Bottom row weather cards
    function renderWeatherCards (weatherInformation) {
        const weatherCardsContainer = document.querySelector(".bottom-card-info")
        for (let i = 1; i < weatherInformation.list.length; i += 8) {
            console.log(weatherInformation.list[i])
            const weatherCard = document.createElement('div');
            weatherCard.innerHTML = `
            <div class="weather-boxes">
                <p>${weatherInformation.list[i].dt_txt}</p>
                <p>${weatherInformation.list[i].main.temp_min}/${weatherInformation.list[i].main.temp_max}</p>
                <p>Description: ${weatherInformation.list[i].weather[0].description}</p>
                <p>Humidity: ${weatherInformation.list[i].main.humidity}</p>
                <p>Wind: ${weatherInformation.list[i].wind.speed}</p>
                <p>Pressure: ${weatherInformation.list[i].main.pressure}</p>
            </div>
            `;
            weatherCardsContainer.appendChild(weatherCard);
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////// EVENTS ///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////



})

