var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("Home", {
      url: "/Home",
      templateUrl: "Home.html",
      controller: "HomeController",
    })
    .state("Register", {
      url: "/Register",
      templateUrl: "Registration.html",
      controller: "RegistrationController",
    })
    .state("Drive", {
      url: "/Drive",
      templateUrl: "Drive.html",
      controller: "DriveController",
    })
    .state("Login", {
      url: "/Login",
      templateUrl: "Login.html",
      controller: "LoginController",
    })
    .state("Login1", {
      url: "/Login1",
      templateUrl: "Login1.html",
      controller: "Login1Controller",
    })
    .state("Register1", {
      url: "/Register1",
      templateUrl: "Registration1.html",
      controller: "Registration1Controller",
    })
    .state("Register2", {
      url: "/Register2",
      templateUrl: "Registration2.html",
      controller: "Registration2Controller",
    })
    .state("Register3", {
      url: "/Register3",
      templateUrl: "Registration3.html",
      controller: "Registration3Controller",
    })
    .state("Register4", {
      url: "/Register4",
      templateUrl: "Registration4.html",
      controller: "Registration4Controller",
    });

  $urlRouterProvider.otherwise("/Home");
});

var ip = "https://192.168.218.65:8000/";

myApp.service("UserDataService", function () {
  var userData = {};

  return {
    getEmail: function () {
      return userData.email;
    },
    setEmail: function (email) {
      userData.email = email;
    },
    getPassword: function () {
      return userData.password;
    },
    setPassword: function (password) {
      userData.password = password;
    },
    clearData: function () {
      userData = {};
    },
  };
});

myApp.service("RegistrationService", function () {
  var userData = {};

  return {
    gettitle: function () {
      return userData.title;
    },
    settitle: function (title) {
      userData.title = title;
    },
    getfirst_name: function () {
      return userData.first_name;
    },
    setfirst_name: function (first_name) {
      userData.first_name = first_name;
    },
    getlast_name: function () {
      return userData.last_name;
    },
    setlast_name: function (last_name) {
      userData.last_name = last_name;
    },
    getmonth: function () {
      return userData.month;
    },
    setmonth: function (month) {
      userData.month = month;
    },
    getdate: function () {
      return userData.date;
    },
    setdate: function (date) {
      userData.date = date;
    },
    getyear: function () {
      return userData.year;
    },
    setyear: function (year) {
      userData.year = year;
    },
    getgender: function () {
      return userData.gender;
    },
    setgender: function (gender) {
      userData.gender = gender;
    },
    getusername: function () {
      return userData.username;
    },
    setusername: function (username) {
      userData.username = username;
    },
    getphone: function () {
      return userData.phone;
    },
    setphone: function (phone) {
      userData.phone = phone;
    },
    getpassword: function () {
      return userData.password;
    },
    setpassword: function (password) {
      userData.password = password;
    },
    getrecovery_email: function () {
      return userData.recovery_email;
    },
    setrecovery_email: function (recovery_email) {
      userData.recovery_email = recovery_email;
    },
    getcode: function () {
      return userData.code;
    },
    setcode: function (code) {
      userData.code = code;
    },
    clearData: function () {
      userData = {};
    },
  };
});

myApp.controller("HomeController", [
  "$scope",
  "$state",
  "$http",
  function ($scope, $state, $http) {},
]);
