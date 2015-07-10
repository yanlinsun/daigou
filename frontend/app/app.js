'use strict';

// Declare app level module which depends on views, and components
var daigouApp = angular.module('daigouApp', [
    'ngRoute',
    'ngResource',
    'OrderListView',
    'OrderDetailView',
    'Controllers',
    'daigouServices'
]);

daigouApp.config(['$routeProvider', 
   function($routeProvider) {
        $routeProvider.when('/c', {
            templateUrl: 'views/customerList.html',
        });
        $routerProvider.when('/c/:customerId', {
            templateUrl: 'views/customerDetail.html'
        });
        $routeProvider.when('/ol/:listType', {
            templateUrl: 'views/orderList.html'
        });
        $routeProvider.when('/o/:orderId', {
            templateUrl: 'views/orderDetail.html'
        });
        $routeProvider.when('/modules', {
            templateUrl: 'views/modules.html'
        });
        $routeProvider.otherwise({redirectTo: '/modules'});
    }
]);
