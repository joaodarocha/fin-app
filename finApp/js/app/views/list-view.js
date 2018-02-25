/**
 * List View
 */

define(function() {

    function render(companies) {
        console.log('Render List View');
        $('#app').empty();
        drawSearchInput();

        if(companies) {
            drawTable(companies);
        }
    }

    function drawSearchInput() {
        $('#app').html( '<br>' +
                        '<div class="ui input">' +
                            '<input type="text" id="params">' +
                            '<button class="ui basic button" id="search">' +
                                '<span class="fas fa-search"></span>' +
                                ' Search' +
                            '</button>' +
                        '</div>' + 
                        '<div id="list"></div>');

    }

    function drawTable(companies) {

        var $table = createTable(companies);
        $table.appendTo('#app');
    }

    function createTable(array) {

        var $table = $('<table>').addClass('ui celled table');

        // thead
        $table.append('<thead>').children('thead')
            .append('<tr />').children('tr')
            .append('<th>Ticker</th><th>Name</th>');

        // tbody
        var $tbody = $table.append('<tbody />').children('tbody');

        // add rows
        array.map(function(company, index) {

            $tbody.append('<tr />').children('tr:last')
                .append('<td> <div class="ui ribbon label">' + company.ticker + '</div> </td>')
                .append('<td class="details" id="' + company.ticker +'" >' + company.name + '</td>');

        });

        // tfoot
        var $tfoot= $table.append('<tfoot />').children('tfoot');
        
        // Add pagination
        $tfoot.append('<tr />').children('tr')
            .append('<th colspan="3"></th>').children('th')
            .append('<div class="ui right floated pagination menu" />').children('div')
            .append('<a class="icon item">' + 
                        '<i class="left chevron icon" />' +
                    '</a>' +
                   '<a class="item">1</a>' +
                    '<a class="item">2</a>' +
                    '<a class="item">3</a>' +
                    '<a class="item">4</a>' +
                    '<a class="icon item">' +
                        '<i class="right chevron icon" />' +
                    '</a>');


        return $table;

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
