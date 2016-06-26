var app = angular.module('MyApp', []);

app.controller("ProductController", productController);

function productController($scope) {
    $scope.products = [];
    $scope.add = function () {
        var newProduct = {
            name: $scope.product,
            price: $scope.price
        };
        $scope.products.push(newProduct);
        $scope.product = '';
        $scope.price = '';
        console.log($scope.products);
    };

    // $scope.propertyOnParentScope = 'property on parent scope :)';
    // $scope.propertyNumberTwo = 'property nubmer two :)';
    // $scope.objectOnParentScope = {
    //     title: 'oryginalny tytul'
    // };
}



