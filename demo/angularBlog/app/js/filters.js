'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('interpolate', ['version',
    function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }
]).
filter('blogTime', function() {
    return function(date){
        var days, dateDiff;
        dateDiff = new Date() - new Date(date);
        days = dateDiff/(60 * 60 * 24 * 1000);
        if(Math.floor(days)>30){
            return Math.floor(days/31) + ' Months ago';
        }
    }
});