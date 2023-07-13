$(() => {

    //Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    //Functions
    //Function that initialize the map
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

    //function that creates marker at Codeup
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }


    // function that creates a popup at codeup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>
                    <h1>Codeup</h1>
                    <p>Whatever we want to say</p>
                </div>
            `);
    }


    //function that brings me to paris
    function goToParis () {
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    // function that reverses geocode
    //takes the coordinates from the center of the map
    // and print on the screen the address
    function findAndPrintCoords () {
        const coords = map.setCenter();
        console.log(coords)
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML= `${data}`
        })
}

    //function that uses geocode and takes the string The Alamo, San Antonio and gets coordinates to set a marker and pop at that location
    function markAlamo () {
        geocode('The Alamo, San Antionio', MAPBOX_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML(`<p>Remember the Alamo</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup);
            alamoPopup.addTo(map);
        })
    }


    // Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis)
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintCoords)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo)




    // Runs when the program loads
    // map.setZoom(1);
    marker.setPopup(popup);


})