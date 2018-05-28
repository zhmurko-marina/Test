const moduleName = 'AllTasksController'
angular.module(moduleName, [])
  .controller('AllTasksController', function ($scope, dataService) {
    $scope.allToDos = dataService.toDoList
  })

export default moduleName
