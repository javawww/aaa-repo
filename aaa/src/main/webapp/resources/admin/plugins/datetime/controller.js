'use strict';

angular.module('app.controllers', [])

    .controller('appCtrl',['$scope',function ($scope) {
        $scope.test = 'test';
        console.log($scope.test);
    }])