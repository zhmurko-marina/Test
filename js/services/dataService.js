const moduleName = 'dataService'
angular.module(moduleName, [])
  .factory('dataService', function ($mdDialog) {
    let toDoList = [
      {
        text: 'buy milk'
      },
      {
        text: 'go to school'
      }
    ]

    let editTask = {
      toDoList: toDoList,
      showDialog () {
        $mdDialog.show({
          controller: 'EditTaskController',
          templateUrl: 'js/controllers/editTask/editFormTemplate.html',
          parent: angular.element(document.body)
        })
      }
    }
    return editTask
  })

export default moduleName
