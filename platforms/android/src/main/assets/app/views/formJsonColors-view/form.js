var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var labelModule = require("ui/label");
var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var arrayTesteObervable;

var Botao = {
    NomeBotao: "",
    CodigoBotao: ""
}

exports.formulario = function(args) {
    page = args.object;
    
    readJson();

}

readJson = function() {
    // fetch("http://10.0.7.102/teste/coresV2.json").then(response => { 
    fetch("https://api.myjson.com/bins/16xfab").then(response => { 
        return response.json();
     })
     .then(function (r) {
        console.info("json chegou");    
        var dataJson = r;
        var numDataJson = Object.keys(dataJson.Name).length;

        console.info(numDataJson);
        drawButtons(dataJson, numDataJson);
	});    
}

drawButtons = function(values, totalValues) {
    var newStackLayout = new layout.StackLayout();

    var saveColor = new Array(totalValues);
     

    for(i = 0; i <= totalValues; i++) {
        var arrayButton = new Array(i);
        
       var btn = new observableArrayModule.ObservableArray(Botao);

        saveColor[i] = values.info[i].Code;
        arrayButton[i] = new buttonModule.Button();
        arrayButton[i].text = values.info[i].Name;
        // arrayButton[i].value = values.info[i].Name;

        btn.set("NomeBotao", values.info[i].Name);
        btn.set("CodigoBotao", values.info[i].Code);

        arrayButton[i].on(buttonModule.Button.tapEvent, function(args) {       
            console.info("kkkkkkkk");
            console.info("Property Changed!");
            console.info("Text: " + args.text);
            console.info("Event name:" + args.eventName);
            console.info("Object:" + args.object);
            console.info("propertyname:" + args.propertyName);
            console.info("value:" + args.value); 
        });
        
        arrayTesteObervable = new observableArrayModule.ObservableArray(arrayButton);
        console.dump(btn);
        newStackLayout.addChild(arrayButton[i]);  
    } 
      
    
    
    // funcaoImportante(arrayTesteObervable);
    page.content = newStackLayout;
}

funcaoImportante = function(arrayColors) {
    num = arrayColors.length;
    console.info("Numero: " + num);
  
    for (i = 0; i < num; i++) {
        console.info("GetItem(" + i + "): " + arrayColors.getItem(i));
    } 
}

changeColor = function(color) {
    newStackLayout.backgroundColor = color;
    page.content = newStackLayout;
}