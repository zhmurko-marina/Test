const moduleName = 'itemDirective'

angular.module(moduleName, []).directive('item', function () {
  'ngInject'
  return {
    restrict: 'E',
    templateUrl: 'templates/itemToDoTemplate.html',
    scope: {
      data: '='
    },
    controller: function ($scope, dataService, $rootScope) {
      $scope.showDialog = (data) => {
        dataService.showDialog(data)
        $rootScope.data = data
      }
      $scope.delete = function () {
        dataService.toDoList.splice(this.$index, 1)
      }
    }
  }
})

export default moduleName
