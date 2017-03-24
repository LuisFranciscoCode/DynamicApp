var layout = require("ui/layouts/stack-layout");
var textFieldModule = require("ui/text-field");
var buttonModule = require("ui/button");
var dropDownModule = require("nativescript-drop-down");
var page;

exports.createJSON = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var dropDown1 = new dropDownModule.DropDown();
    var button1 = new buttonModule.Button();

    dropDown1.items = ["Oi","Como","vai","isso"];

    button1.on(buttonModule.Button.onTap , function() {
        console.log("oi");
       // alert(dropDown1.value);
    });

    newStackLayout.addChild(dropDown1);
    newStackLayout.addChild(button1);

    page.content = newStackLayout;

}