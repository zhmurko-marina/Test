const moduleName = 'foodService'
angular.module(moduleName, []).service('foodService', function () {
  let foodService = {
    variables: {
      food: {}
    },
    getData: function () {
      return axios.get('../../food.json')
    }
  }
  return foodService
})

export default moduleName
