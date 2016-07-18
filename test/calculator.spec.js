var calculator, mockSettingsService;
var rate = 11.5;

var createMockSettingsService = function () {
    module('ngs.services');

    mockSettingsService = {
        get: function (name) {
            if (name === 'rate') {
                return rate;
            }
        }
    };
};

var createCalculator = function () {
    module(function ($provide) {
        $provide.value('settingsService', mockSettingsService);
    });

    inject(function (calculatorService) {
        calculator = calculatorService;
    });
};

function getDataForCalc(price, firstPayment, period) {
    return {
        price: price,                   // стоимость квартиры (руб.)
        firstPayment: firstPayment,     // размер первого платежа (%)
        period: period                  // срок выплат (лет)
    };
}

describe('Calculator tests', function () {
    beforeEach(function () {
        createMockSettingsService();
        createCalculator();
    });

    afterEach(function () {
        calculator = null;
        mockSettingsService = null;
    });

    it('should check the rate', function () {
        // A...
        var data = getDataForCalc(3000000, 30, 20);
        // A...
        var result = calculator.count(data);
        // A...
        expect(result.rate).toBe(rate);
    });
});

describe('Spy tests', function () {
    beforeEach(function () {
        createMockSettingsService();

        spyOn(mockSettingsService, 'get');

        createCalculator();
    });

    afterEach(function () {
        calculator = null;
        mockSettingsService = null;
    });

    it('should call settingsService once', function () {
        // A...
        var data = getDataForCalc(3000000, 30, 20);
        // A...
        var result = calculator.count(data);
        // A...
        expect(mockSettingsService.get).toHaveBeenCalled();
        expect(mockSettingsService.get).toHaveBeenCalledTimes(1);
        expect(mockSettingsService.get).toHaveBeenCalledWith('rate');
    });
});