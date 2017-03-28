var layout = require("ui/layouts/stack-layout");
var textFieldModule = require("ui/text-field");
var buttonModule = require("ui/button");
var dropDownModule = require("nativescript-drop-down");
var page;

exports.createJSON = function(args) {
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var dropDown1 = new dropDownModule.DropDown();
    var button1 = new buttonModule.Button();

    dropDown1.items = ["Oi","Como","vai","isso"];
    dropDown1.selectedIndex = 0;

    button1.on(buttonModule.Button.tapEvent , function() {
        dropDown1.items[dropDown1.selectedIndex] = "";
        var valores = Array(dropDown1.items.length -1);
        console.log(dropDown1.items.length);
        console.dump(valores);
        j = 0;

        for ( i = 0 ; i < dropDown1.items.length ; i++ ){

            if ( dropDown1.items[i] != "" ){
                valores[j] = dropDown1.items[i];
                j++;

            }
        }
        dropDown1.items = valores;
        console.log(valores);

    });

    newStackLayout.addChild(dropDown1);
    newStackLayout.addChild(button1);

    page.content = newStackLayout;

}