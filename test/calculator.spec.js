describe('Calculator tests', function () {
    var calculator;

    beforeEach(module('ngs.services'));

    beforeEach(inject(function (calculatorService) {
        calculator = calculatorService;
    }));

    afterEach(function () {
        calculator = null;
    });

    function getDataForCalc(price, firstPayment, period) {
        return {
            price: price,                   // стоимость квартиры (руб.)
            firstPayment: firstPayment,     // размер первого платежа (%)
            period: period                  // срок выплат (лет)
        };
    }

    it('should check the rate', function () {
        // A...
        var data = getDataForCalc(3000000, 30, 20);
        // A...
        var result = calculator.count(data);
        // A...
        expect(result.rate).toBe(13.5);
    });
});