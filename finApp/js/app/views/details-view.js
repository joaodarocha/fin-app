/**
 * Company Details View
 */

define(['controllers/company-details-controller'], function(detailsController) {
    var ticker;

    function render(company) {
        $('#app').empty();
        drawDetails(company);
    }

    function drawDetails(company) {
        console.log('Draw Details');
        console.log(company);

        var $details = $('<div>')
            .addClass('ui raised segment')
            .css('text-align', 'justify');

        $details.append('<h2>' + company.name + '</h2>');
        $details.append('<h5> Summary: </h5>');
        $details.append('<p>' + company.ticker);
        $details.append('<p>' + company.businessAddress);
        $details.append(
            '<p>' + company.hqState + ', ' + company.hqCountry + '<br>'
        );
        $details.append('<h5> CEO: </h5>');
        $details.append('<p>' + company.ceo);
        $details.append('<h5> Industry: </h5>');
        $details.append(
            '<p>' +
                company.sector +
                ', ' +
                company.industryGroup +
                ', ' +
                company.industryCategory
        );
        $details.append('<h5> Description </h5>');
        $details.append('<p>' + company.shortDescription);

        $details.appendTo('#app');
    }

    return {
        render: render
    };
});
