$(() => {


    // GLOBAL VARIABLES
    const map = initializeMap();





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




    // EVENTS




})