var app = angular.module('swearApp');
app.controller('initialController', function($scope, $http) {
console.log("controller is connected");
  // var words = "";
  // var response = "";
    $scope.testWord = function(words) {
        $http({
        method: 'GET',
        url: 'https://community-purgomalum.p.mashape.com/containsprofanity?text=' + words,
        headers: {
          "X-Mashape-Key": "NKrB1NxfZlmshD01BlFxbkA1DRpBp1Os8zejsnCfZ0RWp7w1l0",
          "Accept": "text/plain"
        }
      }).then(function(response){
        if (response.data === true) {
          //change view
            // if true change view else clear screen
          $location.path('/index2')

        } else {}

        console.log(response.data);
      })




    //   $scope.words = response.data
    //  console.log($scope.words);
    // }
}
});
