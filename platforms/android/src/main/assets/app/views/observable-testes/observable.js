var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var createViewModel = require("./main-view-model").createViewModel;
var localStorage = require("nativescript-localstorage");
var Sqlite = require("nativescript-sqlite");

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

    (new Sqlite("my.db")).then( db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS people ( id INTEGER PRIMARY KEY AUTOINCREMENT , firstname TEXT , lastname TEXT )").then( id => {
            page.bindingContext = createViewModel(db);

        }, error => {
            console.log("CREATE ERROR " , error );

        });

    }, error => {
        console.log("OPEN/CREATE DB ERROR " , error );

    });

    // page.bindingContext = createViewModel();

}