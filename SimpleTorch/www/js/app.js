angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }



      });
    })

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('welcome', {
            url:'/welcome',
            templateUrl:'templates/welcome.html',
            controller:'WelcomeCtrl'
          })

      $urlRouterProvider.otherwise('/welcome');
    })