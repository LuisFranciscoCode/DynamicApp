var http = require("http");
var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var labelModule = require("ui/label");
var textfieldModule = require("ui/text-field");
var page;

exports.loadCreate = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;
    var size = 5;

    var newStackLayout = new layout.StackLayout();
    var labelTextBox = new labelModule.Label;
    var textfieldTextBox = new textfieldModule.TextField;

    newStackLayout.addChild(labelTextBox);
    newStackLayout.addChild(textfieldTextBox);

    page.content = newStackLayout;
}