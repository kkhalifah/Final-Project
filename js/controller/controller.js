
var app = angular.module('swearApp');
app.controller('initialController', function($scope, $http, $location, totalFactory) {
//console.log("controller is connected");

  var result = "";
  var parentName = '';
    $scope.testWord = function(words, name) {
    //  console.log(name);
      parentName = name;
  //    words = $scope.parent.words
        $http({
        method: 'GET',
        url: 'https://community-purgomalum.p.mashape.com/containsprofanity?text=' + words,
        headers: {
          "X-Mashape-Key": "NKrB1NxfZlmshD01BlFxbkA1DRpBp1Os8zejsnCfZ0RWp7w1l0",
          "Accept": "text/plain"
        }
    }).then(function(response){
           result = response.data;
           console.log(result);
         }).then(function () {
         if (result === 'true') {
             // if true change view
             console.log(parentName);
             totalFactory.setInput(parentName)
           $location.path('/index2');
           //else clear screen or alert box
         } else  {
               alert("Try another word!")
                    //reset form input does not work yet
            
             }
              $scope.words = "";
         });
       }
});
