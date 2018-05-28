const moduleName = 'NewTaskController'
angular.module(moduleName, [])
  .controller('NewTaskController', function ($scope, dataService) {
    $scope.add = function () {
      dataService.toDoList.push({text: $scope.title})
      $scope.title = ''
    }
  })

export default moduleName
