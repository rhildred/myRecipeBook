// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
		"history": "//cdnjs.cloudflare.com/ajax/libs/history.js/1.8/bundled-uncompressed/html4+html5/jquery.history",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min"
    },
    shim: {
        "bootstrap" : { "deps" :['jquery'] }
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
