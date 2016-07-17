/**
 * @ngdoc service
 * @name ngs.services:CalculatorService
 *
 * @description
 * Осуществляет вычисления по кредиту
 **/

angular.module('ngs.services').service('calculatorService', function () {
    class CalculatorService {
        constructor() {
            this.rate = 13.5;// процентная ставка (%)
        }

        count(data) {
            // Определяем параметры ипотечного кредита
            var loanAmount = data.price - data.price * data.firstPayment / 100;     // размер кредита (руб.)
            var monthlyRateFactor = this.rate / (12 * 100);      // месячная процентная ставка (коэффициент)
            var monthlyPeriodNumber = data.period * 12;     // количество периодов/платежей
            var monthlyPayment = loanAmount * (monthlyRateFactor / (1 - Math.pow((1 + monthlyRateFactor), -1 * (monthlyPeriodNumber - 1))));    // ежемесячный платёж
            var requiredMonthlyIncome = monthlyPayment * 2; // минимальный ежемесячный доход

            // Возвращаем результат вычислений
            var result = {
                rate: this.rate,
                loanAmount: loanAmount,
                monthlyPayment: monthlyPayment,
                requiredMonthlyIncome: requiredMonthlyIncome
            };

            return result;
        }
    }

    return new CalculatorService();
});
