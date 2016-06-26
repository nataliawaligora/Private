angular.module("MyApp").service("dataService", dataService);

function dataService($http){
    this.giveMeData = function () {
return $http.get('http://jsonplaceholder.typicode.com/posts')        
    }
}