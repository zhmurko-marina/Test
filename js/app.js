import angularUiRouter from 'angular-ui-router'

import itemDirective from './services/itemDirective.js'
import dataService from './services/dataService.js'
import allTasksController from './controllers/allTasks/allTasksController.js'
import newTasksController from './controllers/newTask/newTaskController.js'
import editTaskController from './controllers/editTask/editTaskController.js'

angular.module('questApp',
  [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    angularUiRouter,
    itemDirective,
    dataService,
    allTasksController,
    newTasksController,
    editTaskController
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('todo',
      {
        url: '/todo',
        templateUrl: 'js/controllers/allTasks/allTasks.html',
        controller: 'AllTasksController as AllTasks'
      }).state('receipt',
      {
        url: '/receipt',
        templateUrl: 'js/controllers/receipt/receipt.html',
        controller: 'NewTaskController as NewTasks'
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
    $urlRouterProvider.when('', '/').otherwise('/all')
  })
