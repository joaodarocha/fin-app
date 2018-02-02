/**
 * Router
 */

define(function() {

    var routes = {
        list: {
            hash: '#list',
            controller: 'company-list-ctrl'
        },
        details: {
            hash: '#details',
            controller: 'company-details-ctrl'
        }
    };

    var defaultRoute = 'list';
    var currentHash = ''; //required to track hash changes

    function start() {
        window.location.hash = window.location.hash || routes[defaultRoute].hash;
        currentHash = window.location.hash;

        setInterval(hashCheck, 100);
    }

    function hashCheck() {
        // nothing to do if route has not changed
        if (window.location.hash === currentHash) {
            return;
        }

        // find the current route name
        var routeName = Object.keys(routes).find(function(name) {
            return window.location.hash === routes[name].hash;
        });

        // load default controller if !routeName
        if (!routeName) {
            loadDefaultController();
            return;
        }

        // load controller of the route => routes[routeName].controller
        loadController(routeName);

    }

    function loadController(controllerName) {

        currentHash = window.location.hash;
        require(['controllers/' + controllerName], function(controller) {
            controller.start();
        });

    }

    function loadDefaultController() {

        window.location.hash = routes[defaultRoute].hash;
        loadController(routes[defaultRoute].controller);
    }

    return {
        start: start,
    };
});