angular.module('MyApp').service('PostsService', function ($http) {
    this.downloadPosts = function () {
        return $http.get('http://jsonplaceholder.typicode.com/posts');
    }
});