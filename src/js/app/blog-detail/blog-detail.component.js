'use strict';

angular.module('blogDetail').    //name of your module
    component('blogDetail',{     //name of your custom tag with dashes in the middle ;)
        templateUrl:'/templates/blog-detail.html',
        controller : function($routeParams, $scope){
            var blogItems = [
                {title : "Some title", id : 1, description : "This is a book."},
                {title : "title", id : 2, description : "This is a book."},
                {title : "tea", id : 3, description : "This is a book."},
                {title : "lite", id : 4, description : "This is a book."},
            ]

            //console.log($routeParams.id)
            $scope.title = "Blog " + $routeParams.id
        }
    });
