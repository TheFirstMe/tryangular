'use strict';

angular.module('blogList').
    controller('blogListController', function($scope){
        console.log("Hello")
        $scope.title = 'Hi there'
        $scope.clicks = 0
        $scope.someClickTest = function(){
            console.log("clicked")
            $scope.clicks+=1
            $scope.title = "Clicked " + $scope.clicks + " time(s)"
        }
    });
    //component('blogList')