var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var radioModule = require("ui/radiobutton");
var textfieldModule = require("ui/text-field");
var utilityModule = require("utils/utils");
var http = require("http");

exports.inserirCores = function(args) {
    var stackLayout = new layout.StackLayout();

    drawRadioButton(stackLayout);
    drawTextField(stackLayout);
    drawButton(stackLayout);

    page = args.object;
    page.content = stackLayout;
}

drawRadioButton = function(sLayout) {
    var radioGroup = new radioModule.RadioGroup();

    var radioInsert = new radioModule.RadioButton();
    var radioUpdate = new radioModule.RadioButton();
    var radioDelete = new radioModule.RadioButton();

    radioInsert.text = "Insert Color";
    radioUpdate.text = "Update Color";
    radioDelete.text = "Delete Color";

    radioGroup.addChild(radioInsert);
    radioGroup.addChild(radioUpdate);
    radioGroup.addChild(radioDelete);

    sLayout.addChild(radioGroup);
}

drawTextField = function(sLayout) {
    textfield1 = new textfieldModule.TextField();
    textfield1.hint = "Color Name";
    
    textfield2 = new textfieldModule.TextField();
    textfield2.hint = "Code Name";

    sLayout.addChild(textfield1);
    sLayout.addChild(textfield2);
}

drawButton = function(sLayout) {


    button = new buttonModule.Button();
    button.text = "Insert Color";

    button.on(buttonModule.Button.tapEvent, function() {
      insertColor();
    });

    sLayout.addChild(button);
}

insertColor = function() {
    console.info(textfield1.text);
    console.info(textfield2.text);
    http.request({ url: "https://luisfranciscocode.000webhostapp.com/servidor.php?teste1=" + textfield1.text + "&&teste2=" + textfield2.text, method: "GET" }).then(function (response) {
        alert("You just inserted a new color");
        textfield1.text = "";
        textfield2.text = "";
    }, function (e) {
        alert(e);
    });
}


