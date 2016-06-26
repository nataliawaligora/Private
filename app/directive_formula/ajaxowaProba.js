angular.module('MyApp').controller("DataController", DataController);

function DataController($scope,dataService) {
    dataService.giveMeData().success(function(response){
        $scope.data = response;
    }).error(function(){
        $scope.fail = true;
    })
    
}
