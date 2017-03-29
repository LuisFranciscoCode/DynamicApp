var page;
var http = require("http");
var layout = require("ui/layouts/stack-layout");
var labelModule = require("ui/label");
var buttonModule = require("ui/button");
var textfieldModule = require("ui/text-field");
var checkboxModule = require("nativescript-checkbox");
var dropdownModule = require("nativescript-drop-down");
var radioModule = require("nativescript-radiobutton");
var datepickModule = require("ui/date-picker");

exports.loadForm = function(args){
    console.log("oi");
    page = args.object;
    var gotData=page.navigationContext;
    var numTextboxes = gotData.textboxes;
    var numCheckboxes = gotData.checkboxes;
    var numComboboxes = gotData.comboboxes;
    var numRadiobuttons = gotData.radiobuttons;
    var numDatepicks = gotData.datepicks;

    var jaason = '{ "fields": [';
    var i;
    for (i=0; i < numTextboxes; i++)
    {
        if((i + 1) == numTextboxes){
            jaason += '{"name":"textboxform","type":"textbox","txt":"",}';
        }
        else{ jaason += '{"name":"textboxform","type":"textbox","txt":"",},'};
    }
    for (i=0; i < numCheckboxes; i++)
    {
        if((i + 1) == numCheckboxes){
            jaason += '{"name":"checkboxform","type":"checkbox","val":"","txt":"",}';
        }
        else{ jaason += '{"name":"checkboxform","type":"checkbox","txt":"",},'};
    }
    for (i=0; i < numComboboxes; i++)
    {
        if((i + 1) == numComboboxes){
            jaason += '{"name":"comboboxform","type":"combobox","val":"","txt":"",}';
        }
        else{ jaason += '{"name":"comboboxform","type":"combobox","txt":"",},'};
    }
    for (i=0; i < numRadiobuttons; i++)
    {
        if((i + 1) == numRadiobuttons){
            jaason += '{"name":"radioform","type":"radiobutton","val":"","txt":"",}';
        }
        else{ jaason += '{"name":"radioform","type":"radiobutton","txt":"",},'};
    }
    for (i=0; i < numDatepicks; i++)
    {
        if((i + 1) == numDatepicks){
            jaason += '{"name":"dateform","type":"datepicker","val":"","txt":"",}';
        }
        else{ jaason += '{"name":"dateform","type":"datepicker","txt":"",},'};
    }
    jaason += ']}';

    var OmeuJaaason = JSON.parse(jaason);

 /*   var newStackLayout = new layout.StackLayout();
    var labelArray = new Array(fieldsSize);
    var textfieldArray = new Array(fieldsSize);
    var dropdownArray = new Array(fieldsSize);
    var checkboxArray = new Array(fieldsSize);
    var buttonArray = new Array(fieldsSize);*/
}