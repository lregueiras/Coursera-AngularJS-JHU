(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBought = this;
  itemBought.items = ShoppingListCheckOffService.getItemsBought();

  itemBought.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItemsAlreadyBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsBought = [{name: "Bolachas",quantity: 10}, { name: "cookies", quantity: 10 },
    { name: "caramels", quantity: 10 },{ name: "eggs", quantity: 10 },{ name: "cheese", quantity: 10 }];

  var itemsAlreadyBought = [];



  service.removeItem = function (itemIdex) {
    var item = {
        name: itemsBought[itemIdex].name,
        quantity: itemsBought[itemIdex].quantity
       };
       itemsBought.splice(itemIdex, 1);
       itemsAlreadyBought.push(item);
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };

  service.getItems = function () {
    return items;
  };
}

})();
