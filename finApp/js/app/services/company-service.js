/**
 * Company Service
 */

define(["../models/company", "../models/details"], function(
    Company,
    CompanyDetails
) {
    var currentTicker;

    function getDetails() {
        if (!currentTicker) {
            return;
        }
        var path = "/companies?ticker=" + currentTicker;

        var companyDetails;

        apiRequest(path, function(err, results) {
            if (err) {
                console.log("There was an error on the Ajax Request");
                console.log(err);
                return;
            }

            companyDetails = new CompanyDetails(
                results.ticker,
                results.name,
                results.short_description,
                results.ceo,
                results.company_url,
                results.business_address
            );
            cb(companyDetails);
        });
    }

    function list() {}

    function searchData(cb, queryParams) {
        var path = "/companies?ticker=" + queryParams;

        apiRequest(path, function(err, results) {
            if (err) {
                console.log("Error on searchData");
                // console.log(JSON.parse(err));
                return false;
            }

            // console.log(results);
        });
    }

    function apiRequest(path, cb) {
        $.ajax({
            headers: {
                Authorization: authenticate()
            },
            url: "https://api.intrinio.com" + path,
            type: "GET",
            dataTtpe: "json",

            success: function(results) {
                cb(null, results);
            },

            error: function(request) {
                console.log("error on apiRequest");
                console.log("path: " + path);
                cb(request.responseText);
            }
        });
    }

    function authenticate() {
        var username = "1ce6d758d2a53cd277d18ed0f990cec2";
        var password = "6f2636b7f91e15b98d55d9959cef3b2e";
        return "Basic " + btoa(username + ":" + password);
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
