var exec = require('cordova/exec');

document.addEventListener('deviceready', function () {
    exec(null, null, 'ScreenshotForbidden', null,null);
}, false);
