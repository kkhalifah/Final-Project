  (function() { // <-- It's an IIFE
// Routing Service  ng-view   adjusts the view
  var app = angular.module("swearApp", ["ngRoute"]);

      app.config(function($routeProvider){
        $routeProvider.when("/index", {
        
          templateUrl: "view/view.html",
          controller: "initialController"
        })

        .when("/index2", {
          templateUrl: "view/view2.html",
          controller: "totalController"


        })
        // .otherwise({
        // })

      });

  })();
