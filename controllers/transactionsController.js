app.controller("transactionsController", function (
  $scope,
  cfpLoadingBar,
  Upload,
  $timeout
) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  $scope.transactionAmount = "";
  $scope.loanAmount = "";
  $scope.transactionsList = [
    {
      date: today,
      beneficiary: "Nitin",
      payment_type: "Online",
      transactionAmount: 1000,
    },
  ];
  $scope.loanList = [
    {
      date: today,
      document: "Driving License",
      preview: "",
      amount: "1500",
      status: "Pending",
    },
  ];
  $scope.addNewTransaction = function () {
    cfpLoadingBar.start();
    $scope.transactionsList.push({
      date: today,
      beneficiary: $scope.toDropdownMenuButton,
      payment_type: "Online",
      transactionAmount: $scope.transactionAmount,
    });
    $scope.fromDropdownMenuButton = "";
    $scope.toDropdownMenuButton = "";
    $scope.transactionAmount = "";
    cfpLoadingBar.complete();
  };

  $scope.picFile = "";

  $scope.upload = function (file) {
    Upload.upload({
      url: "https://angular-file-upload-cors-srv.appspot.com/upload",
      data: { file: file },
    }).then(
      function (resp) {
        console.log("res==>", resp.data);
      },
      function (resp) {
        console.log("Error status: " + resp.status);
      },
      function (evt) {
        var progressPercentage = parseInt((100.0 * evt.loaded) / evt.total);
        console.log(
          "progress: " + progressPercentage + "% " + evt.config.data.file.name
        );
      }
    );
  };


  $scope.selectDocument = "";
  $scope.loanAmount = "";
  $scope.addNewLoan = function () {
    cfpLoadingBar.start();
    $scope.upload($scope.picFile);
    $scope.loanList.push({
      date: today,
      document: $scope.selectDocument,
      preview: $scope.picFile.$ngfUrlBlob,
      amount: $scope.loanAmount,
      status: "Pending",
    });
    $scope.selectDocument = "";
    $scope.loanAmount = "";
    $scope.selectFile = "";
    $scope.fileName = "";
    cfpLoadingBar.complete();
  };
});
