'use strict';

angular.module('blogList').    //name of your module
    component('blogList',{     //name of your custom tag with dashes in the middle ;)
        //template : "<div class=''><h1 class='new-class'> {{ title }} </h1><button ng-click='someClickTest()'>Click Me!</button></div>",
        templateUrl:'/templates/blog-list.html',
        controller : function($scope){
            console.log("Hello")
            $scope.title = 'Hi there'
            $scope.clicks = 0
            $scope.someClickTest = function(){
                console.log("clicked")
                $scope.clicks+=1
                $scope.title = "Clicked " + $scope.clicks + " time(s)"
            }
        }
    });
    // controller('blogListController', function($scope){
    //     console.log("Hello")
    //     $scope.title = 'Hi there'
    //     $scope.clicks = 0
    //     $scope.someClickTest = function(){
    //         console.log("clicked")
    //         $scope.clicks+=1
    //         $scope.title = "Clicked " + $scope.clicks + " time(s)"
    //     }
    // });
    //component('blogList')