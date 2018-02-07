/**
 * Company List Controller 
 */

define([
    'services/company-service',
    'views/company-list'
],function(service, listView) {
 
    function start() {
        console.log('Start list controller.');
        service.getDetails();
        listView.bind('search', searchHandler);
        listView.render();
    }

    function searchHandler(event) {
        console.log(event);

    }

    return {
        start: start,
    };
});