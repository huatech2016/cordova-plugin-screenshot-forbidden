var exec = require('cordova/exec');

document.addEventListener('deviceready', function () {
    exec(null, null, 'ScreenshotForbidden', null,null);
}, false);

exports.ScreenshotForbidden = function (arg0, success, error) {
     exec(null, null, 'ScreenshotForbidden', null,null);
};
