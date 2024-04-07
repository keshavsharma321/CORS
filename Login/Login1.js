myApp.controller("Login1Controller", ["$scope", "$http", "$state", "UserDataService", function ($scope, $http, $state, UserDataService) {
    $scope.showPassword = false;
  
    $scope.login = function () {
      if ($scope.password == null) {
        Swal.fire('Please enter a valid password');
      } else {
        var email = UserDataService.getEmail();
        var password = $scope.password;
  
        var data = {
          email: email,
          password: password,
        };
        console.log(data);
  
        $http({
          method: "POST",
          url: ip + 'api/login_view/',
          data: data,
          withCredentials: true,
        })
          .then(function (response) {
            console.log("Response from server:", response.data);
            Swal.fire('Login Successful');
            $state.go("Drive");
  
           
            UserDataService.clearData();
          })
          .catch(function (error) {
            console.error("Error:", error);
            Swal.fire('Login Unsuccessful');
          });
      }
    };
  }]);


