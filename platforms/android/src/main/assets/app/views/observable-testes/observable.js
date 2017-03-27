var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var Observable = require("data/observable").Observable;
var observableArrayModule = require("data/observable-array");

var user = new Observable({
    email: "user@domain.com",
    dofunction: "ola"
});

var page;

exports.ola = function() {
    alert("oi");
}

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAR !");
    page = args.object;

    // var newStackLayout = new layout.StackLayout();

    page.bindingContext = user;


    // newStackLayout.addChild(buttonTeste);

    // page.content = newStackLayout;

    // newObservable = page;

    console.log(page.bindingContext.dofunction);

}