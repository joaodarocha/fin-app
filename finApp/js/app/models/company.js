/**
 * Company Model
 */

define(function() {

    function Company(ticker, name) {
        this.ticker = ticker;
        this.name = name;
    }

    return {
        ticker: this.ticker,
        name: this.name
    };

});