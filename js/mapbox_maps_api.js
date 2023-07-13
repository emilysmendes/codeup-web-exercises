$(() => {

    // Global Variables
    const map = initializeMap()


    // Functions
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 15,
            center: [-122.034951, 37.977132]
        }
        return new mapboxgl.Map(mapOptions);
    }







    // Events



})