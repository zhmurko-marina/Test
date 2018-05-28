const moduleName = 'CurrentFoodController'
angular.module(moduleName, [])
  .controller('CurrentFoodController', function ($scope, foodService, $stateParams) {
    $scope.food = $stateParams.dataFood
  })

export default moduleName
