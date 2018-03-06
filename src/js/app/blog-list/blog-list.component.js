'use strict';

angular.module('blogList').    //name of your module
    component('blogList',{     //name of your custom tag with dashes in the middle ;)
        //template : "<div class=''><h1 class='new-class'> {{ title }} </h1><button ng-click='someClickTest()'>Click Me!</button></div>",
        templateUrl:'/templates/blog-list.html',
        controller : function($routeParams, $scope){
            console.log($routeParams.id)
            
            
            var blogItems = [
                {title : "Some title", id : 1, description : "This is a book."},
                {title : "title", id : 2, description : "This is a book."},
                {title : "tea", id : 3, description : "This is a book."},
                {title : "lite", id : 4, description : "This is a book."},
            ]

            $scope.items = blogItems


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