/**
 * List View
 */

define(function() {

    function render(companies) {
        console.log('Render List View');
        drawSearchInput();

        if(companies) {
            drawTable(companies);
        }
    }

    function drawSearchInput() {
        $('#app').html( '<br>' +
                        '<div class="ui input">' +
                            '<span class="fas fa-search"></span>' +
                            '<input type="text" id="params">' +
                            '<button class="ui basic button" id="search">' +
                                'Search' +
                            '</button>' +
                        '</div>' + 
                        '<div id="list"></div>');

    }

    function drawTable(companies) {

    }

    function bind(symbol, element, trigger, handler) {
        if (trigger === 'keypress') {
            handler = enterPressed;
        }

        $(symbol + element).on(trigger, handler);
    }

    function enterPressed(keyPressed) {
        if (keyPressed.which === 13) {
            // Enter key was pressed
            $('#search').click();
        }
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
