'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
controller('HomeController', function($scope, blogAPI) {
    blogAPI.getPosts().then(function(posts) {
        $scope.posts = posts;
    }, function(errorMsg) {
        cosole.error(errorMsg);
    });
}).
controller('PostController', function($scope, blogAPI, $routeParams) {
    blogAPI.getPost(parseInt($routeParams.id), 10).then(function(post) {
        $scope.post = post;
    }, function(errorMsg) {
        cosole.error(errorMsg);
    });
});