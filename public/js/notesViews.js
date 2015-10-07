(function (angular) {

  var theModule = angular.module('notesView', []);

  theModule.controller('notesViewController', ['$scope',
    function($scope){
      $scope.notes = [
        {
          note: 'Hello World',
          color: 'yellow',
          author: 'Bruno Quintella'
        },
        {
          note: 'Hello World Again',
          color: 'blue',
          author: 'Bruno Quintella'
        },
        {
          note: 'Hello World Finally',
          color: 'green',
          author: 'Bruno Quintella'
        },
        {
          note: 'This is from JS code',
          color: 'orange',
          author: 'Bruno Quintella'
        }
      ];
    }
  ]);

})(window.angular);
