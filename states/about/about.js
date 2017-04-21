/* global angular */
angular.module('ua5App.about')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: 'states/about/about.html',
            controller: 'aboutCtrl',
            controllerAs: 'ctrl'
        });
    }])
    .controller('aboutCtrl', [function() {}])
;
