const moduleName = 'AllFoodController'
angular.module(moduleName, [])
  .controller('AllFoodController', function ($scope, foodService) {
    $scope.options = {
      foodData: [],
      currentPage: 0,
      pageSize: 5,
      allPages: [],
      data: [],
      length: 0,
      numberOfPages: 0
    }

    foodService.getData().then((result) => {
      $scope.options.foodData = result.data
      $scope.options.length = result.data.length
      $scope.options.numberOfPages = Math.ceil($scope.options.length / $scope.options.pageSize)
      $scope.options.allPages = [...Array($scope.options.numberOfPages).keys()]
      $scope.setCurrentPage = (page) => {
        $scope.options.currentPage = page
        for (let i = 0, j = page * $scope.options.pageSize; i < $scope.options.pageSize; i++, j++) {
          $scope.options.data[i] = $scope.options.foodData[j]
        }
      }
      $scope.setCurrentPage(0)
      $scope.$apply()
    })
  })

export default moduleName
