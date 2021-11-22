


// Load google map
function loadScript() {
	$.ajax({
		type: "GET",
		url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ6apCT_bhlnBNpUJxJ5_qVr4nHdL-FkQ&callback=initMap",
		dataType: "script"
	});
}

var map;
function initMap() {
    var lat;
    var lng;
	map = new google.maps.Map(document.getElementById('google-maps'), {
		center: {
            lat: 17.503964, lng: 78.509603   
        },
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 12
                    },
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 80
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "Lightness": -20
                    }
                ] 
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 1
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    }
                ]
            }
        ]
	});
}

$(window).on('load', function() {
	setTimeout(function() {
        try{
            loadScript();
        }catch(err){
            console.log(err);
        }
	}, 4000);
});































