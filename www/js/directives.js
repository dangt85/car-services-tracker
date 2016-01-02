angular.module('starter.directives', [])
.constant('RatingConfig', {
	max: 5,
	stateOn: null,
	stateOff: null
})
.controller('RatingCtrl', ['$scope', '$attrs', 'RatingConfig', function($scope, $attrs, RatingConfig) {
	var ngModelCtrl;
	ngModelCtrl = {
		$setViewValue: angular.noop
	};
	this.init = function(ngModelCtrl_) {
		var max, ratingStates;
		ngModelCtrl = ngModelCtrl_;
		ngModelCtrl.$render = this.render;
		this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : RatingConfig.stateOn;
		this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : RatingConfig.stateOff;
		max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : RatingConfig.max;
		ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(max);
		return $scope.range = this.buildTemplateObjects(ratingStates);
	};
	this.buildTemplateObjects = function(states) {
		var i, j, len, ref;
		ref = states.length;
		for (j = 0, len = ref.length; j < len; j++) {
			i = ref[j];
			states[i] = angular.extend({
				index: 1
			}, {
				stateOn: this.stateOn,
				stateOff: this.stateOff
			}, states[i]);
		}
		return states;
	};
	$scope.rate = function(value) {
		if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
			ngModelCtrl.$setViewValue(value);
			return ngModelCtrl.$render();
		}
	};
	$scope.reset = function() {
		$scope.value = ngModelCtrl.$viewValue;
		return $scope.onLeave();
	};
	$scope.enter = function(value) {
		if (!$scope.readonly) {
			$scope.value = value;
		}
		return $scope.onHover({
			value: value
		});
	};
	$scope.onKeydown = function(evt) {
		if (/(37|38|39|40)/.test(evt.which)) {
			evt.preventDefault();
			evt.stopPropagation();
			return $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? {
				1: -1
			} : void 0));
		}
	};
	this.render = function() {
		return $scope.value = ngModelCtrl.$viewValue;
	};
	return this;
}])
.directive('rating', function() {
	return {
		restrict: 'EA',
		require: ['rating', 'ngModel'],
		scope: {
			readonly: '=?',
			onHover: '&',
			onLeave: '&'
		},
		controller: 'RatingCtrl',
		templateUrl: 'templates/rating.html',
		replace: true,
		link: function(scope, element, attrs, ctrls) {
			var ngModelCtrl, ratingCtrl;
			ratingCtrl = ctrls[0];
			ngModelCtrl = ctrls[1];
			if (ngModelCtrl) {
				return ratingCtrl.init(ngModelCtrl);
			}
		}
	};
});