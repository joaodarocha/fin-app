/**
 * Company List View 
 */

define(function() {
 
    function render() {
        $('#app').html(
            'Search <input type="text">' +
            '<br>' +
            '<button id=search>Search</button>'
        );
       
    }

    function drawSearchInput() {

    }
    
    function bind(element, handler) {
        $('#' + element).on('click', handler);
    }

  

    return {
        render: render,
        bind: bind
        /*
        bindSearchHandler: bindSearchHandler,
        bindCompanyHandler: bindCompanyHandler
        */
    };
});
