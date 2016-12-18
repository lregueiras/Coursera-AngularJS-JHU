(function () {
"use strict";

angular.module('common')
.service('DataService', DataService);


DataService.$inject = [];
function DataService() {
  var service = this;


  service.setMessage = function () {
    service.messageAlerta=0;
    return service.messageAlerta;
  };

  service.getMessage = function () {
    return service.messageAlerta;
  };

  service.updateMessage = function (valor) {
    service.messageAlerta=valor;
    return service.messageAlerta;
  };

  service.setFavoriteDish = function (objeto) {
    service.newFavoriteDish = {};
    service.newFavoriteDish =
      {firstname:objeto.firstname,
        lastname:objeto.lastname,
        email:objeto.email,
        phone:objeto.phone,
        itemespecifico:objeto.itemespecifico,
        foundespecifico:objeto.foundespecifico,
        myVar:objeto.myVar

    };
    service.newFavoriteDish=objeto;
    return true;
  };

  service.getFavoriteDish = function () {
    return service.newFavoriteDish;
  };

}

})();
