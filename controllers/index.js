var app = angular.module("peachTreeApp", [
  "ngMaterial",
  "ngMessages",
  "ngRoute",
  "angular-loading-bar",
  "ngAnimate",
  "ngFileUpload",
]);
app.config(function ($routeProvider) {
  // console.log = function () {}; //override the original log function

  $routeProvider
    .when("/", {
      templateUrl: "public/login.html",
      controller: "loginController",
    })
    .when("/transactions", {
      templateUrl: "public/transactions.html",
      controller: "transactionsController",
    })
    .otherwise({
      redirectTo: "/",
    });
});
