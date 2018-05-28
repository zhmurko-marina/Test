const moduleName = 'foodDirective'

angular.module(moduleName, []).directive('food', function () {
  'ngInject'
  return {
    restrict: 'E',
    templateUrl: 'templates/itemFoodTemplate.html',
    scope: {
      data: '=food'
    },
    controller: function ($scope, foodService, $state) {
      // $scope.sendData = (data) => {
      //   $state.go('receipt', {receipt: data})
      //   foodService.variables.food = data
      // }
      // console.log('1111111111111')
    }
  }
})

export default moduleName
