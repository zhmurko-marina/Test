const moduleName = 'AllTasksController'
angular.module(moduleName, [])
  .controller('AllTasksController', function ($scope, dataService) {
    $scope.allToDos = dataService.toDoList
    $scope.delete = function () {
      $scope.allToDos.splice(this.$index, 1)
    }
  })

export default moduleName
