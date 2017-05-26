  (function() { // <-- It's an IIFE
  var app = angular.module("swearApp", ["ngRoute"]);

      app.config(function($routeProvider){
        $routeProvider.when("/index", {
          //object literal
          templateUrl: "view/view.html",
          controller: "initialController"
        })

        .when("/index2", {
          templateUrl: "view/view2.html",
          //controller 2

        }).otherwise({
          // template: '<img src="images/spider.jpg" alt="spider">'
        })

      });

  })();
