app.controller("loginController", function ($scope, $location, cfpLoadingBar) {
  $scope.login = function () {
    cfpLoadingBar.start();
    if (
      $scope.name === "admin@peachtree.com" &&
      $scope.password === "admin123"
    ) {
      cfpLoadingBar.complete();
      $location.path("/transactions");
    } else {
      cfpLoadingBar.complete();
      alert("Wrong creds");
    }
  };
});
