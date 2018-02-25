/**
 * Company Details Controller
 */

define([ 
    'services/company-service',
    'views/details-view'
], function(companyService, detailsView) {

    function start() {
        console.log('Detail Started!');

        ticker = companyService.getTicker();

        companyService.getDetails(receiveObject, ticker);
    }

    function receiveObject(obj) {
        console.log('Receive Object');
        console.log(obj);

        detailsView.render(obj);
    }

    return {
        start: start
    };
});
