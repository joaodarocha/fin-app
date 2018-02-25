/**
 * Company List Controller 
 */

define([
    'services/company-service',
    'views/list-view'
],function(companyService, listView) {
 
    var pageSize = 10;
    var currentPage = 1;

    function start(data) {
        console.log('Start list controller.');
        companyService.getDetails();
        renderView(data);
        bindHandlersToView();
    }

    function searchHandler(event) {

        console.log('**SearchHandler triggered');
        var queryParams = $('#params').val().toUpperCase();
        queryParams += '&page_size=' + 10;
        console.log(queryParams);

        companyService.searchData(start, queryParams);
    }

    function detailsHandler(event) {

        console.log('**CompanyHandler triggered');
        console.log(event);
        var ticker = event.target.attributes.id.nodeValue;

        // Change route
        window.location.hash = '#details';

        // Set ticker
        companyService.setTicker(ticker);
    }

    function renderView(data) {
        listView.render(data);
    }

    function bindHandlersToView() {
        listView.bind('#', 'search', 'click', searchHandler);
        listView.bind('#', 'params', 'keypress', searchHandler);
        listView.bind('.', 'details', 'click', detailsHandler);

    }

    function getCurrentPage() {
        return this.currentPage;
    }

    function setCurrentPage(newPage) {
        this.currentPage = newPage;
    }

    return {
        start: start,
        getCurrentPage: getCurrentPage,
        setCurrentPage: setCurrentPage
    };
});