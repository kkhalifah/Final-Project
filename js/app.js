  (function() { // <-- It's an IIFE
//  add 'ui.bootstrap'
  var app = angular.module("swearApp", ["ngRoute"]);

      app.config(function($routeProvider){
        $routeProvider.when("/index", {
          //object literal
          templateUrl: "view/view.html",
          controller: "initialController"
        })

        .when("/index2", {
          templateUrl: "view/view2.html",
          controller: "totalController"
          //controller 2

        }).otherwise({
          
        })

      });

  })();
