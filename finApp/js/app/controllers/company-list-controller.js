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
        renderView();
        bindHandlersToView();
    }

    function searchHandler(event) {

        console.log('**SearchHandler triggered');
        queryParams = $('#params').val().toUpperCase();
        console.log(queryParams);

        companyService.searchData(start, queryParams);
    }

    function companyHandler(event) {

        console.log('**CompanyHandler triggered');
        // console.log(event);

    }

    function renderView() {
        listView.render();
    }

    function bindHandlersToView() {
        listView.bind('#', 'search', 'click', searchHandler);
        listView.bind('#', 'params', 'keypress', searchHandler);
        listView.bind('.', 'details', 'click', companyHandler);

    }

    return {
        start: start,
    };
});