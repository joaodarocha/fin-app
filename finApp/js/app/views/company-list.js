/**
 * Company List View 
 */

define(function() {
 
    function render() {
        $('#app').html(
            'Search <input type="text">'
        );
       
    }

    function drawSearchInput() {

    }

    return {
        render: render,
        /*
        bindSearchHandler: bindSearchHandler,
        bindCompanyHandler: bindCompanyHandler
        */
    };
});
