var http = require("http");
var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var labelModule = require("ui/label");
var textfieldModule = require("ui/text-field");
var page;
var topmost = frameModule.topmost();

var submitButton = new buttonModule.Button();
    submitButton.name = "submitButton";
    submitButton.text = "Ok";


exports.loadCreate = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;
    if(page.content == null) {
        var newStackLayout = new layout.StackLayout();
        var labelTextBox = new labelModule.Label();
        var textfieldTextBox = new textfieldModule.TextField();
        labelTextBox.name = "labelTextBox";
        labelTextBox.text = "Quantas TextBoxes quer?";
        textfieldTextBox.name = "textfieldTextBox";
        textfieldTextBox.id = "textfieldTextBox";
        textfieldTextBox.hint = "Insira um número";
        textfieldTextBox.keyboardType = "number";

        var labelCheckBox = new labelModule.Label();
        var textfieldCheckBox = new textfieldModule.TextField();
        labelCheckBox.name = "labelCheckBox";
        labelCheckBox.text = "Quantas CheckBoxes quer?";
        textfieldCheckBox.name = "textfieldCheckBox";
        textfieldCheckBox.id = "textfieldCheckBox";
        textfieldCheckBox.hint = "Insira um número";
        textfieldCheckBox.keyboardType = "number";

        var labelComboBox = new labelModule.Label();
        var textfieldComboBox = new textfieldModule.TextField();
        labelComboBox.name = "labelComboBox";
        labelComboBox.text = "Quantas ComboBoxes quer?";
        textfieldComboBox.name = "textfieldComboBox";
        textfieldComboBox.id = "textfieldComboBox";
        textfieldComboBox.hint = "Insira um número";
        textfieldComboBox.keyboardType = "number";

        var labelRadio = new labelModule.Label();
        var textfieldRadio = new textfieldModule.TextField();
        labelRadio.name = "labelRadio";
        labelRadio.text = "Quantos Radio Buttons quer?";
        textfieldRadio.name = "textfieldRadio";
        textfieldRadio.id = "textfieldRadio";
        textfieldRadio.hint = "Insira um número";
        textfieldRadio.keyboardType = "number";

        var labelDatePicker = new labelModule.Label();
        var textfieldDatePicker = new textfieldModule.TextField();
        labelDatePicker.name = "labelDatePicker";
        labelDatePicker.text = "Quantos DatePickers quer?";
        textfieldDatePicker.name = "textfieldDatePicker";
        textfieldDatePicker.id = "textfieldDatePicker";
        textfieldDatePicker.hint = "Insira um número";
        textfieldDatePicker.keyboardType = "number";

        submitButton.on(buttonModule.Button.tapEvent, function() {
            var navigationOptions={
            moduleName: 'views/form-view/form',
            context:{textboxes: page.getViewById("textfieldTextBox").text,
                    checkboxes: page.getViewById("textfieldCheckBox").text,
                    comboboxes: page.getViewById("textfieldComboBox").text,
                    radiobuttons: page.getViewById("textfieldRadio").text,
                    datepicks: page.getViewById("textfieldDatePicker").text
                }}
                
            topmost.navigate(navigationOptions);
        });

        newStackLayout.addChild(labelTextBox);
        newStackLayout.addChild(textfieldTextBox);

        newStackLayout.addChild(labelCheckBox);
        newStackLayout.addChild(textfieldCheckBox);

        newStackLayout.addChild(labelComboBox);
        newStackLayout.addChild(textfieldComboBox);

        newStackLayout.addChild(labelRadio);
        newStackLayout.addChild(textfieldRadio);

        newStackLayout.addChild(labelDatePicker);
        newStackLayout.addChild(textfieldDatePicker);

        newStackLayout.addChild(submitButton);

        page.content = newStackLayout;
    }
}