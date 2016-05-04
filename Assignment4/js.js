/**
 * Created by apple on 16/5/3.
 */
function initMapSheffield() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 53.3809441, lng: -1.4901409},
        //53.3809441,-1.4901409
        scrollwheel: false,
        zoom: 8
    });
}

function initMapPortland() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat:45.5425909, lng: -122.7948506},
        //45.5425909,-122.7948506
        scrollwheel: false,
        zoom: 8
    });
}

function initMapShanghai() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 31.2243024, lng: 120.9148922},
        //31.2243024,120.9148922
        scrollwheel: false,
        zoom: 8
    });
}

function initMapHongkong() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 22.3580711, lng: 113.8401307},
        //22.3580711,113.8401307
        scrollwheel: false,
        zoom: 8
    });
}

function initMapSeoul() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 37.565289, lng: 126.8491203},
        //37.565289,126.8491203
        scrollwheel: false,
        zoom: 8
    });
}

function initMapLondon() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 51.5287336, lng: -0.3824703},
        //51.5287336,-0.3824703
        scrollwheel: false,
        zoom: 9
    });
}