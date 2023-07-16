"use strict";

$(() => {


    // GLOBAL VARIABLES
    const map = initializeMap();
    const marker = createMarker();


    // Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';


    // Simple way to create URL for request based on coordinates
    const ALAMO_COORDINATES = ['29.4260', '-98.4861'];
    const URL = getWeatherURL(...ALAMO_COORDINATES);


// Variables for HTML Info
    const nameOfCity = document.querySelector('#city-name')
    const humidityForCity = document.querySelector('#humidity')
    const dateTimeForCity = document.querySelector('#dateTime')
    const descriptionForCity = document.querySelector('#description')
    const minMaxTempForCity = document.querySelector('#min-max-temp')
    const windForCity = document.querySelector('#wind')
    const pressureForCity = document.querySelector('#pressure')


    // FUNCTIONS
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

    // Functions for HTML info
    function renderDivCity (cityName) {
        nameOfCity.innerHTML =
            `<h4>${cityName}</h4>`
    }
    function renderDivDateTime (cityDateTime) {
        dateTimeForCity.innerHTML =
            `<p>${cityDateTime}</p>`
    }

    function renderDivHumidity (cityHumidity) {
        humidityForCity.innerHTML =
            `<p>${cityHumidity}</p>`
    }
    function renderDivDescription (cityDescription) {
        descriptionForCity.innerHTML =
            `<p>${cityDescription}</p>`
    }
    function renderDivTemp (cityTemp) {
        minMaxTempForCity.innerHTML =
            `<p>${cityTemp}</p>`
    }
    function renderDiv (cityName) {
        ForCity.innerHTML =
            `<p>Current City: ${cityName}</p>`
    }




    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }










    // Functions for displaying card info
    $.ajax(URL).done(data => {
        renderDivCity(data.city.name);
    }).fail(console.error);

    $.ajax(URL).done(data => {
        renderDivDateTime(data.list[0].dt_txt);
    }).fail(console.error);

    $.ajax(URL).done(data => {
        renderDivHumidity(data.list[0].main.humidity);
    }).fail(console.error);

    $.ajax(URL).done(data => {
        renderDivDescription(data.list[0].weather[0].description);
    }).fail(console.error);

    // $.ajax(URL).done(data => {
    //     renderDivTemp (data.list[0].main.humidity);
    // }).fail(console.error);

    $.ajax(URL).done(data => {
        renderDiv (data.list[0].main.humidity);
    }).fail(console.error);



    // log the min and max temp for each day
    $.ajax(getWeatherURL(...ALAMO_COORDINATES))
        .done(data => {
            console.log(data);
            const minMaxTemps = returnMinMaxTemps(data);
            minMaxTemps.forEach(minMaxTemp => {
                console.log('min and max for each day: ', minMaxTemp);
            });
        })
        .fail(console.error);

// // TODO: log the humidity for all days
//
//     $.ajax(getWeatherURL(...ALAMO_COORDINATES))
//         .done((data) => {
//
//             data.list.forEach((day, index) => {
//                 if (index % 8 === 0) {
//                     console.log('humidity for all days: ', day.main.humidity);
//                 }
//             });
//
//             // OR
//
//             //     for (let i = 0; i < data.list.length; i += 8) {
//             //         console.log(data.list[i].main.humidity);
//             //     }
//             //
//         })
//     // .fail(console.error);


    // // TODO: log full response from API
    //
    // $.ajax(URL).done(data => {
    //     console.log(data);
    // }).fail(console.error);
    //
    // // TODO: log URL
    //
    // console.log(getWeatherURL(ALAMO_COORDINATES[0], ALAMO_COORDINATES[1]));

    // // TODO: log various parts of the API
    //
    $.ajax(URL).done(data => {
        console.log(data);
        //     // TODO: log the city name
        console.log('city name: ', data.city.name);
        //     // TODO: log the first three-hour forecast block
        console.log('3-hour forecast: ', data.list[0]);
        //     // TODO: log the humidity for the first three-hour block
        console.log('humidity 3-hour forecast: ', data.list[0].main.humidity);
    }).fail(console.error);





    // EVENTS



})

// 1. create a function that displays info to HTML with the following:
//     - date
//     - time
//     - min/max temp
//     - description
//     - humidity
//     - wind
//     - pressure