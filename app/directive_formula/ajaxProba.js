angular.module('MyApp').controller('myCtrl', myCtrl).service('service', service);

function myCtrl($scope, service) {
    console.log('dfdsfsd');
    service.sciagnijPosty().success(function(response){
        $scope.response = response;
    }).error( function(){
        $scope.fail = 'Przepraszamy usluga chwilowo niedostepna'
    }
    )
}

function service($http) {
    this.sciagnijPosty = function () {
        return $http.get('http://jsonplaceholder.typicode.com/posts');
    }
}
