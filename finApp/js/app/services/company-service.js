/**
 * Company Service 
 */

define([
    '../controllers/company-details-controller', 
    '../controllers//company-list-controller',
    '../controllers/company-statements-controller',
    '../models/company',
    '../models/details' 
], function(companyDetailsController, companyListController, statementsController, company, details) {
 
    function getDetails() {

    }

    function list() {

    }

    function setTicker() {

    }

    function authenticate() {

    }

    return {
        getDetails: getDetails,
        list: list,
        setTicker: setTicker,
        authenticate: authenticate
    };
});
