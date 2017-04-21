/* global angular */
angular.module('ua5App')
    .directive('earth', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/earth/earth.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
