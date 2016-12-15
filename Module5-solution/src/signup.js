(function() {
"use strict";

/**
 * Modal View for registering user
 */
angular.module('public')
.controller("ShowCtrl",ShowCtrl)
.directive('mySignup',MySignup);

ShowCtrl.$inject = ['$scope','MenuService','DataService'];
 function ShowCtrl($scope,MenuService,DataService) {
   var sctrl=this;
  // sctrl.showModal = false;

  sctrl.open = function() {
    $scope.showModal = true;
    sctrl.mensagemRegisto="Your information is already saved."
    sctrl.embebida=1;
  };

  sctrl.ok = function() {
    $scope.showModal = false;
  };

  sctrl.cancel = function() {
    $scope.showModal = false;
  };

  sctrl.myVar = true;

  sctrl.logMenuItems = function () {

    sctrl.myVar = true;

    var promise = MenuService.getMenuItemsItem(sctrl.user.itemespecifico);
    sctrl.user.foundespecifico=null;

    promise.then(function (response) {
       sctrl.user.foundespecifico=response;
       sctrl.myVar = true;
       DataService.setFavoriteDish(sctrl.user);
      //  $scope.showModal = false;
       sctrl.userregistado=true;
       sctrl.mensagemRegisto="Your information has been saved."
    })
    .catch(function (error) {
      console.log(error);
      sctrl.myVar=false;
      sctrl.userregistado=false;
    })

};

}

function MySignup() {
  return {
    restrict: 'AE',
    scope: true,

    // scope : {
    //         showModal:"=", //getting value from controller
    //         action: '&'
    //     },
    templateUrl: 'my-SignUp.html',
    bindToController: true
  };
};

})();
