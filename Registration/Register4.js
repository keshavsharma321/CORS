myApp.controller('Registration4Controller', function ($scope, $state, $http, RegistrationService) {
  $scope.verify = function () {
    if ($scope.recoveryemail == null || RegistrationService.getusername() == null) {
      Swal.fire('Please enter all valid details');
    } else {
      var data = {
        username: RegistrationService.getusername(),
        email: $scope.recoveryemail,
      };


      $http({
        method: "POST",
        url: ip + 'api/verify/',
        data: data,
        withCredentials: true,
      })
        .then(function (response) {
          console.log("Response", response.data);
          Swal.fire('Enter the code you received on your mail');
        })
        .catch(function (error) {
          console.error("Error", error);
        });
    };
  };

  $scope.code = function () {
    if ($scope.Code == null) {
      Swal.fire('Please enter valid Code');
    } else {
      var data = {
        username: RegistrationService.getusername(),
        code: Number($scope.Code),
      };

      $http({
        method: "POST",
        url: ip + 'api/verify/',
        data: data,
        withCredentials: true,
      })
        .then(function (response) {
          console.log("Response from server:", response.data);
          Swal.fire('Code Verified');
        })
        .catch(function (error) {
          console.error("Error:", error);
          Swal.fire('Code Invalid');
        });
    };
  };

  $scope.next4 = function () {
    var title = RegistrationService.gettitle();
    var first_name = RegistrationService.getfirst_name();
    var last_name = RegistrationService.getlast_name();
    var month = Number(RegistrationService.getmonth());
    var date = RegistrationService.getdate();
    var year = RegistrationService.getyear();
    var gender = RegistrationService.getgender();
    var username = RegistrationService.getusername();
    var phone = RegistrationService.getphone();
    var password = RegistrationService.getpassword();
    var recoveryemail = $scope.recoveryemail;

    var data = {
      title: title,
      first_name: first_name,
      last_name: last_name,
      month: month,
      date: date,
      year: year,
      gender: gender,
      username: username,
      phone: phone,
      password: password,
      recovery_email: recoveryemail,
    };

    $http({
      method: "POST",
      url: ip + 'api/user_registration/',
      data: data,
      withCredentials: true,
    })
      .then(function (response) {
        console.log("Response from server:", response.data);
        Swal.fire('Registration Successful');
        $state.go("Login");
      })
      .catch(function (error) {
        console.error("Error:", error);
        Swal.fire('Error in registration');
      });

    RegistrationService.clearData();
  };
});
