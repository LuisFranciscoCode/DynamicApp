var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var radioModule = require("ui/radiobutton");
var textfieldModule = require("ui/text-field");
var utilityModule = require("utils/utils");
var http = require("http");

var action = "";

exports.Cores = function(args) {
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
    radioInsert.on(buttonModule.Button.tapEvent, function() {
        action = "insert";
        console.info(action);
    });

    radioUpdate.text = "Update Color";
    radioUpdate.on(buttonModule.Button.tapEvent, function() {
        action = "update";
        console.info(action);
    });

    radioDelete.text = "Delete Color";
    radioDelete.on(buttonModule.Button.tapEvent, function() {
        action = "delete";
        console.info(action);
    });

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
      insertColor(action);
    });

    sLayout.addChild(button);
}

insertColor = function() {
    var linkUrl = "";
    var aviso = "";

    if (action == "insert") {
        // linkUrl = "https://luisfranciscocode.000webhostapp.com/servidor.php?teste1=" + textfield1.text + "&&teste2=" + textfield2.text;
        linkUrl = "https://luisfranciscocode.000webhostapp.com/servidor.php?num=1&&colorName=" + textfield1.text + " &&codeColor=" + textfield2.text;
        aviso = "Inserted Color";
    }
    else if (action == "update") {
        // linkUrl = "https://luisfranciscocode.000webhostapp.com/servidor.php?num=2&&id=1&&colorName=name&&codeColor=code";
        linkUrl  = "https://luisfranciscocode.000webhostapp.com/servidor.php?num=2&&colorName=" + textfield1.text + "&&codeColor=" + textfield2.text;
        aviso = "Updated color"
    }
    else if (action == "delete") {
        // linkUrl = "https://luisfranciscocode.000webhostapp.com/servidor.php?num=3&&id=1colorName=name&&codeColor=code";
        linkUrl = "https://luisfranciscocode.000webhostapp.com/servidor.php?num=3&&colorName=" + textfield1.text;
        aviso = "Deleted color";
    }
    else {
        aviso = "You need to select a radio button";
    }

    http.request({ url: linkUrl, method: "GET" }).then(function (response) {
        alert(aviso);
        textfield1.text = "";
        textfield2.text = "";
    }, function (e) {
        alert(e);
    });
}


