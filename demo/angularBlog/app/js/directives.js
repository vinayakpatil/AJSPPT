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
}).
directive('toggleComments', function() {
    return function(scope, element, attrs) {
        var comments = element.parent().next('.comments');
        element.on('click', function() {
            element.toggleClass('glyphicon-arrow-down').toggleClass('glyphicon-arrow-up');
        });
    };
}).
directive('ngFocus', function() {
    return {
        restrict:'A',
        require:'ngModel',
        link: function(scope, element, attr, controller) {
            controller.$focused = false;
            element.on('focus', function() {
                scope.$apply(function(){
                    controller.$focused = true;
                });
            });
            element.on('blur', function(){
                scope.$apply(function(){
                    controller.$focused = false;
                });
            });
        }
    };
});
