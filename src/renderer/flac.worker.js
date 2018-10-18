onmessage = function(e) {
    //let flac = require('./rust_web_flac');
    //import('./rust_web_flac').then(function(flac) {
        let reader = new FileReader();
        reader.onloadend = function(evt) {
            let result = e.data[1](reader);
            postMessage(result);
        };

        reader.readAsArrayBuffer(e.data[0]);
    //});
};