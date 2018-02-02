requirejs.config({

    baseUrl: 'js/app'
});

require(['main'], function() {
    console.log('All modules are loaded!');
});