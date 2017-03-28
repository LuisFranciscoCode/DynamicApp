// var createViewModel = require("./mainViewModel").createViewModel;
var camera = require("nativescript-camera");
var page;

exports.loaded = function(args) {
    page = args.object;

    // page.bindingContext = createViewModel();

}

exports.takePhoto = function() {

    var imageModule = require("ui/image");
    var options = { saveToGallery: true };
    camera.takePicture(options)
    .then(function (imageAsset) {
        console.log("Result is an image asset instance");
        var image = new imageModule.Image();
        image.src = imageAsset;
        page.getViewById("imagem1").src = image.src ;

    }).catch(function (err) {
        console.log("Error -> " + err.message);
            
    });

}