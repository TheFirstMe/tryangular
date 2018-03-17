'use strict';

//name of your module
angular.
    module('post').
        factory('Post', function($resource){
            var url = '/json/posts.json'
            return $resource(url, {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true,
                    //  transformRespone
                    //  interceptor
                },
                get: {
                    method: "GET",
                    //params: {},
                    isArray: true,
                    cache: true,
                }
            })
        });  