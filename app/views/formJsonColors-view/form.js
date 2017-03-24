var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var labelModule = require("ui/label");

exports.formulario = function(args) {
    page = args.object;
    readJson();
}

readJson = function() {
    fetch("http://10.0.7.102/teste/coresV2.json").then(response => { 
        return response.json();
     })
     .then(function (r) {
        
        var dataJson = r;
        var numDataJson = Object.keys(dataJson.name).length;

        console.info(numDataJson);
        drawButtons(dataJson, numDataJson);
	});    
}

drawButtons = function(values, totalValues) {
    var newStackLayout = new layout.StackLayout();

     var saveColor = new Array(totalValues);

    for(i = 0; i <= totalValues; i++) {
        var arrayButton = new Array(i);
        var umacoisaqualquer = values.info[i].code;

        arrayButton[i] = new buttonModule.Button();
        arrayButton[i].text = values.info[i].name;
        arrayButton[i].value = umacoisaqualquer[i];
        
        arrayButton[i].on(buttonModule.Button.tapEvent, function() {       
            // arranjar maneira de mudar cor conforme o botão carregado
            // arranjar maneira de mudar cor conforme o botão carregado
            // arranjar maneira de mudar cor conforme o botão carregado
            // arranjar maneira de mudar cor conforme o botão carregado
        });       

        console.info(values.info[i].name);
        console.info(values.info[i].code);

        newStackLayout.addChild(arrayButton[i]);
    }

    page.content = newStackLayout;
}

changeColor = function(color) {
    newStackLayout.backgroundColor = color;
    page.content = newStackLayout;
}

