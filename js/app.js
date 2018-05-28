import angularUiRouter from 'angular-ui-router'

import itemDirective from './services/itemDirective.js'
import foodDirective from './services/foodDirective.js'
import dataService from './services/dataService.js'
import foodService from './services/foodService.js'
import allTasksController from './controllers/allTasks/allTasksController.js'
import newTasksController from './controllers/newTask/newTaskController.js'
import editTaskController from './controllers/editTask/editTaskController.js'
import allFoodController from './controllers/allFood/allFoodController.js'
import currentFoodController from './controllers/currentFood/currentFoodController.js'

angular.module('questApp',
  [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    angularUiRouter,
    itemDirective,
    foodDirective,
    dataService,
    foodService,
    allTasksController,
    newTasksController,
    editTaskController,
    allFoodController,
    currentFoodController
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('todo',
      {
        url: '/todo',
        templateUrl: 'js/controllers/allTasks/allTasks.html',
        controller: 'AllTasksController as AllTasks'
      }).state('allreceipt',
      {
        url: '/allreceipt',
        templateUrl: 'js/controllers/allFood/allFood.html',
        controller: 'AllFoodController'
      }).state('receipt',
      {
        url: '/allreceipt/:dataName',
        templateUrl: 'js/controllers/currentFood/currentFood.html',
        controller: 'CurrentFoodController',
        params: {
          dataFood: null
        }
      }).state('all',
      {
        url: '/all',
        templateUrl: 'js/controllers/allTasks/allTasks.html',
        controller: 'AllTasksController as AllTasks'
      }).state('new',
      {
        url: '/new',
        templateUrl: 'js/controllers/newTask/newTask.html',
        controller: 'NewTaskController as NewTasks'
      })
    $urlRouterProvider.when('', '/').otherwise('/todo')
  })
