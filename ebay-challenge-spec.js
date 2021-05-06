const url = 'https://www.ebay.com';
const { expect } = require('chai');


describe('ebaySearch', function() {
    it('should navigate to ebay.com, search for "test", and verify parameters', function() {
        
        // Define search parameter
        const searchParameter = 'test';

        // Navigate to page
        browser.url(url);

        // Search for product
        $('input[name="_nkw"]').setValue('test\n');

        //Verify number of items equals 50 -- will fail because response includes sponsored and recently viewed items
        const items = $$('div.s-item__title--tag').length;
        expect(items).to.equal(50);
        
        //Assert title is longer than 5 characters
        const string = $('h3.s-item__title');
        const length = string.getText();
        expect(length).to.have.lengthOf.above(5);

        //Assert that first character of prices is a dollar sign
        const price = $('span.s-item__price');
        const str = price.getText();
        const dollarSign = (str.substring(0,1));
        expect(dollarSign).to.equal('$');
        
        //Assert that prices are numbers
        const numbers = (str.substring(1));
        const a = parseInt(numbers);
        expect(a).to.be.above(0);

    });
});