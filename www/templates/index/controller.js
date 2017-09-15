angular.module('app.controllers')
.controller('indexCtrl',function($scope,$ionicTabsDelegate){
    $scope.$on("$ionicView.beforeLeave", function (event, data) {
        $ionicTabsDelegate.showBar(false);
    });
    $scope.$on("$ionicView.beforeEnter", function (event, data) {
        $ionicTabsDelegate.showBar(true);
    });
    $scope.WchartLogin=function(){

    }
});
