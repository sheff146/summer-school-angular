/**
 * @ngdoc directive
 * @name ngs.components:mortgageCalculator
 * @restrict E
 * @element ANY
 *
 * @description
 * Ипотечный калькулятор
 **/

angular.module('ngs.components').directive('mortgageCalculator', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/mortgage-calculator/view.html',
        controller: 'mortgageCalculatorCtrl',
        scope: {
            default: '<',
            result: '<'
        },
        link: function (scope, element, attrs) {
        }
    }
});
