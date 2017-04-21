/* global angular */
angular.module('ua5App')
    .directive('schedule', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/schedule/schedule.html',
            link: function($scope, element, attrs) {
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
                        details: "Take advantage of LA’s bikeshare program and bike to work/school.",
                        map: false,
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
            }
        };
    }])
;
