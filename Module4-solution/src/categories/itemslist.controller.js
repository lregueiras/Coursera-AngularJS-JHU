(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['foundItems'];
function ItemsListController(foundItems) {
  var itemsList = this;
  itemsList.foundItems = foundItems;


}

})();
