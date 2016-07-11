/**
 * @ngdoc filter
 * @name ngs.filters:formattedNumber
 *
 * @description
 * Выполняет форматирование чисел
 **/

angular.module('ngs.filters').filter('formattedNumber', function () {
    return function (value, fractionSize = 2) {
        if (!_.isNumber(value) || !_.isNumber(fractionSize)) {
            return value;
        }

        var result = value.toFixed(fractionSize);

        return result;
    };
});
