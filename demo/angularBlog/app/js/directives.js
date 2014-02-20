'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('excerpt', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            post: '='
        },
        templateUrl: 'partials/directives/excerpt.html',
        controller: function($scope) {
            $scope.excerptLength = 450;

            $scope.makeExcerpt = function(post) {
                return post.slice(0, $scope.excerptLength);
            };
        }
    };
});