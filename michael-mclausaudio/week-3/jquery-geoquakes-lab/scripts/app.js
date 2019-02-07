let weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";




$(document).ready(function() {

    let topEarthQuake;

    $.ajax({
        method: "GET",
        url: `${weekly_quakes_endpoint}`,
        success: onSuccess,
        error: onError
    });
    function onSuccess(json) {
        // for(let i = 0; i< json.features.length; i++){
        //   console.log(i)
        //   console.log(json.features[i].properties.place)
        // }
        console.log(json);
        initMap();

        json.features.forEach(function(quake) {
            $('#info').append(`
                        <div id="quake">
                          <p>${quake.properties.mag} magnitude - ${quake.properties.place}</p>
                        </div>
                        `)
            var marker = new google.maps.Marker({position: {
              lat: quake.geometry.coordinates[1],
              lng: quake.geometry.coordinates[0]
            },
            icon: {
              url: "images/earthquake.png",
              scaledSize: new google.maps.Size(30, 30)
            },
            map: map
            })
        });
    }

    function onError(error) {
        console.log(error);
    }

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 37.78,
                lng: -122.44
            },
            zoom: 8
        });
        // var marker = new google.maps.Marker({position: topEarthQuake, map: map});
    }

});
