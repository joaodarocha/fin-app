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

    var defaultRouter = 'list';
    var currentHash = ''; //required to track hash changes

    function start(){
        window.location.hash = window.location.hash || routes[defaultRouter].hash
        currentHash = window.location.hash;

    }

    function hashCheck(){
        // nothing to do if route has not changed
        if (window.location.hash === currentHash) {
            return;
        }

        // find the current route name

        // load default route if !routeName

        // load controller of the route => routes[routeName].controller
    }

    function loadController(controllerName){

        currentHash = window.location.hash;
        require(['controllers/' + controllerName], function(controller){
            
        })

    }

    function loadDefaultController(){

    }
 })