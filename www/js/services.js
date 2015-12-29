angular.module('starter.services', [])

.factory('Services', function() {

  var services = [{
    id: 0,
    date: new Date(2011, 11, 1),
    milage: 600,
    serviceType: 'Service #1',
    amountPaid: 80
  }, {
    id: 1,
    date: new Date(2012, 4, 12),
    milage: 4500,
    serviceType: 'Service #2',
    amountPaid: 150
  }, {
    id: 2,
    date: new Date(2012, 10, 12),
    milage: 9000,
    serviceType: 'Service #1',
    amountPaid: 80
  }];

  return {
    all: function() {
      return services;
    },
    add: function(service) {
      services.push(service);
    },
    remove: function(service) {
      services.splice(services.indexOf(service), 1);
    },
    get: function(serviceId) {
      for (var i = 0; i < services.length; i++) {
        if (services[i].id === parseInt(serviceId)) {
          return services[i];
        }
      }
      return null;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
