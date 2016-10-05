var simple = angular.module('simpleCRUD', []);

simple.controller('ReviewController', function ($scope) {
     $scope.saved = localStorage.getItem('lists');
     $scope.lists = (localStorage.getItem('lists')!=null) ? JSON.parse($scope.saved)
     :[{id: 1, name: 'Company A', rate: 'C', comment: 'Pretty bad'}]
     var ID = -1

  $scope.add = function() {
     $scope.lists.push({
       id: $scope.id,
       name: $scope.name,
       rate: $scope.rate,
       comment: $scope.comment,
     });
     localStorage.setItem('lists', JSON.stringify($scope.lists));
  };
  $scope.delete = function(id) {
     var index = -1;
     for(var i = 0; i < $scope.lists.length; i++){
       if($scope.lists[i].id == id){
         index = i;
         break;
       }
     }
     $scope.lists.splice(index, 1);
     localStorage.setItem('lists', JSON.stringify($scope.lists));
  };
  $scope.edit = function(id) {
    var index = -1;
    for(var i = 0; i < $scope.lists.length; i++){
      if($scope.lists[i].id == id){
        index = i;
        break;
      }
    }
    $scope.id = $scope.lists[index].id
    $scope.name = $scope.lists[index].name
    $scope.rate = $scope.lists[index].rate
    $scope.comment = $scope.lists[index].comment
    ID = index
  };
  $scope.update = function() {
    $scope.lists[ID].id = $scope.id
    $scope.lists[ID].name = $scope.name
    $scope.lists[ID].rate = $scope.rate
    $scope.lists[ID].comment = $scope.comment
    localStorage.setItem('lists', JSON.stringify($scope.lists));
  };
});
