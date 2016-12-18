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
    console.log("restaurante ");
    console.log(mensagens);
    mensagens=15;
    console.log("restaurante ");
    console.log(mensagens);
    $scope.mensagens = mensagens;
    // console.log(restctrl.mensagemAlerta);
    // restctrl.mensagemAlerta=DataService.setMessage();
    // console.log(restctrl.mensagemAlerta);
    // restctrl.mensagemAlerta=DataService.updateMessage(10);
    // console.log(restctrl.mensagemAlerta);

    restctrl.mensag = function() {

      restctrl.mensagemAlerta = DataService.getMessage();

    };

}


})();
