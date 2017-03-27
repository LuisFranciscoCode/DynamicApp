var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var createViewModel = require("./main-view-model").createViewModel;
var localStorage = require("nativescript-localstorage");

var page;

exports.ola = function() {
    alert("oi");
}

exports.addinfo = function() {
    localStorage.setItem("username" , "hugo")
}

exports.readinfo = function() {
    alert(localStorage.getItem("username"));
}

function AlertaOze(){
alert("Ze foste avisado");

}

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAREE !");
    page = args.object;

    // var newStackLayout = new layout.StackLayout();

    page.bindingContext = createViewModel();


    // newStackLayout.addChild(buttonTeste);

    // page.content = newStackLayout;

    // newObservable = page;

}