(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public','ui.bootstrap.modal'])
.config(config)
.value('mensagens', 0)
.controller('restaurantCtrl',restaurantCtrl);


config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');


  //$stateProvider

}

restaurantCtrl.$inject = ['$scope','mensagens','DataService'];
function restaurantCtrl($scope,mensagens,DataService) {
    var restctrl=this;

    mensagens=15;

    $scope.mensagens = mensagens;

    restctrl.mensag = function() {

      restctrl.mensagemAlerta = DataService.getMessage();

    };

}


})();
