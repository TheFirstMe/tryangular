'use strict';

angular.module('blogDetail').    //name of your module
    component('blogDetail',{     //name of your custom tag with dashes in the middle ;)
        templateUrl:'/templates/blog-detail.html',
        controller : function($http, $location, $routeParams, $scope){

            $http.get("/json/posts.json").then(successCallback, errorCallback);

            function successCallback(response, status, config, statusText){
                $scope.notFound = true
                var blogItems = response.data
                $scope.post = blogItems
                angular.forEach(blogItems, function(post){
                    if(post.id == $routeParams.id){
                        $scope.notFound = false
                        $scope.post = post
                    }
                })
                if($scope.notFound){
                    console.log("Not found")
                    //change location
                    $location.path("/")
                }
    
            }
            function errorCallback(response, status, config, statusText){
                $scope.notFound = true
                console.log(response)
            }
            
            // var blogItems = [
            //     {title : "Some title", id : 1, description : "This is a book."},
            //     {title : "title", id : 2, description : "This is a book."},
            //     {title : "tea", id : 3, description : "This is a book."},
            //     {title : "lite", id : 4, description : "This is a book."},
            // ]

            // //console.log($routeParams.id)
            // $scope.title = "Blog " + $routeParams.id
            
            // angular.forEach(blogItems, function(post){
            //     if(post.id == $routeParams.id){
            //         $scope.notFound = false
            //         $scope.post = post
            //     }
            // })
            
        }
    });
