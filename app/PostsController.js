angular.module('MyApp').controller('PostsController', function ($scope, PostsService) {
    $scope.loadingInProgress = true;

    PostsService.downloadPosts().success(function (response) {
        //Zmiennej $scope.posts przypisuje response
        $scope.posts = response;
        $scope.loadingInProgress = false;
    }).error(function () {
        $scope.downloadError = true;
        $scope.loadingInProgress = false;
    });
});