(function () {
'use strict';

angular.module('NarrowItDownApp', [])

.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItems)


function FoundItems() {
  var ddo = {
    templateUrl: 'resultados.html',
    scope: {
      found:'<',
      myVar:'<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'lista',
    bindToController: true

  }
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;

    narrowDown.myVar = false;

    narrowDown.logMenuItems = function () {

      var promise = MenuSearchService.getMatchedMenuItems(narrowDown.sItem);

      promise.then(function (response) {
         narrowDown.found=response;
         narrowDown.myVar = true;
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  narrowDown.removeItem = function (itemIndex) {
    narrowDown.found.splice(itemIndex, 1);
    if(narrowDown.found.length===0) {narrowDown.myVar = false;}
  };

  }

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {

  var service = this;

  service.getMatchedMenuItems = function(item) {

      return $http({method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")}).then(function (result) {
      var foundItems= [];
      var totItems= result.data.menu_items;

        for (var x = 0; x < totItems.length; x++) {
                if ((totItems[x].description).indexOf(item)>=0) {
                  foundItems.push(totItems[x]);
                }
        };
      // return processed items

      return foundItems;
    });
};

}

})();
