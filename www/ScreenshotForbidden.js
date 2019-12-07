var exec = require('cordova/exec');

document.addEventListener('deviceready', function () {
    exec(null, null, 'ScreenshotForbidden', null,null);
}, false);


exports.status = function (arg0, success, error) {
    
};