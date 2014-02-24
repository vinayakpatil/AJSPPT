'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
run(function($rootScope){
    $rootScope.categories = [
        'backbone',
        'angular',
        'ember',
        'knockout',
        'nodejs',
        'jquery'
    ];
}).
controller('HomeController', function($scope, blogAPI) {
    blogAPI.getPosts().then(function(posts) {
        $scope.posts = posts;
    }, function(errorMsg) {
        cosole.error(errorMsg);
    });
}).
controller('PostController', function($scope, blogAPI, $routeParams) {
    $scope.showComments = false;

    blogAPI.getPost(parseInt($routeParams.id), 10).then(function(post) {
        post.comments = post.comments.split(",");
        $scope.post = post;
    }, function(errorMsg) {
        cosole.error(errorMsg);d87
    });

    $scope.toggleComments = function(){
        $scope.showComments = !$scope.showComments;
    };

}).
controller('CategoryController', function($scope, blogAPI, $routeParams){
    $scope.category = $routeParams.category;
    blogAPI.getPostsByCategory($routeParams.category).then(function(posts){
        $scope.posts = posts;
    }, function(errorMsg) {
        cosole.error(errorMsg);
    });
}).
controller('FeedbackController', function($scope){
    $scope.submitForm = function(){
        console.log("in Feedback form submit handler");
    };
});