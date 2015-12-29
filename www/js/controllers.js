angular.module('starter.controllers', [ /*'ionic-datepicker'*/ ])
.controller('ServicesCtrl', function($scope, $filter, $ionicModal, Services) {

  $scope.currentDate = new Date();
  // $scope.currentDate = $filter("date")(Date.now());

  $scope.datePickerCallback = function(val) {
    if (!val) { 
      console.log('Date not selected');
    } else {
      console.log('Selected date is : ', val);
    }
  };

  $scope.services = Services.all();

  $scope.data = {
    showDelete: false
  };

  $scope.remove = function(service) {
    Services.remove(service);
  };

  $scope.moveItem = function(service, fromIndex, toIndex) {
    $scope.services.splice(fromIndex, 1);
    $scope.services.splice(toIndex, 0, service);
  };

  $ionicModal.fromTemplateUrl('templates/new-service.html', function(modal) {
    $scope.serviceModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Open our new service modal
  $scope.newService = function() {
    $scope.serviceModal.show();
  };

  // Close the new service modal
  $scope.closeNewService = function() {
    $scope.serviceModal.hide();
  };

  $scope.createService = function(service) {
    service.date = $scope.currentDate;
    Services.add(service);
    $scope.serviceModal.hide();
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
