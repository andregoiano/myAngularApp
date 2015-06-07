myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.name = data;
        $scope.job_title = data;
        $scope.age = data;
        $scope.location = data;
    });
}]);