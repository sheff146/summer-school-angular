/**
 * @ngdoc controller
 * @name ngs.states:mortgageCalculator
 *
 * @description
 * Контроллер компонента "Ипотечный калькулятор"
 **/

angular.module('ngs.components').controller('mortgageCalculatorCtrl', function ($scope, BaseCtrl) {
    class MortgageCalculatorCtrl extends BaseCtrl {
        initialize() {
        }
    }

    new MortgageCalculatorCtrl($scope);
});