//MVC=controller display on view.html
var app = angular.module('swearApp');
app.controller('initialController', function($scope, $http, $location, totalFactory) {
//console.log("controller is connected");

  var result = "";
  var parentName = '';
  //method to test the validity of word name=parents radio button
    $scope.testWord = function(words, name) {

      parentName = name;
  //    URL purgo malum Returns processed input text as plain text.
        $http({
        method: 'GET',
        url: 'https://community-purgomalum.p.mashape.com/containsprofanity?text=' + words,
        headers: {
          "X-Mashape-Key": "NKrB1NxfZlmshD01BlFxbkA1DRpBp1Os8zejsnCfZ0RWp7w1l0",
          "Accept": "text/plain"
        }
    }).then(function(response){
    //   true false value returned
           result = response.data;
           console.log(result);
         }).then(function () {
         if (result === 'true') {
             // if true change view
             console.log(parentName);
// parentName=parameter talk to service calling method name of parent
             totalFactory.setInput(parentName)
           $location.path('/index2');
           //false else clear screen or alert box
         } else  {
               alert("The Word is Too Good!")
             }
            //  $scope.words = "";
         });

       }
});
