var controllers = angular.module('Controllers', [ 'daigouServices' ]);

controllers.controller('ModulesController',
        [ '$scope', '$location', 'Modules',
        function ($scope, $location, Modules) {
            $scope.modules = Modules.get();

            $scope.click = function() {
                $location.path(this.module.url);
            }
        }]
);

controllers.controller('CustomerListController',
        [ '$scope', 'Customer',
        function($scope, Customer) {
            $scope.customers = Customer.query();
        }]
);

controllers.controller('CustomerController',
        [ '$scope', '$routeParams', 'Customer',
        function($scope, $routeParams, Customer) {
            $scope.customer = Customer.get({ customerId : $routeParams.customerId });
        }]
);

controllers.controller('ProductListController',
        [ '$scope', 'Product',
        function($scope, Product) {
            $scope.products = Product.query();
        }]
);

controllers.controller('ProductController',
        [ '$scope', '$routeParams', 'Product',
        function($scope, $routeParams, Product) {
            $scope.product = Product.get({ id : $routeParams.id });
        }]
);

controllers.controller('OrderListController', 
    [ '$scope', '$routeParams', 'Order', 
        function ($scope, $routeParams, Order) {
            $scope.type = $routeParams.listType;
            $scope.orders = Order.query({ orderId: 'orders', listType: $routeParams.listType });
        }
    ]
);

controllers.controller('OrderDetailController', 
    [ '$scope', '$routeParams', 'Order', 
        function ($scope, $routeParams, Order) {
            $scope.order = Order.get({ orderId: $ourteParams.orderId });
        }
    ]
);

