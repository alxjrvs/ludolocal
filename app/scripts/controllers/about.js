'use strict';

/**
 * @ngdoc function
 * @name ludolocalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ludolocalApp
 */
angular.module('ludolocalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
