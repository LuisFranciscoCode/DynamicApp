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
    page = args.object;
    var gotData=page.navigationContext;
    var numTextboxes = parseInt(gotData.textboxes);
    var numCheckboxes = parseInt(gotData.checkboxes);
    var numDropdowns = parseInt(gotData.comboboxes);
    var numRadiobuttons = parseInt(gotData.radiobuttons);
    var numDatepicks = parseInt(gotData.datepicks);
    var numtotal = 0;
    numtotal = numTextboxes + numCheckboxes + numComboboxes + numRadiobuttons + numDatepicks;


    console.log(numtotal);
// { "fields": [{"name":"textboxform","type":"textbox","txt":""}]}

    var jaason = '{ "fields": [';
    var i;
    for (i=0; i < numTextboxes; i++)
    {

        if((numtotal - 1) == 0){
            jaason += '{"name":"textboxform","type":"textbox","text":"","id":"textbox' + i + '"}';
        }
        else{ jaason += '{"name":"textboxform","type":"textbox","text":"","id":"textbox' + i + '"},'};
        numtotal -= 1;
    }
    for (i=0; i < numCheckboxes; i++)
    {
        if((numtotal - 1) == 0){
            jaason += '{"name":"checkboxform","type":"checkbox","val":"","text":"","id":"checkbox' + i + '"}';
        }
        else{ jaason += '{"name":"checkboxform","type":"checkbox","val":"","text":"","id":"checkbox' + i + '"},'};
        numtotal -= 1;
    }
    for (i=0; i < numDropdowns; i++)
    {
        if((numtotal - 1) == 0){
            jaason += '{"name":"dropdownform","type":"dropdown","text":"","id":"dropdown' + i + ',"List":[]"}';
        }
        else{ jaason += '{"name":"dropdownform","type":"dropdown","text":"","id":"dropdown' + i + ',"List":[]"},'};
        numtotal -= 1;
    }
    for (i=0; i < numRadiobuttons; i++)
    {
        if((numtotal - 1) == 0){
            jaason += '{"name":"radioform","type":"radiobutton","val":"","text":"","id":"radiobutton' + i + '"}';
        }
        else{ jaason += '{"name":"radioform","type":"radiobutton","val":"","text":"","id":"radiobutton' + i + '"},'};
        numtotal -= 1;
    }
    for (i=0; i < numDatepicks; i++)
    {
        if((numtotal - 1) == 0){
            jaason += '{"name":"dateform","type":"datepicker","val":"","text":"","id":"datepick' + i + '"}';
        }
        else{ jaason += '{"name":"dateform","type":"datepicker","text":"","id":"datepick' + i + '"},'};
        numtotal -= 1;
    }
    jaason += ']}';

    var formjaason = JSON.parse(jaason);
    console.dump(formjaason);
    var fieldsSize = formjaason.fields.length;

    var newStackLayout = new layout.StackLayout();
 //   var labelArray = new Array(fieldsSize);
    var textfieldArray = new Array();
    var dropdownArray = new Array();
    var checkboxArray = new Array();
    var radioArray = new Array();
    var dateArray = new Array();
    var buttonArray = new Array();

    for(i = 0; i < fieldsSize; i++)
    {
        switch (formjaason.fields[i].type){
            case "textbox":
                textfieldArray[i] = new textfieldModule.TextField();
                textfieldArray[i].name = formjaason.fields[i].name;
                textfieldArray[i].text = formjaason.fields[i].text;
                textfieldArray[i].id = formjaason.fields[i].id;
                newStackLayout.addChild(textfieldArray[i]);
                break;
            case "checkbox":
                checkboxArray[i] = new checkboxModule.CheckBox();
                checkboxArray[i].name = formjaason.fields[i].name;
                checkboxArray[i].text = formjaason.fields[i].text;
                checkboxArray[i].id = formjaason.fields[i].id;
                checkboxArray[i].value = formjaason.fields[i].val;
                newStackLayout.addChild(checkboxArray[i]);
                break;
            case "dropdown":
                dropdownArray[i] = new dropdownModule.DropDown();
                dropdownArray[i].name = formjaason.fields[i].name;
                dropdownArray[i].text = formjaason.fields[i].text;
                dropdownArray[i].id = formjaason.fields[i].id;
                dropdownArray[i].List = formjaason.fields[i].List;
                newStackLayout.addChild(checkboxArray[i]);
                break;
            case "radiobutton":
                radioArray[i] = new radioModule.RadioButton;
                radioArray[i].name = formjaason.fields[i].name;
                radioArray[i].value = formjaason.fields[i].val;
                radioArray[i].text = formjaason.fields[i].text;
                radioArray[i].id = formjaason.fields[i].id;
                break;
            case "datepicker":
                dateArray[i] = new datepickModule.DatePicker();
                dateArray[i].name = formjaason.fields[i].name;
                dateArray[i].text = formjaason.fields[i].text;
                dateArray[i].id = formjaason.fields[i].id;
                break;
            default:
                break;
        }
    }
    page.content = newStackLayout;
}