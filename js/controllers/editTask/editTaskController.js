const moduleName = 'EditTaskController'
angular.module(moduleName, [])
  .controller('EditTaskController', function ($scope, $mdDialog, $rootScope) {
    'ngInject'

    $scope.closeDialog = function () {
      $mdDialog.hide()
    }

    $scope.editCurrentTask = $rootScope.data.text
    $scope.saveEdit = function () {
      $rootScope.data.text = $scope.editCurrentTask
      $mdDialog.hide()
    }
  }
  )

export default moduleName
