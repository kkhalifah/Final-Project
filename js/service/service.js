//Set
var app = angular.module("swearApp");
//needs to be connected
app.factory('totalFactory', function(){
//take info from view 1 and display on page two from submit button

var parents = {
  mom: 0, dad:0
}
//method  name=ng-model set input value from radio btn to mom or dad
return {
  setInput:  function (name){
    if (name === 'mom') {
       parents.mom++
       console.log(parents);
       return parents
    }
    else {
        parents.dad++

         console.log(parents);
        return parents
      }
    },
    //method to store values sent to second page
    //totalController
      getInput: function () {
      return parents;
    }

  }

});
