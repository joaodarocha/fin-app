/**
 * Company List Controller 
 */

define([
    'services/company-service',
    'views/list-view'
],function(companyService, listView) {
 
    function start() {
        console.log('Start list controller.');
        companyService.getDetails();
        listView.render();
        listView.bind('#', 'search', 'click', searchHandler);
        listView.bind('.', 'details', 'click', companyHandler);
        listView.bind('#', 'params', 'keypress', searchHandler);
    }

    function searchHandler(event) {

        console.log('**SearchHandler triggered');
        queryParams = $('#params').val();
        console.log(queryParams);

        companyService.searchData(start, queryParams);
    }

    function companyHandler(event) {

        console.log('**CompanyHandler triggered');
        // console.log(event);

    }

    return {
        start: start,
    };
});