myApp.controller('Registration1Controller', function ($scope, $state, $http, RegistrationService) {

  $http
  .get(ip + 'api/options/?type=gender') 
  .then(function (response) {
    $scope.options = response.data;
    console.log($scope.options);
  })
  .catch(function (error) {
    console.error("Error fetching Gender: " + error);
  }); 


  $scope.month = RegistrationService.getmonth() || null;
  $scope.date = RegistrationService.getdate() || null;
  $scope.year = RegistrationService.getyear() || null;
  $scope.gender = RegistrationService.getgender() || null;

  $scope.next2 = function () {
    if ($scope.gender == null || $scope.date == null || $scope.year == null || $scope.month == null) {
      Swal.fire('Please enter all valid details');
    } else {
      RegistrationService.setmonth($scope.month);
      RegistrationService.setdate($scope.date);
      RegistrationService.setyear($scope.year);
      RegistrationService.setgender($scope.gender);

      $state.go("Register2");
    }
  };
});
