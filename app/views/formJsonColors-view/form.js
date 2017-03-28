var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var labelModule = require("ui/label");
var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");

var arrayObersableCode;

exports.formulario = function(args) {
    page = args.object;
    
    readJson();
}

readJson = function() {
    // fetch("http://10.0.7.102/teste/coresV2.json").then(response => { 
    // fetch("https://luisfranciscocode.000webhostapp.com/colors.json").then(response => { 
    fetch("https://luisfranciscocode.000webhostapp.com/servidor.php?num=0&&format=json").then(response => { 
        return response.json();
     })
     .then(function (r) {
        console.info("json chegou");    
        var dataJson = r;
        var numDataJson = Object.keys(dataJson.Colors).length;

        console.info("Numer JSON: " + numDataJson);
        console.info(JSON.stringify(dataJson)); 

        drawButtons(dataJson, numDataJson);

	});    
} 

drawButtons = function(values, totalValues) {

    console.info(totalValues);
    var newStackLayout = new layout.StackLayout();

    if (totalValues == 0) {
        label = new labelModule.Label();
        label.text = "Do not exist colors";
        newStackLayout.addChild(label);
        
    }
    else {
        var saveColor = new Array(totalValues);
        var arrayButton = new Array(totalValues);

    
        for(i = 0; i < totalValues; i++) {
            arrayButton[i] = new buttonModule.Button();

            arrayButton[i].text = values.Colors[i].info.name;
            saveColor[i] = values.Colors[i].info.code;

            console.info(values.Colors[i].info.code);
            console.info(values.Colors[i].info.name);
            
            newStackLayout.addChild(arrayButton[i]);
        } 
    
        // uncaoImportante(arrayObersableCode);
    }
    
    page.content = newStackLayout;
}

funcaoImportante = function(x) {
    num = x.length;
    console.info("Numero: " + num);
  
    for (i = 0; i < num; i++) {
        console.info("Color: GetItem(" + i + "): " + x.getItem(i));
    } 
}

changeColor = function(color) {
    newStackLayout.backgroundColor = color;
    page.content = newStackLayout;
}