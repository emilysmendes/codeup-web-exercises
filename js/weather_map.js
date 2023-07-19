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
    //
    // const darkModeSetting = document.getElementById("#dark-mode")

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


    // Requests for displaying info
    // $.ajax(getWeatherURL(...ALAMO_COORDINATES))
    //     .done((data) => {
    //         console.log(data);
    //     })
    //     .fail(console.error);


    $.ajax(URL).done((data) => {
        renderWeatherCards(data);
        renderTodayWeather(data);
    })

    $.ajax(URL).done((data) => {
        getCurrentCity(data);
    })

    $.ajax(URL).done((data) => {
        goToNewCity(data);
    })


    // Function for top row weather card
    function renderTodayWeather(todaysWeather) {
        console.log(todaysWeather);
        const todayContainer = document.querySelector(".top-card-info")
        const todayWeatherCard = document.createElement('div');
        todayContainer.innerHTML ="";
        todayWeatherCard.innerHTML = `
        <div class= "weather-boxes">
            <p>${todaysWeather.list[0].dt_txt}</p>
             <p>${todaysWeather.list[0].main.temp_min}/${todaysWeather.list[0].main.temp_max}</p>
             <img src="http://openweathermap.org/img/w/${todaysWeather.list[0].weather[0].icon}.png"
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
        console.log(weatherInformation);
        const weatherCardsContainer = document.querySelector(".bottom-card-info");
        weatherCardsContainer.innerHTML = "";
        for (let i = 8; i < weatherInformation.list.length; i += 8) {
            console.log(weatherInformation.list[i])
            const weatherCard = document.createElement('div');
            weatherCard.innerHTML = `
            <div class="weather-boxes">
                <p>${weatherInformation.list[i].dt_txt}</p>
                <p>${weatherInformation.list[i].main.temp_min}/${weatherInformation.list[i].main.temp_max}</p>
                <img src="http://openweathermap.org/img/w/${weatherInformation.list[i].weather[0].icon}.png">
                <p>Description: ${weatherInformation.list[i].weather[0].description}</p>
                <p>Humidity: ${weatherInformation.list[i].main.humidity}</p>
                <p>Wind: ${weatherInformation.list[i].wind.speed}</p>
                <p>Pressure: ${weatherInformation.list[i].main.pressure}</p>
            </div>
            `;
            weatherCardsContainer.appendChild(weatherCard);
        }

    }


    function getCurrentCity(lon, lat) {
        console.log("inside getCurrentCity")
        const url = getWeatherURL(lon, lat);
        $.get(url).done((data) => {
            renderWeatherCards(data);
            renderTodayWeather(data);
            const currentCity = data.city.name;
            $('#city-name').html(currentCity)
        })
        ;
    }

    function goToNewCity (data) {
        console.log(data.city.coord.lon)
        console.log(data.city.coord.lat)
        console.log("inside go to new city")
        const lat = data.city.coord.lat
        const lon = data.city.coord.lon
        const url = getWeatherURL(lon, lat)
        console.log(url)
        $.ajax(url).done((data) => {
            renderWeatherCards(data);
            renderTodayWeather(data)
        })
    }
    ///////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////// EVENTS ///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////

    $('#search-button').click(function () {
        const userInput = $('#search-input').val();
        geocode(userInput, MAPBOX_TOKEN).then((data) => {
            const popup = new mapboxgl.Popup()
            const marker = new mapboxgl.Marker()
                .setLngLat(data)
                .setPopup(popup)
                .addTo(map);
            popup.addTo(map);

            map.flyTo({
                center: data,
                zoom: 10,
                speed: 1.25,
                essential: true
            });
            getCurrentCity(data[1],data[0]);
        });
    });


    const darkMode = document.querySelector("#dark-mode")
    darkMode.addEventListener("click", () => {
        const body = document.querySelector("body");
        let mode = body.getAttribute('data-theme');
        if (mode === "dark-mode") {
            body.removeAttribute("data-theme")
        } else {
            body.setAttribute("data-theme", "dark-mode")
        }
    })


})

