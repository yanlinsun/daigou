'use strict';

/* Services */

var daigouServices = angular.module('daigouServices', ['ngResource']);

daigouServices.factory('Order', ['$resource',
    function($resource){
        return $resource('datas/o/:orderId:listType.json', {}, {
            query: { method:'GET', null, isArray:true }
        });
    }]);

daigouServices.factory('Customer', ['$resource',
    function($resource){
        return $resource('datas/c/:customerId.json', {}, {
            query: { method: 'GET', params: { customerId : 'customers' }, isArray: true }
        });
    }]);

daigouServices.factory('Product', ['$resource',
    function($resource){
        return $resource('datas/p/:id.json', {}, {
            query: { method: 'GET', params: { id : 'products' }, isArray: true }
        });
    }]);


daigouServices.factory('Thumbnail', ['$resource',
    function($resource){
        return $resource('thumbnails/:customerId.jpg', {}, {});
    }]);

daigouServices.factory('Modules', ['$resource',
        function($resource) {
            return $resource('modules.json', null, null );
        }
    ]
);
