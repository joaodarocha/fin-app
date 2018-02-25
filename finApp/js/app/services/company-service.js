/**
 * Company Service
 */

define(['../models/company', '../models/details'], function(
    Company,
    CompanyDetails
) {
    var currentTicker;

    function getDetails(callBackFn, ticker) {
        if (!currentTicker) {
            return;
        }
        var path = '/companies?ticker=' + currentTicker;

        var companyDetails;

        apiRequest(path, function(err, results) {
            if (err) {
                console.log('There was an error on the Ajax Request');
                console.log(err);
                return;
            }

            // console.log(results.industry_category);

            companyDetails = new CompanyDetails(
                results.ticker,
                results.name,
                results.business_address,
                results.hq_state,
                results.hq_country,
                results.ceo,
                results.sector,
                results.industry_group,
                results.industry_category,
                results.short_description
            );
            callBackFn(companyDetails);
        });
    }

    function list() {}

    function searchData(callBackFn, queryParams) {
        var path = '/companies?query=' + queryParams;

        apiRequest(path, function(err, results) {

            if (err) {
                console.log('Error on searchData');
                err = JSON.parse(err);
                console.log(err.errors[0].human);
                console.log(err.errors[0].message);
                return {
                    error: err.errors[0].human,
                    message: err.errors[0].message
                };
            }

            console.log(results);
            var receivedData = results.data;

            if(receivedData.length < 1) {
                console.log('No results');
                return {
                    error: 'No results found',
                    message: 'The search returned no companies. Please change the search'
                };
            }

            var companies = receivedData.map(function(company) {
                return new Company(company.ticker, company.name);
            });

            console.log(companies);

            callBackFn(companies);
        });

    }

    function apiRequest(path, cb) {
        $.ajax({
            headers: {
                Authorization: authenticate()
            },
            url: 'https://api.intrinio.com' + path,
            type: 'GET',
            dataTtpe: 'json',

            success: function(results) {
                cb(null, results);
            },

            error: function(request) {
                cb(request.responseText);
            }
        });
    }

    function authenticate() {
        var username = '1ce6d758d2a53cd277d18ed0f990cec2';
        var password = '6f2636b7f91e15b98d55d9959cef3b2e';
        return 'Basic ' + btoa(username + ':' + password);
    }

    function getTicker() {
        return currentTicker;
    }

    function setTicker(ticker) {
        currentTicker = ticker;
    }

    return {
        searchData: searchData,
        getDetails: getDetails,
        list: list,
        setTicker: setTicker,
        getTicker: getTicker
    };
});
