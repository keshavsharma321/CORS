
myApp.controller('RegistrationController', function ($scope, $state, $http, RegistrationService) {

  $http
  .get(ip + 'api/options/?type=title')
  .then(function (response) {
    $scope.titles = response.data;
    console.log($scope.titles);
  })
  .catch(function (error) {
    console.error("Error fetching Gender: " + error);
  });   



  $scope.title = RegistrationService.gettitle() || null;
  $scope.first_name = RegistrationService.getfirst_name() || null;
  $scope.last_name = RegistrationService.getlast_name() || null;

  $scope.next1 = function () {
    if ($scope.title == null || $scope.first_name == null) {
      Swal.fire('Please enter all valid details');
    } else {
      RegistrationService.settitle($scope.title);
      RegistrationService.setfirst_name($scope.first_name);
      RegistrationService.setlast_name($scope.last_name);

      $state.go("Register1");
    }
  };
});
