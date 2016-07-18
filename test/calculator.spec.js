describe('Calculator tests', function () {
    var calculator, mockSettingsService;
    var rate = 11.5;

    beforeEach(function () {
        module('ngs.services')

        mockSettingsService = {
            get: function (name) {
                if (name === 'rate') {
                    return rate;
                }
            }
        };

        module(function ($provide) {
            $provide.value('settingsService', mockSettingsService);
        });

        inject(function (calculatorService) {
            calculator = calculatorService;
        });
    });

    afterEach(function () {
        calculator = null;
        mockSettingsService = null;
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
        expect(result.rate).toBe(rate);
    });
});