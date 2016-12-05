(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService','foundItems'];
function ItemsListController(MenuDataService,foundItems) {
  var itemsList = this;
  itemsList.foundItems = foundItems;


}

})();
