var myApp = angular.module('myApp', []);

myApp.controller('ColorCtrl', ['$scope', function($scope){

  $scope.commitsStyle = {};
  $scope.starsStyle = {};
  $scope.forksStyle = {};
  $scope.issuesStyle = {};
  $scope.pullsStyle = {};

  $scope.commitsGreen = function (){
   $scope.commitsStyle.colorClass = "green";
  }

  $scope.commitsWhite = function (){
   $scope.commitsStyle.colorClass = "white";
  }

  $scope.commitsRed = function() {
   $scope.commitsStyle.colorClass = "red";
  }

  $scope.starsGreen = function (){
   $scope.starsStyle.colorClass = "green";
  }

  $scope.starsWhite = function (){
   $scope.starsStyle.colorClass = "white";
  }

  $scope.starsRed = function() {
   $scope.starsStyle.colorClass = "red";
  }

  $scope.forksGreen = function (){
   $scope.forksStyle.colorClass = "green";
  }

  $scope.forksWhite = function (){
   $scope.forksStyle.colorClass = "white";
  }

  $scope.forksRed = function() {
   $scope.forksStyle.colorClass = "red";
  }

  $scope.issuesGreen = function (){
   $scope.issuesStyle.colorClass = "green";
  }

  $scope.issuesWhite = function (){
   $scope.issuesStyle.colorClass = "white";
  }

  $scope.issuesRed = function() {
   $scope.issuesStyle.colorClass = "red";
  }

  $scope.pullsGreen = function (){
   $scope.pullsStyle.colorClass = "green";
  }

  $scope.pullsWhite = function (){
   $scope.pullsStyle.colorClass = "white";
  }

  $scope.pullsRed = function() {
   $scope.pullsStyle.colorClass = "red";
  }
}]);
