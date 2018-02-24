/**
 * List View 
 */

define(function() {
 
    function render() {
        $('#app').html(
            'Search <input type="text" id="params">' +
            '<button id=search>Search</button>'
        );
       
    }

    function drawSearchInput() {

    }
    

    function bind(symbol, element, trigger, handler) {

        if( trigger === 'keypress') {

            handler = function(e) {

                if(e.which === 13) { // Enter key pressed
                    $('#search').click(); // Trigger search button click event
                }
            };
        }

        $(symbol + element).on(trigger, handler);
    }

  

    return {
        render: render,
        bind: bind,
        /*
        bindSearchHandler: bindSearchHandler,
        bindCompanyHandler: bindCompanyHandler
        */
    };
});
