(function() {
"use strict";

/**
 * Modal View for registering user
 */
angular.module('public')
.controller("ShowCtrl",ShowCtrl)
.directive('mySignup',MySignup);

ShowCtrl.$inject = ['$scope','MenuService','mensagens','DataService'];
 function ShowCtrl($scope,MenuService,mensagens,DataService) {
   var sctrl=this;
  // sctrl.showModal = false;

  sctrl.open = function() {
    // Sincronização de informação entre as várias instâncias
    //sctrl.mensagemAlerta=DataService.setMessage();

    sctrl.user = DataService.getFavoriteDish();

    //
    $scope.showModal = true;
    sctrl.mensagemRegisto="Your information is already saved."
    sctrl.embebida=1;
  };

  sctrl.ok = function() {
    mensagens=0;
    $scope.mensagens = mensagens;
    $scope.restctrl.mensagens = mensagens;
    $scope.showModal = false;
  };

  sctrl.cancel = function() {
    mensagens=0;
    $scope.mensagens = mensagens;
    $scope.restctrl.mensagens = mensagens;
    $scope.showModal = false;
  };

  //sctrl.user.myVar = true;

  sctrl.logMenuItems = function () {

    sctrl.user.myVar = true;

    var promise = MenuService.getMenuItemsItem(sctrl.user.itemespecifico);
    sctrl.user.foundespecifico=null;

    promise.then(function (response) {
       sctrl.user.foundespecifico=response;
       sctrl.user.myVar = true;
       DataService.setFavoriteDish(sctrl.user);
      //  $scope.showModal = false;

       sctrl.userregistado=true;
       sctrl.mensagemRegisto="Your information has been saved."
    })
    .catch(function (error) {
      console.log(error);
      sctrl.user.myVar=false;
      sctrl.userregistado=false;
    })

};

}

function MySignup() {
  return {
    restrict: 'AE',
    scope: true,
    templateUrl: 'my-SignUp.html',
    bindToController: true
  };
};

})();
