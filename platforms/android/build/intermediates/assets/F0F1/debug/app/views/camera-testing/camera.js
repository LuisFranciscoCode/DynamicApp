// var createViewModel = require("./mainViewModel").createViewModel;
var camera = require("nativescript-camera");
var page;

exports.loaded = function(args) {
    page = args.object;

    // page.bindingContext = createViewModel();

}

exports.takePhoto = function() {

    var imageModule = require("ui/image");
    camera.takePicture()
    .then(function (imageAsset) {
        console.log("Result is an image asset instance");
        var image = new imageModule.Image();
        image.src = imageAsset;

    }).catch(function (err) {
        console.log("Error -> " + err.message);
            
    });

}