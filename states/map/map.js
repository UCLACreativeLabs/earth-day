/* global angular */
angular.module('ua5App.map', ['ngMap'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('map', {
            url: '/map',
            params: {
                time: null,
                title: {
                    value: "Support Local Produce"
                },
                details: {
                    value: "Need to go grocery shopping? Check out these local farmers markets for fresh, locally sourced produce to limit your carbon footprint"
                },
                map: {
                    value: "farmerData"
                },
                icon: {
                    value: "sprout"
                },
                url: null
            },
            templateUrl: 'states/map/map.html',
            controller: 'mapCtrl',
            controllerAs: 'ctrl'
        });
    }])
    .controller('mapCtrl', ['$timeout', 'NgMap', '$scope', '$stateParams', function($timeout, NgMap, $scope, $stateParams) {
        $scope.farmerData = [
 {
   "X": -118.5537908,
   "Y": 34.23920054,
   "Name": "Northridge Certified Farmers' Market And Family Festival",
   "addrln1": "9301 Tampa Ave",
   "addrln2": "Northridge Fashion Center",
   "city": "Northridge",
   "state": "CA",
   "hours": "SITE HOURS: April through October, Wednesday, 5:00pm to 9:00pm. ",
   "latitude": 34.23920057,
   "longitude": -118.5537907,
   "POINT_X": 6394296.089,
   "POINT_Y": 1909891
 },
 {
   "X": -118.1573491,
   "Y": 34.11574597,
   "Name": "South Pasadena Certified Farmers' Market",
   "addrln1": "Meridan Ave. & Mission St.",
   "addrln2": "",
   "city": "South Pasadena",
   "state": "CA",
   "hours": "SITE HOURS: March through December, Thursday, 4:00pm to 8:00pm; January and February, Thursday, 4:00pm to 7:00pm. ",
   "latitude": 34.115746,
   "longitude": -118.157349,
   "POINT_X": 6514043.6,
   "POINT_Y": 1864539.85
 },
 {
   "X": -118.1856105,
   "Y": 33.94206568,
   "Name": "South Gate Certified Farmers' Market",
   "addrln1": "4855 Tweedy Blvd",
   "addrln2": "South Gate Park| Parking Lot 3",
   "city": "South Gate",
   "state": "CA",
   "hours": "",
   "latitude": 33.94206571,
   "longitude": -118.1856104,
   "POINT_X": 6505372.679,
   "POINT_Y": 1801348.816
 },
 {
   "X": -118.4976989,
   "Y": 34.01699025,
   "Name": "Santa Monica Saturday Certified Farmers' Market",
   "addrln1": "Arizona Ave & 3Rd St Prom",
   "addrln2": "",
   "city": "Santa Monica",
   "state": "CA",
   "hours": "",
   "latitude": 34.01699028,
   "longitude": -118.4976988,
   "POINT_X": 6410848.411,
   "POINT_Y": 1828936.849
 },
 {
   "X": -118.4225003,
   "Y": 34.14632553,
   "Name": "Studio City Certified Farmers' Market",
   "addrln1": "Ventura Blvd & Ventura Blvd",
   "addrln2": " ",
   "city": "Studio City",
   "state": "CA",
   "hours": "",
   "latitude": 34.14632556,
   "longitude": -118.4225002,
   "POINT_X": 6433834.174,
   "POINT_Y": 1875899.699
 },
 {
   "X": -118.3748671,
   "Y": 33.77666197,
   "Name": "Palos Verdes Certified Farmers' Market",
   "addrln1": "Hawthorne Blvd. & Silver Spur Rd.",
   "addrln2": "Peninsula Center",
   "city": "Rolling Hills Estates",
   "state": "CA",
   "hours": "",
   "latitude": 33.776662,
   "longitude": -118.374867,
   "POINT_X": 6447744.808,
   "POINT_Y": 1741314.727
 },
 {
   "X": -118.1428821,
   "Y": 34.15506997,
   "Name": "Pasadena Villa Parke Certified Farmers' Market",
   "addrln1": "363 E. Villa St.",
   "addrln2": "",
   "city": "Pasadena",
   "state": "CA",
   "hours": "",
   "latitude": 34.15507,
   "longitude": -118.142882,
   "POINT_X": 6518442.84,
   "POINT_Y": 1878844.022
 },
 {
   "X": -118.5251106,
   "Y": 34.04828593,
   "Name": "Pacific Palisades Certified Farmers' Market",
   "addrln1": "1037 N Swarthmore Ave",
   "addrln2": "",
   "city": "Pacific Palisades",
   "state": "CA",
   "hours": "Sunday, 8:00am to 1:00pm. ",
   "latitude": 34.04828596,
   "longitude": -118.5251105,
   "POINT_X": 6402601.181,
   "POINT_Y": 1840368.074
 },
 {
   "X": -117.7503666,
   "Y": 34.06454881,
   "Name": "Pomona Valley Certified Farmers' Market",
   "addrln1": "N Garey Ave & W Pearl St",
   "addrln2": "",
   "city": "Pomona",
   "state": "CA",
   "hours": "Saturday, 7:30am to 11:30am. ",
   "latitude": 34.06454884,
   "longitude": -117.7503665,
   "POINT_X": 6637276.148,
   "POINT_Y": 1845964.85
 },
 {
   "X": -118.3510676,
   "Y": 34.09257591,
   "Name": "West Hollywood Certified Farmers' Market",
   "addrln1": "7377 Santa Monica Blvd",
   "addrln2": "",
   "city": "West Hollywood",
   "state": "CA",
   "hours": "Monday, 9:00am to 2:00pm. ",
   "latitude": 34.09257594,
   "longitude": -118.3510675,
   "POINT_X": 6455379.198,
   "POINT_Y": 1856256.169
 },
 {
   "X": -118.1920057,
   "Y": 34.10997716,
   "Name": "Old Los Angeles Certified Farmers' Market",
   "addrln1": "S Ave 58 & N Figueroa St",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Tuesday, 3:00am to 7:00pm. ",
   "latitude": 34.10997719,
   "longitude": -118.1920056,
   "POINT_X": 6503549.669,
   "POINT_Y": 1862458.705
 },
 {
   "X": -118.3733725,
   "Y": 34.08327832,
   "Name": "Melrose Place Certified Farmers' Market",
   "addrln1": "8400 Melrose Pl",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sunday, 10:00am to 2:00pm. ",
   "latitude": 34.08327835,
   "longitude": -118.3733724,
   "POINT_X": 6448613.506,
   "POINT_Y": 1852896.959
 },
 {
   "X": -118.4379155,
   "Y": 34.15712633,
   "Name": "Woodman Avenue Certified Farmers' Market",
   "addrln1": "14006 Riverside Dr",
   "addrln2": "Westfield Sherman Oaks parking lot",
   "city": "Sherman Oaks",
   "state": "CA",
   "hours": "Tuesday, 3:00pm to 8:00pm. ",
   "latitude": 34.15712636,
   "longitude": -118.4379154,
   "POINT_X": 6429187.141,
   "POINT_Y": 1879850.232
 },
 {
   "X": -118.4493902,
   "Y": 34.05700949,
   "Name": "Westwood Certified Farmers' Market",
   "addrln1": "11000 Wilshire Blvd",
   "addrln2": "United States Veterans Administration - Vets Garden",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, 12:00pm to 6:00pm. ",
   "latitude": 34.05700952,
   "longitude": -118.4493901,
   "POINT_X": 6425552.817,
   "POINT_Y": 1843431.528
 },
 {
   "X": -118.2629639,
   "Y": 33.78670699,
   "Name": "Wilmington Certified Farmers' Market",
   "addrln1": "N Avalon Blvd & E L St",
   "addrln2": "",
   "city": "Wilmington",
   "state": "CA",
   "hours": "Thursday, 9:00am to 1:00pm. ",
   "latitude": 33.78670702,
   "longitude": -118.2629638,
   "POINT_X": 6481762.688,
   "POINT_Y": 1744862.482
 },
 {
   "X": -118.2780321,
   "Y": 34.09044245,
   "Name": "Silverlake Certified Farmers' Market",
   "addrln1": "3700 W Sunset Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, 8:00am to 1:00pm. ",
   "latitude": 34.09044248,
   "longitude": -118.278032,
   "POINT_X": 6477489.617,
   "POINT_Y": 1855410.569
 },
 {
   "X": -118.5990181,
   "Y": 34.19769397,
   "Name": "Topanga Westfield Certified Farmers' Market",
   "addrln1": "6600 Topanga Blvd.",
   "addrln2": "",
   "city": "Canoga Park",
   "state": "CA",
   "hours": "Saturday, 10:00am to 2:00pm. ",
   "latitude": 34.197694,
   "longitude": -118.599018,
   "POINT_X": 6380537.013,
   "POINT_Y": 1894864.661
 },
 {
   "X": -118.2540886,
   "Y": 33.94327915,
   "Name": "Watts Healthy Certified Farmers' Market",
   "addrln1": "E 103Rd St & S Central Ave",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, 10:00am to 2:00pm. ",
   "latitude": 33.94327918,
   "longitude": -118.2540885,
   "POINT_X": 6484603.681,
   "POINT_Y": 1801835.85
 },
 {
   "X": -117.9286074,
   "Y": 34.06840919,
   "Name": "West Covina Certified Farmers' Market",
   "addrln1": "1035 W Covina Pkwy",
   "addrln2": "",
   "city": "West Covina",
   "state": "CA",
   "hours": "Saturday, 8:00am to 1:00pm. ",
   "latitude": 34.06840922,
   "longitude": -117.9286073,
   "POINT_X": 6583291.864,
   "POINT_Y": 1847283.508
 },
 {
   "X": -117.9623342,
   "Y": 34.03963558,
   "Name": "Valinda / La Puente Certified Farmers' Market",
   "addrln1": "747 N. Rimgrove Drive",
   "addrln2": "Rimgrove Park",
   "city": "La Puente",
   "state": "CA",
   "hours": "Thursdays, April-September 10:00am to 3:00pm. ",
   "latitude": 34.03963561,
   "longitude": -117.9623341,
   "POINT_X": 6573081.507,
   "POINT_Y": 1836806.692
 },
 {
   "X": -118.2770592,
   "Y": 34.08987035,
   "Name": "Silverlake Tuesday Certified Farmers' Market",
   "addrln1": "1500 Griffith Park Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Tuesdays, April through December 2:00 pm to 7:30 pm",
   "latitude": 34.08987038,
   "longitude": -118.2770591,
   "POINT_X": 6477783.611,
   "POINT_Y": 1855201.559
 },
 {
   "X": -117.8027243,
   "Y": 34.1066647,
   "Name": "San Dimas Certified Farmers' Market",
   "addrln1": "245 E Bonita Ave & N Walnut Ave",
   "addrln2": "",
   "city": "San Dimas",
   "state": "CA",
   "hours": "Wednesdays, April through September, 5:00pm to 9:00pm. ",
   "latitude": 34.10666473,
   "longitude": -117.8027242,
   "POINT_X": 6621388.655,
   "POINT_Y": 1861256.337
 },
 {
   "X": -118.0578635,
   "Y": 34.10769028,
   "Name": "Temple City Certified Farmers' Market",
   "addrln1": "9701 Las  Tunas Dr",
   "addrln2": "City Hall parking lot",
   "city": "Temple City",
   "state": "CA",
   "hours": "Sundays, yeaar-round, 8:30am to 12:30pm. ",
   "latitude": 34.10769031,
   "longitude": -118.0578634,
   "POINT_X": 6544154.418,
   "POINT_Y": 1861576
 },
 {
   "X": -118.0929091,
   "Y": 34.16039797,
   "Name": "Pasadena Victory Park Certified Farmers' Market",
   "addrln1": "2900 N. Sierra Madre Blvd between Paloma and Washington Avenues",
   "addrln2": "Victory Park",
   "city": "Pasadena",
   "state": "CA",
   "hours": "",
   "latitude": 34.160398,
   "longitude": -118.092909,
   "POINT_X": 6533563.447,
   "POINT_Y": 1880765.246
 },
 {
   "X": -118.4462264,
   "Y": 34.06167512,
   "Name": "Westwood Village Certified Farmers' Market",
   "addrln1": "1050 Broxton Ave",
   "addrln2": "Between Weyburn & Kinross Ave",
   "city": "Westwood",
   "state": "CA",
   "hours": "Sundays, year-round 10:00am to 3:00pm",
   "latitude": 34.06167515,
   "longitude": -118.4462263,
   "POINT_X": 6426518.644,
   "POINT_Y": 1845125.155
 },
 {
   "X": -118.3537823,
   "Y": 34.15222329,
   "Name": "Toluca Lake Certified Farmers' Market",
   "addrln1": "Sancola Ave & Riverside Dr",
   "addrln2": "",
   "city": "Toluca Lake",
   "state": "CA",
   "hours": " Sundays, year-round. 9:00am to 2:00pm",
   "latitude": 34.15222332,
   "longitude": -118.3537822,
   "POINT_X": 6454633.683,
   "POINT_Y": 1877965.702
 },
 {
   "X": -118.1338708,
   "Y": 33.88367574,
   "Name": "Bellflower Certified Farmers' Market",
   "addrln1": "16614 Clark Ave at Oak Street",
   "addrln2": " ",
   "city": "Bellflower",
   "state": "CA",
   "hours": "Mondays, year-round 9:00am - 1:00pm",
   "latitude": 33.88367577,
   "longitude": -118.1338707,
   "POINT_X": 6521037.582,
   "POINT_Y": 1780074.455
 },
 {
   "X": -118.4160179,
   "Y": 33.95652842,
   "Name": "Westchester Park Certified Farmers' Market",
   "addrln1": "Lincoln Blvd & La Tijera Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesdays, year-round 8:30am to 1:00pm. ",
   "latitude": 33.95652845,
   "longitude": -118.4160178,
   "POINT_X": 6435509.682,
   "POINT_Y": 1806821.216
 },
 {
   "X": -118.3348963,
   "Y": 34.0396426,
   "Name": "Wellington Square Certified Farmer's Market",
   "addrln1": "4394 W Washington Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sundays, year-round, 9:00am to 1:00pm. ",
   "latitude": 34.03964263,
   "longitude": -118.3348962,
   "POINT_X": 6460211.112,
   "POINT_Y": 1836976.121
 },
 {
   "X": -118.3881966,
   "Y": 33.83750929,
   "Name": "Redondo Beach Certified Farmers' Market",
   "addrln1": "Torrance Boulevard, West of Veteran's Park",
   "addrln2": "",
   "city": "Redondo Beach",
   "state": "CA",
   "hours": "Thursdays, year-round, Closed Thanksgiving, 8:00am to 1:00pm",
   "latitude": 33.83750932,
   "longitude": -118.3881965,
   "POINT_X": 6443779.389,
   "POINT_Y": 1763473.924
 },
 {
   "X": -118.0009161,
   "Y": 34.14481845,
   "Name": "Monrovia Certified Farmers' Market - Friday",
   "addrln1": "200 Block of Myrtle Ave",
   "addrln2": "Adjacent to Library Park",
   "city": "Monrovia",
   "state": "CA",
   "hours": "Fridays, year-round, 5:00pm to 9:00pm. ",
   "latitude": 34.14481848,
   "longitude": -118.000916,
   "POINT_X": 6561393.166,
   "POINT_Y": 1875082.587
 },
 {
   "X": -118.2856936,
   "Y": 33.73876518,
   "Name": "San Pedro Certified Farmers' Market",
   "addrln1": "W 6Th St & S Mesa St",
   "addrln2": "Old Town San Pedro, betweeb Mesa and Pacific",
   "city": "San Pedro",
   "state": "CA",
   "hours": "Fridays, year-round, 9:00am to 2:00pm. ",
   "latitude": 33.73876521,
   "longitude": -118.2856935,
   "POINT_X": 6474806.171,
   "POINT_Y": 1727433.98
 },
 {
   "X": -118.3257731,
   "Y": 33.82691727,
   "Name": "Torrance Saturday Certified Farmers' Market",
   "addrln1": "2200 Crenshaw Blvd",
   "addrln2": "Wilson Park",
   "city": "Torrance",
   "state": "CA",
   "hours": "Tuesdays and Saturdays, year-round, 8:00am to 1:00pm. ",
   "latitude": 33.8269173,
   "longitude": -118.325773,
   "POINT_X": 6462724.144,
   "POINT_Y": 1759551.907
 },
 {
   "X": -118.465615,
   "Y": 34.02154473,
   "Name": "Santa Monica Pico Certified Farmers' Market",
   "addrln1": "Cloverfield Blvd & Pico Blvd",
   "addrln2": "",
   "city": "Santa Monica",
   "state": "CA",
   "hours": "Saturdays, year-round, 8:00am to 1:00pm",
   "latitude": 34.02154476,
   "longitude": -118.4656149,
   "POINT_X": 6420578.675,
   "POINT_Y": 1830547.71
 },
 {
   "X": -118.4504524,
   "Y": 34.04574549,
   "Name": "West Los Angeles Certified Farmers' Market",
   "addrln1": "1645 Corinth Avenue at Santa Monica Blvd",
   "addrln2": "West of the 405 Freeway",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sundays, year-round, 9:00am to 2:00pm. ",
   "latitude": 34.04574552,
   "longitude": -118.4504523,
   "POINT_X": 6425212.716,
   "POINT_Y": 1839333.821
 },
 {
   "X": -118.0361561,
   "Y": 33.97911222,
   "Name": "Uptown Whittier Certified Farmers' Market",
   "addrln1": "Bright Ave & Philadelphia St",
   "addrln2": "",
   "city": "Whittier",
   "state": "CA",
   "hours": "Fridays, year-round, 8:00am to 1:00pm. ",
   "latitude": 33.97911225,
   "longitude": -118.036156,
   "POINT_X": 6550708.666,
   "POINT_Y": 1814780.844
 },
 {
   "X": -118.4659934,
   "Y": 33.98756572,
   "Name": "Venice Certified Farmers' Market",
   "addrln1": "N Venice Blvd & Venice Way",
   "addrln2": "",
   "city": "Venice",
   "state": "CA",
   "hours": "Fridays, year-round, 7:00am to 11:00am. ",
   "latitude": 33.98756575,
   "longitude": -118.4659933,
   "POINT_X": 6420406.687,
   "POINT_Y": 1818182.719
 },
 {
   "X": -118.2529202,
   "Y": 34.05325893,
   "Name": "Bank Of America Plaza Certified Farmers' Market",
   "addrln1": "333 S Hope St",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Fridays, year-round, 11:00am to 3:00pm. ",
   "latitude": 34.05325896,
   "longitude": -118.2529201,
   "POINT_X": 6485058.769,
   "POINT_Y": 1841858.737
 },
 {
   "X": -118.6385701,
   "Y": 34.15745697,
   "Name": "Old Town Calabasas Certified Farmers' Market",
   "addrln1": "23504 Calabasas Rd.",
   "addrln2": "at El Canon Ave",
   "city": "Calabasas",
   "state": "CA",
   "hours": "Saturdays, year-round, 8:00am to 1:00pm",
   "latitude": 34.157457,
   "longitude": -118.63857,
   "POINT_X": 6368484.264,
   "POINT_Y": 1880295.609
 },
 {
   "X": -118.4304627,
   "Y": 34.00424922,
   "Name": "Mar Vista Certified Farmers' Market",
   "addrln1": "3826 Grand View Blvd",
   "addrln2": "between Venice Blvd and Pacific Ave",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sundays, year-round, 8:30am to 2:00pm. ",
   "latitude": 34.00424925,
   "longitude": -118.4304626,
   "POINT_X": 6431203.581,
   "POINT_Y": 1824206.103
 },
 {
   "X": -118.2530762,
   "Y": 34.04833939,
   "Name": "Pershing Square Certified Farmers' Market",
   "addrln1": "532 S Olive St",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesdays and Thursdays, year-round, 11:30am to 2:00pm. ",
   "latitude": 34.04833942,
   "longitude": -118.2530761,
   "POINT_X": 6485007.008,
   "POINT_Y": 1840068.548
 },
 {
   "X": -118.2269401,
   "Y": 34.20539531,
   "Name": "Montrose Harvest Market",
   "addrln1": "2200 Block of Honolulu Ave ",
   "addrln2": "",
   "city": "Glendale",
   "state": "CA",
   "hours": "Sundays,  9:00 AM until 2:00 PM",
   "latitude": 34.20539534,
   "longitude": -118.22694,
   "POINT_X": 6493053.325,
   "POINT_Y": 1897205.062
 },
 {
   "X": -118.3257731,
   "Y": 33.82691697,
   "Name": "Torrance Tuesday Certified Farmers' Market",
   "addrln1": "2200 Crenshaw Blvd.",
   "addrln2": "Charles H. Wilson Park",
   "city": "Torrance",
   "state": "CA",
   "hours": "Tuesdays year-round 8:00 a.m. to 1:00 p.m.\nSaturday Year Round 8:00 a.m. to 1:00 p.m.",
   "latitude": 33.826917,
   "longitude": -118.325773,
   "POINT_X": 6462724.143,
   "POINT_Y": 1759551.798
 },
 {
   "X": -118.3177955,
   "Y": 33.9164547,
   "Name": "Gardena Hollypark Certified Farmers' Market",
   "addrln1": "13000 S. Van Ness Ave",
   "addrln2": "",
   "city": "Gardena",
   "state": "CA",
   "hours": "Saturday, 08:00 am to  01:00pm. ",
   "latitude": 33.91645473,
   "longitude": -118.3177954,
   "POINT_X": 6465250.17,
   "POINT_Y": 1792128.846
 },
 {
   "X": -118.4828589,
   "Y": 34.00122379,
   "Name": "Santa Monica Main St. Certified Farmers' Market",
   "addrln1": "2640 Main St",
   "addrln2": "",
   "city": "Santa Monica",
   "state": "CA",
   "hours": "Sunday 9:30 am to 1:00 pm",
   "latitude": 34.00122382,
   "longitude": -118.4828588,
   "POINT_X": 6415317.906,
   "POINT_Y": 1823177.246
 },
 {
   "X": -118.4986258,
   "Y": 34.01623965,
   "Name": "Santa Monica Downtown Certified Farmers' Market",
   "addrln1": "Arizona Ave between 2nd St and 3rd St",
   "addrln2": "",
   "city": "Santa Monica",
   "state": "CA",
   "hours": " Wednesdays, 8:30am to 1:30pm and Saturdays (Organic) 8:30am - 1:00pm ",
   "latitude": 34.01623968,
   "longitude": -118.4986257,
   "POINT_X": 6410566.172,
   "POINT_Y": 1828665.086
 },
 {
   "X": -118.2947694,
   "Y": 34.10171731,
   "Name": "Bransdall Center Farmers' Market",
   "addrln1": "4888 Hollywood Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Monday, year round, 11:00 am - 5:00 pm",
   "latitude": 34.10171734,
   "longitude": -118.2947693,
   "POINT_X": 6472434.053,
   "POINT_Y": 1859528.124
 },
 {
   "X": -118.2602208,
   "Y": 34.11819549,
   "Name": "Atwater Village Certified Farmers' Market",
   "addrln1": "3250 Glendale Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sunday, 10:00am to 2:00pm. ",
   "latitude": 34.11819552,
   "longitude": -118.2602207,
   "POINT_X": 6482908.54,
   "POINT_Y": 1865495.947
 },
 {
   "X": -118.6038141,
   "Y": 34.08912197,
   "Name": "Topanga Canyon Certified Farmers' Market",
   "addrln1": "Pine Tree Circle Parking Lot and Topanga Post Office",
   "addrln2": "",
   "city": "Topanga",
   "state": "CA",
   "hours": "Friday, year round, 9:00am to 1:00pm. ",
   "latitude": 34.089122,
   "longitude": -118.603814,
   "POINT_X": 6378849.453,
   "POINT_Y": 1855362.706
 },
 {
   "X": -118.2565597,
   "Y": 34.00572597,
   "Name": "Central Avenue Certified Farmers' Market",
   "addrln1": "4301 S Central Ave",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursdays, year-round, 10:00pm to 4:00pm. ",
   "latitude": 34.005726,
   "longitude": -118.2565596,
   "POINT_X": 6483912.187,
   "POINT_Y": 1824563.398
 },
 {
   "X": -118.3286733,
   "Y": 34.09806643,
   "Name": "Hollywood Certified Farmers' Market",
   "addrln1": "1500 N Ivar Ave",
   "addrln2": "",
   "city": "Hollywood",
   "state": "CA",
   "hours": "Sundays, year-round, 8:00am to 1:00pm",
   "latitude": 34.09806646,
   "longitude": -118.3286732,
   "POINT_X": 6462165.928,
   "POINT_Y": 1858231.337
 },
 {
   "X": -118.3364904,
   "Y": 34.01117647,
   "Name": "Crenshaw Baldwin Hill CFM",
   "addrln1": "3650 W Martin Luther King Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, 10:00am to 3:00pm. ",
   "latitude": 34.0111765,
   "longitude": -118.3364903,
   "POINT_X": 6459693.491,
   "POINT_Y": 1826618.399
 },
 {
   "X": -118.7572319,
   "Y": 34.15693717,
   "Name": "Agoura Hills CFM",
   "addrln1": "5835 Kanan Rd",
   "addrln2": "",
   "city": "Agoura Hills",
   "state": "CA",
   "hours": "Sunday, year round, 9:00 am - 2:00 pm",
   "latitude": 34.1569372,
   "longitude": -118.7572318,
   "POINT_X": 6332584.806,
   "POINT_Y": 1880355.696
 },
 {
   "X": -118.4436643,
   "Y": 34.12754947,
   "Name": "Beverly Glen Center CFM",
   "addrln1": "2936 Beverly Glen Circle",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, year round, 8:00 am - 2:00 pm",
   "latitude": 34.1275495,
   "longitude": -118.4436642,
   "POINT_X": 6427400.451,
   "POINT_Y": 1869094.403
 },
 {
   "X": -118.1798972,
   "Y": 33.82669767,
   "Name": "Bixby Park CFM",
   "addrln1": "Bixby Street between 1st & 2nd Street",
   "addrln2": "",
   "city": "Long Beach",
   "state": "CA",
   "hours": "Saturday, year roundm 9:00 am - 2:00 pm\nTuesday, year roundm 3:00 pm - 7:00 pm",
   "latitude": 33.8266977,
   "longitude": -118.1798972,
   "POINT_X": 6507030.425,
   "POINT_Y": 1759360.544
 },
 {
   "X": -118.308481,
   "Y": 34.18278911,
   "Name": "Burbank Certified Farmers' Market",
   "addrln1": "E Orange Grove Ave & N 3Rd St",
   "addrln2": " ",
   "city": "Burbank",
   "state": "CA",
   "hours": "",
   "latitude": 34.18278914,
   "longitude": -118.3084809,
   "POINT_X": 6468373.661,
   "POINT_Y": 1889043.956
 },
 {
   "X": -118.6387734,
   "Y": 34.15723437,
   "Name": "Calabasas CFM",
   "addrln1": "23504 Calabasas Road",
   "addrln2": "",
   "city": "Calabasas",
   "state": "CA",
   "hours": "Saturday, year round, 8:00 am - 1:00 pm",
   "latitude": 34.1572344,
   "longitude": -118.6387733,
   "POINT_X": 6368422.245,
   "POINT_Y": 1880214.993
 },
 {
   "X": -118.6012996,
   "Y": 34.20250427,
   "Name": "Canoga Park CFM",
   "addrln1": "7248 Owensmouth Ave",
   "addrln2": "",
   "city": "Canoga Park",
   "state": "CA",
   "hours": "Saturday, year round, 9:00 am - 1:00 pm",
   "latitude": 34.2025043,
   "longitude": -118.6012995,
   "POINT_X": 6379857.605,
   "POINT_Y": 1896619.304
 },
 {
   "X": -118.0581011,
   "Y": 33.86766497,
   "Name": "Cerritos CFM",
   "addrln1": "Park Plaza Drive",
   "addrln2": "",
   "city": "Cerritos",
   "state": "CA",
   "hours": "Saturda, year round, 8:00 am - 12:00 pm",
   "latitude": 33.867665,
   "longitude": -118.058101,
   "POINT_X": 6544032.008,
   "POINT_Y": 1774225.789
 },
 {
   "X": -118.2909548,
   "Y": 34.09786917,
   "Name": "Children Hospital CFM",
   "addrln1": "4650 Sunset Blvd.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, year round, 10:00 am - 3:00 pm",
   "latitude": 34.0978692,
   "longitude": -118.2909547,
   "POINT_X": 6473584.8,
   "POINT_Y": 1858124.355
 },
 {
   "X": -118.2427491,
   "Y": 34.05301497,
   "Name": "City Hall - Little Tokyo CFM",
   "addrln1": "200 N. Main Street",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, year round, 10:00 am - 2:00 pm",
   "latitude": 34.053015,
   "longitude": -118.242749,
   "POINT_X": 6488139.458,
   "POINT_Y": 1841762.36
 },
 {
   "X": -117.7192701,
   "Y": 34.09563489,
   "Name": "Claremont Certified Farmers' Market",
   "addrln1": "N Indian Hill Blvd & W 2Nd St",
   "addrln2": "",
   "city": "Claremont",
   "state": "CA",
   "hours": "",
   "latitude": 34.09563492,
   "longitude": -117.71927,
   "POINT_X": 6646662.642,
   "POINT_Y": 1857302.468
 },
 {
   "X": -118.4254695,
   "Y": 33.97661747,
   "Name": "Del Ray CFM",
   "addrln1": "461 Alla Road",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Friday, yearround, 2:00 pm - 7:00 pm",
   "latitude": 33.9766175,
   "longitude": -118.4254694,
   "POINT_X": 6432674.372,
   "POINT_Y": 1814143.983
 },
 {
   "X": -118.1341829,
   "Y": 33.94195018,
   "Name": "Downey Certified Farmers' Market",
   "addrln1": "La Reina Ave & 2Nd St",
   "addrln2": "",
   "city": "Downey",
   "state": "CA",
   "hours": "Saturdays, year-round, 9:00am to 1:00pm. ",
   "latitude": 33.94195021,
   "longitude": -118.1341828,
   "POINT_X": 6520971.162,
   "POINT_Y": 1801281.97
 },
 {
   "X": -118.2131094,
   "Y": 34.13807747,
   "Name": "Eagle Rock CFM",
   "addrln1": "2100 Merton Ave.",
   "addrln2": "",
   "city": "Eagle Rock",
   "state": "CA",
   "hours": "Friday, year round, 4:30 pm - 8:30 pm",
   "latitude": 34.1380775,
   "longitude": -118.2131093,
   "POINT_X": 6497183.206,
   "POINT_Y": 1872697.777
 },
 {
   "X": -118.3080998,
   "Y": 34.10172057,
   "Name": "East Hollywood CFM",
   "addrln1": "5448 Hollywood Blvd.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, year round, 2:00 pm - 8:00 pm",
   "latitude": 34.1017206,
   "longitude": -118.3080997,
   "POINT_X": 6468398.523,
   "POINT_Y": 1859541.412
 },
 {
   "X": -118.2595408,
   "Y": 34.07537647,
   "Name": "Echo Park CFM",
   "addrln1": "663 Logan Street",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Friday, year round, 3:00 pm - 7:30 pm",
   "latitude": 34.0753765,
   "longitude": -118.2595407,
   "POINT_X": 6483074.123,
   "POINT_Y": 1849912.821
 },
 {
   "X": -118.2484749,
   "Y": 34.11560297,
   "Name": "Glassel Park CFM",
   "addrln1": "3150 N. San Fernando Road",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday 10:00 am to 3:00 pm",
   "latitude": 34.115603,
   "longitude": -118.2484748,
   "POINT_X": 6486461.368,
   "POINT_Y": 1864543.488
 },
 {
   "X": -118.2003892,
   "Y": 34.49273957,
   "Name": "Acton CFM",
   "addrln1": "3801 Sierra Way",
   "addrln2": "",
   "city": "Acton",
   "state": "CA",
   "hours": "Tuesday, May - Oct, 4:00 pm - 7:30 pm",
   "latitude": 34.4927396,
   "longitude": -118.2003891,
   "POINT_X": 6501289.65,
   "POINT_Y": 2001757.968
 },
 {
   "X": -118.2554691,
   "Y": 34.14908497,
   "Name": "Glendale Downtown CFM",
   "addrln1": "227 N. Brand Ave.",
   "addrln2": "",
   "city": "Glendale",
   "state": "CA",
   "hours": "Tuesday 2:00 pm to 7:00 pm",
   "latitude": 34.149085,
   "longitude": -118.255469,
   "POINT_X": 6484375.318,
   "POINT_Y": 1876733.471
 },
 {
   "X": -118.2515595,
   "Y": 34.05140207,
   "Name": "Grand Certified Farmers' Market",
   "addrln1": "350 S. Grand Ave.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, year round, 10:00 am - 2:00 pm",
   "latitude": 34.0514021,
   "longitude": -118.2515594,
   "POINT_X": 6485469.244,
   "POINT_Y": 1841181.958
 },
 {
   "X": -118.2599901,
   "Y": 34.05314807,
   "Name": "Historic LA CFM",
   "addrln1": "West 5th Street",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sunday, year round, 9:00 am - 1:00 pm",
   "latitude": 34.0531481,
   "longitude": -118.25999,
   "POINT_X": 6482917.139,
   "POINT_Y": 1841823.857
 },
 {
   "X": -117.8476802,
   "Y": 34.04390602,
   "Name": "Jack New's CFM",
   "addrln1": "1100 Grand Ave.",
   "addrln2": "",
   "city": "Walnut",
   "state": "CA",
   "hours": "Saturday, year round, 8:00 am - 2:00 pm",
   "latitude": 34.04390606,
   "longitude": -117.8476802,
   "POINT_X": 6607814.438,
   "POINT_Y": 1838393.618
 },
 {
   "X": -118.294007,
   "Y": 33.78899147,
   "Name": "Kaiser South Bay CFM",
   "addrln1": "25825 S. Vermont Ave.",
   "addrln2": "",
   "city": "Harbor City",
   "state": "CA",
   "hours": "Wednesday, year round, 10:00 am - 3:00 pm",
   "latitude": 33.7889915,
   "longitude": -118.2940069,
   "POINT_X": 6472331.98,
   "POINT_Y": 1745719.998
 },
 {
   "X": -118.377319,
   "Y": 34.04403792,
   "Name": "La Cienga CFM",
   "addrln1": "1801 La Cienga Blvd.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, year round, 3:00 pm - 7:00 pm",
   "latitude": 34.04403796,
   "longitude": -118.377319,
   "POINT_X": 6447364.886,
   "POINT_Y": 1838621.187
 },
 {
   "X": -117.7701591,
   "Y": 34.10049797,
   "Name": "La Verne Fresh CFM",
   "addrln1": "D Street & 3rd Street",
   "addrln2": "",
   "city": "La Verne",
   "state": "CA",
   "hours": "Saturday, year round, 8:00 am - 1:00 pm",
   "latitude": 34.100498,
   "longitude": -117.770159,
   "POINT_X": 6631251.743,
   "POINT_Y": 1859033.099
 },
 {
   "X": -118.1154579,
   "Y": 34.69681827,
   "Name": "Lancaster CFM",
   "addrln1": "721 Lancaster Blvd.",
   "addrln2": "",
   "city": "Lancaster",
   "state": "CA",
   "hours": "Thursday, year round, 3:00 pm - 8:00 pm",
   "latitude": 34.6968183,
   "longitude": -118.1154578,
   "POINT_X": 6526966.197,
   "POINT_Y": 2075987.342
 },
 {
   "X": -118.3538244,
   "Y": 33.89823837,
   "Name": "Lawndale CFM",
   "addrln1": "147th Street and Burib Ave.",
   "addrln2": "",
   "city": "Lawndale",
   "state": "CA",
   "hours": "Wednesday, year round, 2:00 pm - 7:00 pm",
   "latitude": 33.8982384,
   "longitude": -118.3538243,
   "POINT_X": 6454295.592,
   "POINT_Y": 1785536.062
 },
 {
   "X": -118.1328673,
   "Y": 33.76846047,
   "Name": "Local Harvest CFM",
   "addrln1": "E. Appian Way & Nito Ave.",
   "addrln2": "",
   "city": "Long Beach",
   "state": "CA",
   "hours": "Wednesday, year round, 3:00 pm - 7:00 pm",
   "latitude": 33.7684605,
   "longitude": -118.1328672,
   "POINT_X": 6521286.744,
   "POINT_Y": 1738144.223
 },
 {
   "X": -118.1134306,
   "Y": 33.78115047,
   "Name": "Long Beach University CFM",
   "addrln1": "1250 Bellflower Blvd.",
   "addrln2": "",
   "city": "Long Beach",
   "state": "CA",
   "hours": "Wednesday, Apr. - Sep., 10:00 am - 2:00 pm.",
   "latitude": 33.7811505,
   "longitude": -118.1134305,
   "POINT_X": 6527199.533,
   "POINT_Y": 1742755.236
 },
 {
   "X": -118.3535427,
   "Y": 34.06174487,
   "Name": "Miracle Mile CFM",
   "addrln1": "5700 Wilshire Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, year round, 11:00 am - 3:00 am",
   "latitude": 34.0617449,
   "longitude": -118.3535426,
   "POINT_X": 6454590.364,
   "POINT_Y": 1845038.862
 },
 {
   "X": -118.1246549,
   "Y": 34.05911937,
   "Name": "Monterey Park CFM",
   "addrln1": "318 S. Ramona Ave",
   "addrln2": "",
   "city": "Monterey Park",
   "state": "CA",
   "hours": "Friday, year round, 4:00 pm - 9:00 pm",
   "latitude": 34.0591194,
   "longitude": -118.1246548,
   "POINT_X": 6523913.988,
   "POINT_Y": 1843918.494
 },
 {
   "X": -118.410698,
   "Y": 34.02922037,
   "Name": "Motor Avenue CFM",
   "addrln1": "10316 National @ Motor Ave.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sunday, year round, 9:00 am - 1:00 pm",
   "latitude": 34.0292204,
   "longitude": -118.4106979,
   "POINT_X": 6437231.06,
   "POINT_Y": 1833268.467
 },
 {
   "X": -118.37738,
   "Y": 34.16491737,
   "Name": "North Hollywood CFM",
   "addrln1": "5200 Bakman",
   "addrln2": "",
   "city": "North Hollywood",
   "state": "CA",
   "hours": "Saturday, year round, 10:00 am - 3:00 pm",
   "latitude": 34.1649174,
   "longitude": -118.3773799,
   "POINT_X": 6447511.585,
   "POINT_Y": 1882611.242
 },
 {
   "X": -118.5282889,
   "Y": 34.23602727,
   "Name": "Northridge University CFM",
   "addrln1": "18111 Nordroff Street",
   "addrln2": "",
   "city": "Northridge",
   "state": "CA",
   "hours": "Tuesday, year round, 10:00 am - 2:00 pm",
   "latitude": 34.2360273,
   "longitude": -118.5282888,
   "POINT_X": 6401997.482,
   "POINT_Y": 1908694.719
 },
 {
   "X": -118.0954325,
   "Y": 33.88747247,
   "Name": "Norwalk CFM",
   "addrln1": "11200 Alindra Blvd.",
   "addrln2": "",
   "city": "Norwalk",
   "state": "CA",
   "hours": "Tuesday, year round, 9:00 am - 1:00 pm",
   "latitude": 33.8874725,
   "longitude": -118.0954324,
   "POINT_X": 6532705.773,
   "POINT_Y": 1781442.868
 },
 {
   "X": -118.525734,
   "Y": 34.37972017,
   "Name": "Old Town Newhall CFM",
   "addrln1": "22421 Market Street",
   "addrln2": "",
   "city": "Newhall",
   "state": "CA",
   "hours": "Saturday, year round, 8:00 am - 12:30 pm",
   "latitude": 34.3797202,
   "longitude": -118.5257339,
   "POINT_X": 6403043.183,
   "POINT_Y": 1960982.485
 },
 {
   "X": -118.1442856,
   "Y": 34.14838677,
   "Name": "Pasadena City Hall CFM",
   "addrln1": "100 N. Garfield Ave",
   "addrln2": "",
   "city": "Pasadena",
   "state": "CA",
   "hours": "Wednesday, May - Oct, 4:00 pm - 8:00 pm",
   "latitude": 34.1483868,
   "longitude": -118.1442855,
   "POINT_X": 6518014.735,
   "POINT_Y": 1876412.493
 },
 {
   "X": -118.4218881,
   "Y": 33.97201197,
   "Name": "Playa Vista CFM",
   "addrln1": "6400 Seabluff Drive",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, year round, 9:00 am - 2:00 pm",
   "latitude": 33.972012,
   "longitude": -118.421888,
   "POINT_X": 6433753.158,
   "POINT_Y": 1812463.382
 },
 {
   "X": -118.3883554,
   "Y": 33.81925117,
   "Name": "Rivera Village CFM",
   "addrln1": "Avenue I and South Catalina",
   "addrln2": "",
   "city": "Redondo Beach",
   "state": "CA",
   "hours": "Thursday, year round, 3:00 pm - 9:00 pm",
   "latitude": 33.8192512,
   "longitude": -118.3883553,
   "POINT_X": 6443705.492,
   "POINT_Y": 1756829.553
 },
 {
   "X": -118.1046372,
   "Y": 34.08476127,
   "Name": "San Gabriel CFM",
   "addrln1": "300 W. Wells Street",
   "addrln2": "",
   "city": "San Gabriel",
   "state": "CA",
   "hours": "Thursday, April - Dec, 4:00 pm - 8:00 pm",
   "latitude": 34.0847613,
   "longitude": -118.1046371,
   "POINT_X": 6529986.804,
   "POINT_Y": 1853243.151
 },
 {
   "X": -118.3049136,
   "Y": 33.73819597,
   "Name": "San Pedro Providence CFM",
   "addrln1": "1300 W. 7th Street",
   "addrln2": "",
   "city": "San Pedro",
   "state": "CA",
   "hours": "Thursday, Year Round, 9:00 am - 2:00 pm",
   "latitude": 33.738196,
   "longitude": -118.3049135,
   "POINT_X": 6468961.783,
   "POINT_Y": 1727243.997
 },
 {
   "X": -118.5682628,
   "Y": 34.40419577,
   "Name": "Santa Clarita CFM",
   "addrln1": "26455 Rockwell Road",
   "addrln2": "",
   "city": "Valencia",
   "state": "CA",
   "hours": "Sunday, yearround, 8:30 am - 12:00 pm",
   "latitude": 34.4041958,
   "longitude": -118.5682627,
   "POINT_X": 6390261.662,
   "POINT_Y": 1969959.33
 },
 {
   "X": -118.0827263,
   "Y": 33.94563917,
   "Name": "Santa Fe Springs CFM",
   "addrln1": "11740 Telegraph Road",
   "addrln2": "",
   "city": "Santa Fe Springs",
   "state": "CA",
   "hours": "Thursday, yearround, 12:00 pm - 5:00 pm",
   "latitude": 33.9456392,
   "longitude": -118.0827262,
   "POINT_X": 6536579.634,
   "POINT_Y": 1802607.635
 },
 {
   "X": -118.4390861,
   "Y": 34.07459117,
   "Name": "UCLA CFM",
   "addrln1": "350 Charles E. Young @ the Camp",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, year round, 11:00 am - 3:00 pm",
   "latitude": 34.0745912,
   "longitude": -118.439086,
   "POINT_X": 6428701.795,
   "POINT_Y": 1849815.985
 },
 {
   "X": -118.2807224,
   "Y": 34.02092077,
   "Name": "USC Hospitality CFM",
   "addrln1": "3445 S. Figueroa Street",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, year round, 11:00 am - 3:00 pm",
   "latitude": 34.0209208,
   "longitude": -118.2807223,
   "POINT_X": 6476604.411,
   "POINT_Y": 1830112.643
 },
 {
   "X": -118.5652442,
   "Y": 34.42052577,
   "Name": "Valencia CFM",
   "addrln1": "26251 Town Center Dr.",
   "addrln2": "",
   "city": "Valencia",
   "state": "CA",
   "hours": "Thursday, year round, 4:00 pm - 8:00 pm",
   "latitude": 34.4205258,
   "longitude": -118.5652441,
   "POINT_X": 6391205.59,
   "POINT_Y": 1975896.921
 },
 {
   "X": -117.9212768,
   "Y": 34.07059386,
   "Name": "West Covina CFM",
   "addrln1": "195 S. Glendora Ave.",
   "addrln2": "",
   "city": "West Covina",
   "state": "CA",
   "hours": "Saturday, year round, 8:00 am - 1:00 pm",
   "latitude": 34.07059389,
   "longitude": -117.9212768,
   "POINT_X": 6585511.318,
   "POINT_Y": 1848080.208
 },
 {
   "X": -118.4462699,
   "Y": 34.06155637,
   "Name": "Westwood Village CFM",
   "addrln1": "1050 Broxton Ave",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, year round, 12:00 pm - 6:00 pm",
   "latitude": 34.0615564,
   "longitude": -118.4462698,
   "POINT_X": 6426505.277,
   "POINT_Y": 1845081.998
 },
 {
   "X": -118.1287914,
   "Y": 34.09370567,
   "Name": "Alhambra Certified Farmers' Market",
   "addrln1": "11 S. 2nd Street",
   "addrln2": "",
   "city": "Alhambra",
   "state": "CA",
   "hours": "Closed Easter Sunday. ",
   "latitude": 34.0937057,
   "longitude": -118.1287913,
   "POINT_X": 6522677.223,
   "POINT_Y": 1856506.677
 },
 {
   "X": -118.2925904,
   "Y": 34.0325622,
   "Name": "Adams - Vermont Certified Farmers' Market",
   "addrln1": "1432 W Adams Blvd",
   "addrln2": "St. Agnes Catholic Church",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, 2:00pm to 6:00pm. ",
   "latitude": 34.03256223,
   "longitude": -118.2925903,
   "POINT_X": 6473020.45,
   "POINT_Y": 1834359.43
 },
 {
   "X": -118.1581302,
   "Y": 34.20037877,
   "Name": "Altadena Certified Farmers' Market",
   "addrln1": "600 W. Palm Ave",
   "addrln2": "",
   "city": "Altadena",
   "state": "CA",
   "hours": "Wednesday, 4:00 pm to 8:00pm. ",
   "latitude": 34.2003788,
   "longitude": -118.1581301,
   "POINT_X": 6513855.626,
   "POINT_Y": 1895339.603
 },
 {
   "X": -118.2431722,
   "Y": 34.05404581,
   "Name": "Arts District Little Tokyo Certified Farmers' Market",
   "addrln1": "200 N Spring St",
   "addrln2": "L.A. City Hall, South Lawn",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, 10:00am to 2:00pm. ",
   "latitude": 34.05404584,
   "longitude": -118.2431721,
   "POINT_X": 6488012.205,
   "POINT_Y": 1842137.811
 },
 {
   "X": -118.3961986,
   "Y": 34.0762633,
   "Name": "Beverly Hills Certified Farmers' Market",
   "addrln1": "9300 Civic Center Dr",
   "addrln2": "",
   "city": "Beverly Hills",
   "state": "CA",
   "hours": "",
   "latitude": 34.07626333,
   "longitude": -118.3961985,
   "POINT_X": 6441691.756,
   "POINT_Y": 1850370.538
 },
 {
   "X": -118.47515,
   "Y": 34.05060688,
   "Name": "Brentwood Village Certified Farmers' Market",
   "addrln1": "741 Gretna Green Way",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sundays year-round 9:00am to 2:00pm. ",
   "latitude": 34.05060691,
   "longitude": -118.4751499,
   "POINT_X": 6417739.374,
   "POINT_Y": 1841137.403
 },
 {
   "X": -118.2625614,
   "Y": 33.84499097,
   "Name": "South Bay Pavilion CFM",
   "addrln1": "20700 Avalon Blvd",
   "addrln2": "",
   "city": "Carson",
   "state": "CA",
   "hours": "Thursdays, year-round, 10:00am to 3:00pm",
   "latitude": 33.844991,
   "longitude": -118.2625613,
   "POINT_X": 6481940.401,
   "POINT_Y": 1766073.184
 },
 {
   "X": -118.4178553,
   "Y": 34.06095497,
   "Name": "Century City Certified Farmers' Market",
   "addrln1": "1800 Ave of the Stars",
   "addrln2": " ",
   "city": "Century City",
   "state": "CA",
   "hours": "Thursdays, year-round, 11:00am - 2:00pm",
   "latitude": 34.060955,
   "longitude": -118.4178552,
   "POINT_X": 6435110.457,
   "POINT_Y": 1844826.147
 },
 {
   "X": -118.3941664,
   "Y": 34.02474455,
   "Name": "Culver City Certified Farmers' Market",
   "addrln1": "3800 Main Street",
   "addrln2": " between Culver Blvd and Venice Blvd",
   "city": "Culver City",
   "state": "CA",
   "hours": "Tuesdays, year-round 2:00pm to 7:00pm",
   "latitude": 34.02474458,
   "longitude": -118.3941663,
   "POINT_X": 6442233.633,
   "POINT_Y": 1831619.585
 },
 {
   "X": -118.2598793,
   "Y": 34.04939055,
   "Name": "Downtown Los Angeles (B O. A) CFM",
   "addrln1": "S Figueroa St & W 7Th St",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Friday, 10:00am to 3:00pm. ",
   "latitude": 34.04939058,
   "longitude": -118.2598792,
   "POINT_X": 6482947.166,
   "POINT_Y": 1840456.34
 },
 {
   "X": -118.1606651,
   "Y": 34.03356497,
   "Name": "East Los Angeles Certified Farmers' Market",
   "addrln1": "4801 E. 3rd. St.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, 9:00 am - 2:00 pm",
   "latitude": 34.033565,
   "longitude": -118.160665,
   "POINT_X": 6512992.105,
   "POINT_Y": 1834634.239
 },
 {
   "X": -118.4157644,
   "Y": 33.92147943,
   "Name": "El Segundo Plaza Certified Farmers' Market",
   "addrln1": "Main Street. Between Holly & Oina Ave",
   "addrln2": " ",
   "city": "El Segundo",
   "state": "CA",
   "hours": "Thursday, year-round 10:00 am to 2:00 pm",
   "latitude": 33.92147946,
   "longitude": -118.4157644,
   "POINT_X": 6435533.775,
   "POINT_Y": 1794065.904
 },
 {
   "X": -118.5140661,
   "Y": 34.18620397,
   "Name": "Encino Certified Farmers' Market",
   "addrln1": "17400 Victory Blvd in Van Nuys",
   "addrln2": "Between Louise and Wight Oak Blvd",
   "city": "Van Nuys",
   "state": "CA",
   "hours": "Sundays, year-round, 8:00am to 1:00pm",
   "latitude": 34.186204,
   "longitude": -118.514066,
   "POINT_X": 6406203.491,
   "POINT_Y": 1890541.068
 },
 {
   "X": -118.3766202,
   "Y": 33.90942202,
   "Name": "Hawthorne - Del Aire Certified Farmers' Market",
   "addrln1": "13500 Aviation Boulevard",
   "addrln2": "",
   "city": "Hawthorne",
   "state": "CA",
   "hours": "Saturdays, year-round, 9:00am to 1:00pm. ",
   "latitude": 33.90942205,
   "longitude": -118.3766201,
   "POINT_X": 6447393.052,
   "POINT_Y": 1789631.159
 },
 {
   "X": -118.3942572,
   "Y": 33.86015185,
   "Name": "Hermosa Beach Certified Farmers' Market",
   "addrln1": "Valley Drive at 8Th St",
   "addrln2": "between 8th & 10th Sts.",
   "city": "Hermosa Beach",
   "state": "CA",
   "hours": "Fridays, year-round, 12:00pm to 4:00pm. ",
   "latitude": 33.86015188,
   "longitude": -118.3942571,
   "POINT_X": 6441971.182,
   "POINT_Y": 1771721.224
 },
 {
   "X": -118.2052005,
   "Y": 33.9721295,
   "Name": "Huntington Park Certified Farmers' Market",
   "addrln1": "E Florence Ave & Bissell St",
   "addrln2": "Salt Lake Park",
   "city": "Huntington Park",
   "state": "CA",
   "hours": "Wednesday, year round, 9:30am to 1:30pm. ",
   "latitude": 33.97212953,
   "longitude": -118.2052004,
   "POINT_X": 6499453.161,
   "POINT_Y": 1812301.217
 },
 {
   "X": -118.3759371,
   "Y": 34.03806491,
   "Name": "Kaiser -La Cienga Certified Farmers' Market",
   "addrln1": "6041 Cadillac Ave",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Wednesday, 9:30am to 1:30pm. ",
   "latitude": 34.03806494,
   "longitude": -118.375937,
   "POINT_X": 6447775.413,
   "POINT_Y": 1836445.935
 },
 {
   "X": -117.985884,
   "Y": 34.06537655,
   "Name": "Kaiser Baldwin Park Certified Farmers' Market",
   "addrln1": "1011 Baldwin Park Blvd",
   "addrln2": "",
   "city": "Baldwin Park",
   "state": "CA",
   "hours": "Fridays, year-round, 7:30am to 12:30pm. ",
   "latitude": 34.06537658,
   "longitude": -117.9858839,
   "POINT_X": 6565945.595,
   "POINT_Y": 1846172.493
 },
 {
   "X": -118.4299161,
   "Y": 34.2198087,
   "Name": "Kaiser Panorama City Certified Farmers' Market",
   "addrln1": "13652 Cantara St",
   "addrln2": "",
   "city": "Panorama City",
   "state": "CA",
   "hours": "Wednesdays, year-round, 9:00am to 1:30pm. ",
   "latitude": 34.21980873,
   "longitude": -118.429916,
   "POINT_X": 6431704.759,
   "POINT_Y": 1902650.826
 },
 {
   "X": -118.2077006,
   "Y": 34.20749665,
   "Name": "La Canada Certified Farmers' Market",
   "addrln1": "1346 Foothill Blvd",
   "addrln2": "",
   "city": "La Canada Flintridge",
   "state": "CA",
   "hours": "Saturdays, year-round, 9:00am - 1:00pm",
   "latitude": 34.20749668,
   "longitude": -118.2077005,
   "POINT_X": 6498872.113,
   "POINT_Y": 1897957.198
 },
 {
   "X": -118.5886125,
   "Y": 34.17126197,
   "Name": "Kaiser Woodland Hills Certified Farmers' Market",
   "addrln1": "5601 De  Soto Ave",
   "addrln2": "",
   "city": "Woodland Hills",
   "state": "CA",
   "hours": "Thursdays, year-round, 10:00am to 2:30pm. ",
   "latitude": 34.171262,
   "longitude": -118.5886124,
   "POINT_X": 6383627.135,
   "POINT_Y": 1885227.155
 },
 {
   "X": -117.7710081,
   "Y": 34.10195397,
   "Name": "La Verne Certified Farmers' Market",
   "addrln1": "3660 \"D\" Street between Bonita and 3rd Street",
   "addrln2": "",
   "city": "La Verne",
   "state": "CA",
   "hours": "Thursdays, April through September, 5:00pm to 9:00pm. ",
   "latitude": 34.101954,
   "longitude": -117.771008,
   "POINT_X": 6630993.512,
   "POINT_Y": 1859562.377
 },
 {
   "X": -118.3238353,
   "Y": 34.07488202,
   "Name": "Larchmont Village Certified Farmers' Market",
   "addrln1": "209 N Larchmont Blvd",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sunday, 10:00am to 2:00pm. ",
   "latitude": 34.07488205,
   "longitude": -118.3238352,
   "POINT_X": 6463603.425,
   "POINT_Y": 1849789.381
 },
 {
   "X": -118.1923781,
   "Y": 33.77294497,
   "Name": "Long Beach Downtown Farmers' Market",
   "addrln1": "212 W. Third Street at Pacific Avenue",
   "addrln2": "",
   "city": "Long Beach",
   "state": "CA",
   "hours": "Fridays, year-round, 10:00am to 4:00pm. ",
   "latitude": 33.772945,
   "longitude": -118.192378,
   "POINT_X": 6503202.203,
   "POINT_Y": 1739805.521
 },
 {
   "X": -118.1130981,
   "Y": 33.75762397,
   "Name": "Long Beach Southeast Certified Farmers' Market",
   "addrln1": "2nd St. and N. Marina Dr.",
   "addrln2": " Alamitos Bay Marina",
   "city": "Long Beach",
   "state": "CA",
   "hours": "Sundays, year-round, 9:00am to 2:00pm",
   "latitude": 33.757624,
   "longitude": -118.113098,
   "POINT_X": 6527290.945,
   "POINT_Y": 1734193.157
 },
 {
   "X": -118.184941,
   "Y": 33.84264915,
   "Name": "Long Beach Uptown Certified Farmers' Market",
   "addrln1": "E 46Th St & Atlantic Ave",
   "addrln2": "Bixby Knolls area",
   "city": "Long Beach",
   "state": "CA",
   "hours": "Thursday, 3:00pm to 6:30pm ",
   "latitude": 33.84264918,
   "longitude": -118.1849409,
   "POINT_X": 6505509.179,
   "POINT_Y": 1765168.471
 },
 {
   "X": -118.2920097,
   "Y": 34.10421143,
   "Name": "Los Feliz Village Certified Farmers' Market",
   "addrln1": "1825 N Vermont Ave",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Sundays, year-round, 9:00am to 2:00pm. ",
   "latitude": 34.10421146,
   "longitude": -118.2920096,
   "POINT_X": 6473272.139,
   "POINT_Y": 1860433.338
 },
 {
   "X": -118.691164,
   "Y": 34.03473925,
   "Name": "Malibu Certified Farmers' Market",
   "addrln1": "23525 Civic Center Way",
   "addrln2": " between Webb Way & Pacific Coast Hwy",
   "city": "Malibu",
   "state": "CA",
   "hours": "Sundays, year-round, 10:00am to 3:00pm. ",
   "latitude": 34.03473928,
   "longitude": -118.6911639,
   "POINT_X": 6352266.238,
   "POINT_Y": 1835742.616
 },
 {
   "X": -118.4094146,
   "Y": 33.88673696,
   "Name": "Manhattan Beach Certified Farmers' Market",
   "addrln1": "13Th St & Morningside Dr",
   "addrln2": "",
   "city": "Manhattan Beach",
   "state": "CA",
   "hours": "Tuesday, 11:00am to 4:00pm; 11:00am to 5:00pm, June through August ",
   "latitude": 33.88673699,
   "longitude": -118.4094145,
   "POINT_X": 6437408.723,
   "POINT_Y": 1781414.509
 },
 {
   "X": -118.1602437,
   "Y": 33.90263277,
   "Name": "Paramount CFM",
   "addrln1": "14409 Paramount Blvd.",
   "addrln2": "",
   "city": "Paramount",
   "state": "CA",
   "hours": "9:00 am - 1: 00 pm, June - Dec.",
   "latitude": 33.9026328,
   "longitude": -118.1602436,
   "POINT_X": 6513043.821,
   "POINT_Y": 1786985.068
 },
 {
   "X": -118.2156358,
   "Y": 34.07365127,
   "Name": "Lincoln Heights CFM",
   "addrln1": "North Broadway & Daly Street",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "3:00 pm - 7:00 pm, June - Dec.",
   "latitude": 34.0736513,
   "longitude": -118.2156357,
   "POINT_X": 6496368.419,
   "POINT_Y": 1849253.564
 },
 {
   "X": -118.3568056,
   "Y": 33.83873207,
   "Name": "Torrance Providence CFM",
   "addrln1": "4101 Torranc Blvd. @ Hawthorne Blvd",
   "addrln2": "",
   "city": "Torrance",
   "state": "CA",
   "hours": "Friday, Year Round, 10:00 am - 3:00 pm",
   "latitude": 33.8387321,
   "longitude": -118.3568055,
   "POINT_X": 6453314.023,
   "POINT_Y": 1763883.594
 },
 {
   "X": -118.1288115,
   "Y": 33.91924157,
   "Name": "Kaised Downey",
   "addrln1": "9333 E. Imperial Hwy in Kaiser Medical Center",
   "addrln2": "",
   "city": "Downey",
   "state": "CA",
   "hours": "Thursday, Year Round, 9:00 am - 2:00 pm",
   "latitude": 33.9192416,
   "longitude": -118.1288114,
   "POINT_X": 6522589.778,
   "POINT_Y": 1793015.674
 },
 {
   "X": -118.5293051,
   "Y": 34.38147037,
   "Name": "Newhall Certified Farmers' Market",
   "addrln1": "22520 Lynos Ave",
   "addrln2": "",
   "city": "Newhall",
   "state": "CA",
   "hours": "Saturday, 8:00am to 12:00pm. ",
   "latitude": 34.3814704,
   "longitude": -118.529305,
   "POINT_X": 6401969.057,
   "POINT_Y": 1961625.064
 },
 {
   "X": -118.028377,
   "Y": 34.14116877,
   "Name": "Arcadia Street Fair CFM",
   "addrln1": "Wheeler Ave. @ 1st Street",
   "addrln2": "",
   "city": "Arcadia",
   "state": "CA",
   "hours": "Friday, July - Dec., 5:00 pm - 9:00 pm",
   "latitude": 34.1411688,
   "longitude": -118.0283769,
   "POINT_X": 6553083.755,
   "POINT_Y": 1873755.612
 },
 {
   "X": -117.7512988,
   "Y": 34.05781597,
   "Name": "Pomona Thomas Plaza CFM",
   "addrln1": "201 W. 2nd Street",
   "addrln2": "",
   "city": "Pomona",
   "state": "CA",
   "hours": "2nd Saturday of the month, year round, 5:00 pm - 9:00 pm",
   "latitude": 34.057816,
   "longitude": -117.7512987,
   "POINT_X": 6636999.878,
   "POINT_Y": 1843513.947
 },
 {
   "X": -118.3561003,
   "Y": 34.02119217,
   "Name": "Baldwin La Brea CFM",
   "addrln1": "3601 S. La Brea Ave.",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Saturday, 9:00 am - 2:00 pm.",
   "latitude": 34.0211922,
   "longitude": -118.3561002,
   "POINT_X": 6453763.447,
   "POINT_Y": 1830283.765
 },
 {
   "X": -118.0763309,
   "Y": 34.08030467,
   "Name": "Rosemead CFM",
   "addrln1": "8838 Valley Blvd.",
   "addrln2": "",
   "city": "Rosemead",
   "state": "CA",
   "hours": "Aug - Dec, Friday, 4:00 pm - 8:00 pm",
   "latitude": 34.0803047,
   "longitude": -118.0763308,
   "POINT_X": 6538556.559,
   "POINT_Y": 1851613.596
 },
 {
   "X": -117.9523485,
   "Y": 34.02006282,
   "Name": "La Puente Live CFM",
   "addrln1": "Main Street & First Street",
   "addrln2": "",
   "city": "La Puente",
   "state": "Ca",
   "hours": "July - Dec., Friday, 6:00 pm - 10:00 pm",
   "latitude": 34.02006285,
   "longitude": -117.9523484,
   "POINT_X": 6576110.125,
   "POINT_Y": 1829685.06
 },
 {
   "X": -118.3520113,
   "Y": 33.96177987,
   "Name": "Inglewood CFM",
   "addrln1": "Manchester Blvd. & Market Street",
   "addrln2": "",
   "city": "Inglewood",
   "state": "CA",
   "hours": "Thursday, year round, 3:00 pm - 7:00 pm",
   "latitude": 33.9617799,
   "longitude": -118.3520112,
   "POINT_X": 6454926.789,
   "POINT_Y": 1808658.166
 },
 {
   "X": -118.2214784,
   "Y": 33.8774686,
   "Name": "Compton CFM",
   "addrln1": "Gateway Towne Center",
   "addrln2": "",
   "city": "Compton",
   "state": "CA",
   "hours": "9:00 am - 2:00 pm Aug - Dec, Saturday",
   "latitude": 33.87746863,
   "longitude": -118.2214783,
   "POINT_X": 6494441.768,
   "POINT_Y": 1777862.535
 },
 {
   "X": -118.6058158,
   "Y": 34.18406977,
   "Name": "The Village CFM",
   "addrln1": "6250 Topanga Blvd.",
   "addrln2": "",
   "city": "",
   "state": "Los Angeles",
   "hours": "Sunday, Year Round, 2:00 pm - 4:00 pm",
   "latitude": 34.1840698,
   "longitude": -118.6058157,
   "POINT_X": 6378451.642,
   "POINT_Y": 1889918.977
 },
 {
   "X": -118.4013576,
   "Y": 33.86198987,
   "Name": "Hermosa Beach Wednesday CFM",
   "addrln1": "1 Piar Ave",
   "addrln2": "",
   "city": "Hermosa Beach",
   "state": "CA",
   "hours": "Wednesday, Year Round, 11:00 am - 4:00 pm",
   "latitude": 33.8619899,
   "longitude": -118.4013575,
   "POINT_X": 6439818.134,
   "POINT_Y": 1772398.651
 },
 {
   "X": -118.3866639,
   "Y": 33.97600707,
   "Name": "Howard Hughes CFM",
   "addrln1": "6080 Center Drive",
   "addrln2": "",
   "city": "Los Angeles",
   "state": "CA",
   "hours": "Thursday, Year Round, 10:00 am - 2:00 pm",
   "latitude": 33.9760071,
   "longitude": -118.3866638,
   "POINT_X": 6444438.734,
   "POINT_Y": 1813874.318
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

        $scope.showMap = $stateParams.map;
        $scope.title = $stateParams.title;
        $scope.info = $stateParams.details;
        $scope.url = $stateParams.url;
        $scope.icon = $stateParams.icon;

        // $(".earth_elem").css("bottom", "-200px");

        NgMap.getMap().then(function(map) {
            map.data.forEach(function (feature) {
                map.data.remove(feature);
            });
            if($scope.icon == "tree") {
                map.data.loadGeoJson('http://geohub.lacity.org/datasets/678499fcf0b84e06ac80a37ae7cde7e3_9.geojson?where=&geometry={"xmin":-13951254.333030073,"ymin":3820005.993082375,"xmax":-11603108.824110081,"ymax":4186903.7288511232,"spatialReference":{"wkid":102100,"latestWkid":3857}}');
                map.data.setStyle(function(feature) {
                  return {
                    icon: {
                        url:'assets/img/icons/childhood.png'
                    },
                    visible: true,
                    clickable: true,
                  };
                });
            } else {
                map.data.loadGeoJson('http://geohub.lacity.org/datasets/a050296610ee4cc7bea41e66196d9bb0_40.geojson?where=&geometry={"xmin":-13951254.333030073,"ymin":3820005.993082375,"xmax":-12385823.993750079,"ymax":4186903.7288511232,"spatialReference":{"wkid":102100,"latestWkid":3857}}');
                map.data.setStyle(function(feature) {
                  return {
                    icon: {
                        url:'assets/img/icons/carrot.png'
                    },
                    visible: true,
                    clickable: true,
                  };
                });
            }
            map.setZoom(12);
            map.data.addListener('click', function(event) {
                $scope.infoName = event.feature.getProperty('Name');
                $scope.infoAddy1 = event.feature.getProperty('addrln1');
                $scope.infoAddy2 = event.feature.getProperty('addrln2');
                map.showInfoWindow('myInfoWindow', event.latLng);
            });
            console.log(map);
        });
    }])
;
