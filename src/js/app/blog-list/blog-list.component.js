'use strict';

angular.module('blogList').    //name of your module
    component('blogList',{     //name of your custom tag with dashes in the middle ;)
        templateUrl:'/templates/blog-list.html',
        controller : function(Post, $routeParams, $scope){
            $scope.items = Post.query()
        }
    });
