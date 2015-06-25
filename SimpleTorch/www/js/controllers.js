angular.module('starter.controllers', ['ngCordova'])

    .controller('WelcomeCtrl', function($scope, $ionicPlatform, $cordovaFlashlight) {

        $scope.flashlightController;

        $ionicPlatform.ready(function() {

        });

        $scope.toggleLight = function(){
            $cordovaFlashlight.toggle();
        }

    }
)