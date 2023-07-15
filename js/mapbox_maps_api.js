$(() => {

    // Global Variables
    const map = initializeMap()
    const marker = createMarker()
    const popup = createPopup()
    const favoriteRestaurants = [
        {
            name: 'Naan N Curry',
            info: 'Relaxed but welcoming eatery known for traditional plates of Indian & Pakistani cuisine.',
            favoriteDish: 'Chicken Tikka Masala with Garlic Naan',
            coordinates: [ -122.03497578990506, 37.97719637541902]
        },
        {
            name: 'Mingles Pizza',
            info: 'Hand-tossed pizzas galore plus calzones & pasta dished up in simple digs with counter service.',
            favoriteDish: 'Pesto Supreme Pizza and Bocci Bits',
            coordinates: [-122.06807402795437, 37.98291615640793]
        },
        {
            name: 'Heavenly Bistro',
            info: 'American comfort foods are served up in a quaint setting offering coffee drinks & cocktails.',
            favoriteDish: 'Roasted Chicken Gruyere sandwich and Heavenly Crepes',
            coordinates: [-122.0580340728645, 37.932685210476144]
        },
    ]
    const restaurantLoop = createLoop()


    // Functions

    //create map interface, display on HTML
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 13,
            center: [-122.031038, 37.977448]
        }
        return new mapboxgl.Map(mapOptions);
    }


    //Create marker for fav restaurant
    function createMarker () {
        return new mapboxgl.Marker()
            .setLngLat([-122.035038, 37.977188])
            .addTo(map)

    }

    //Create pop-up for fav restaurant
    function createPopup () {
        return new mapboxgl.Popup()
            .setLngLat([-122.035038, 37.977188])
            .setHTML(`
                <div>
                    <h1>Naan N Curry</h1>
                </div>
            `);
    }

    //Create loop to cycle through favorite restaurants
    function createLoop () {

    }




    // Events


    marker.setPopup(popup);
    marker.setPopup(restaurantLoop)
})


