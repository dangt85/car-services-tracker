describe('Controller', function() {
	beforeEach(module('starter.controllers'));
	beforeEach(module('starter.services'));


	describe('ServicesCtrl', function() {
		var scope, controller;

		beforeEach(inject(function (
			$rootScope,
			$controller,
			$ionicModal,
			Services) {

			scope = $rootScope.$new();

			controller = $controller('ServicesCtrl', {
				$scope: scope,
				$ionicModal: $ionicModal,
				Services: Services
			});
		}));

		it('should have a scope variable defined', function() {
			expect(scope).toBeDefined();
		});

		it('should list all services', function() {
			expect(scope.services.length).toBe(3);
		});

		it('should track service\'s date, milage, service type, amount paid,' +
			'description, notes, rating, agent, invoice scan', function() {

			// TODO create mock
			expect(true).toBe(false);
		});

		it('should allow deleting a service', function() {

			// TODO create mock
			expect(true).toBe(false);
		});

		it('should allow creating a new service', function() {

			expect(true).toBe(false);
		});

		it('should list services sorted by date', function() {

			// TODO create mock
			expect(true).toBe(false);
		});
	});
});