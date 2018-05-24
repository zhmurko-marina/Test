const moduleName = 'NewTaskController'
angular.module(moduleName, [])
  .controller('NewTaskController', function ($scope, dataService) {
    $scope.add = function () {
      console.log(dataService)
      dataService.toDoList.push({text: $scope.title})
      $scope.title = ''
    }
  }
  )

export default moduleName
