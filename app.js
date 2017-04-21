angular.module('clApp', ['ngMap', 'ngAnimate'])
  .controller('mainCtrl', function($scope, NgMap) {
    $scope.active = "home";

    $scope.timeslots = [
        {
            time: 8,
            title: "Save Water",
            details: "Turn off the faucet, and reduce water usage by adjusting your daily routine.",
            map: false,
            icon: "water-drop",
            url: "http://savethedropla.com/"
        },
        {
            time: 8,
            title: "Reduce Traffic",
            details: "Take advantage of LA's bikeshare program and bike to work/school.",
            map: true,
            icon: "car",
            url: "https://bikeshare.metro.net/"
        },
        {
            time: 8,
            title: "Appreciate Nature",
            details: "Eat lunch at a local park, and help clean up the environment by picking up trash - link to recycling initiatives and map of all parks.",
            map: true,
            icon: "tree",
            url: ""
        },
        {
            time: 8,
            title: "Reduce Air Pollution",
            details: "Instead of driving alone, take these public transportation options… or carpool!",
            map: false,
            icon: "co2",
            url: "http://ladot.lacity.org/"
        },
        {
            time: 8,
            title: "Support Local Produce",
            details: "Need to go grocery shopping? Check out these local farmers markets for fresh, locally sourced produce to limit your carbon footprint",
            map: true,
            icon: "sprout",
            url: ""
        },
        {
            time: 8,
            title: "Keep Beaches Clean",
            details: "For some post-work stress relief, volunteer at a beach cleanup event",
            map: false,
            icon: "gas-mask",
            url: "https://data.lacity.org/A-Livable-and-Sustainable-City/Office-of-Community-Beautification/5yt3-wwnt"
        },
        {
            time: 8,
            title: "Save Energy",
            details: "Time to turn on the lights… is your house energy efficient?",
            map: false,
            icon: "electric-tower",
            url: "http://performance.lacity.org/"
        }
    ];

    $scope.mapStyle = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ];

    $scope.goto = function(page, data) {
      $scope.active = page;
      if($scope.active == 'map') {
        $scope.title = data.title;
        $scope.info = data.details;
        $scope.url = data.url;
        $scope.icon = data.icon;
      }


      if(data && data.map) {
        $scope.showMap = data.map;
        NgMap.getMap().then(function(map) {
          map.data.forEach(function (feature) {
            map.data.remove(feature);
          });

          if($scope.icon == "tree") {
            map.data.loadGeoJson('https://geohub.lacity.org/datasets/44546f03b92549e6b34574d9152af0fa_4.geojson');
            map.data.setStyle(function(feature) {
              return {
                icon: {
                    url:'assets/img/icons/childhood.png'
                },
                visible: true,
                clickable: true,
              };
            });
            map.data.addListener('click', function(event) {
              $scope.infoName = event.feature.getProperty('FACNAME');
              $scope.infoAddy1 = "";
              $scope.infoAddy2 = event.feature.getProperty('FACAREA');
              map.showInfoWindow('myInfoWindow', event.latLng);
            });
          } else if($scope.icon == "car") {
            map.data.loadGeoJson('https://geohub.lacity.org/datasets/230abc621b144dbc96cca83d65bd454d_0.geojson');
            map.data.setStyle(function(feature) {
              return {
                fillColor: '#84C44A',
                strokeColor: '#84C44A',
                strokeOpacity: 1,
                strokeWeight: 2,
                visible: true,
                clickable: true,
              };
            });
          } else {
            map.data.loadGeoJson('https://geohub.lacity.org/datasets/a050296610ee4cc7bea41e66196d9bb0_40.geojson?where=&geometry={"xmin":-13951254.333030073,"ymin":3820005.993082375,"xmax":-12385823.993750079,"ymax":4186903.7288511232,"spatialReference":{"wkid":102100,"latestWkid":3857}}');
            map.data.setStyle(function(feature) {
              return {
                icon: {
                    url:'assets/img/icons/carrot.png'
                },
                visible: true,
                clickable: true,
              };
            });
            map.data.addListener('click', function(event) {
              $scope.infoName = event.feature.getProperty('Name');
              $scope.infoAddy1 = event.feature.getProperty('addrln1');
              $scope.infoAddy2 = event.feature.getProperty('addrln2');
              map.showInfoWindow('myInfoWindow', event.latLng);
            });
          }
          map.setZoom(11);

          google.maps.event.addListenerOnce(map, 'idle', function() {
              google.maps.event.trigger(map, 'resize');
          });

        });
      }
    };
  });