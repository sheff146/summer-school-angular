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
        restrict: 'E', // отслеживаем директивы, вызванные как элемент
        templateUrl: 'components/mortgage-calculator/view.html', // указываем шаблон компонента
        controller: 'mortgageCalculatorCtrl', // указываем контроллер, используемый для обработки логики
        scope: {
            default: '<', // для получения данных "по умолчанию"
            result: '<' // результаты вычислений
        },
        link: function (scope, element, attrs) {
            // Здесь может быть обработка DOM
        }
    }
});
