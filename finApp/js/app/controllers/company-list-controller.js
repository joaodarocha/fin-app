/**
 * Company List Controller 
 */

define([
    'services/company-service',
    'views/list-view'
],function(companyService, listView) {
 
    var pageSize = 10;
    var currentPage = 1;
    var queryParams;

    function start(data) {
        console.log('Start list controller.');
        console.log('queryParams');
        console.log(this.queryParams);
        renderView(data);
        bindHandlersToView();
        
        if(queryParams) {
            companyService.searchData(start, this.queryParams, setQueryPArams);
        }

    }

    function searchHandler(event) {

        console.log('**SearchHandler triggered');
        this.queryParams = $('#params').val().toUpperCase();
        this.queryParams += '&page_size=' + 10;
        console.log(queryParams);

        companyService.searchData(start, this.queryParams, setQueryPArams);
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

    function setQueryPArams(newParams) {
        console.log('setQueryParams');
        console.log(newParams);
        this.queryParams = newParams;
    }

    return {
        start: start,
        getCurrentPage: getCurrentPage,
        setCurrentPage: setCurrentPage,
        setQueryPArams: setQueryPArams
    };
});