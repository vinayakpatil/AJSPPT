'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/post/:id', {templateUrl: 'partials/post.html', controller: 'PostController'});
  $routeProvider.when('/categories/:category', {templateUrl: 'partials/category.html', controller: 'CategoryController'});
  $routeProvider.when('/feedback', {templateUrl: 'partials/feedback.html', controller: 'FeedbackController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
