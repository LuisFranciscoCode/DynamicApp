var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var createViewModel = require("./main-view-model").createViewModel;
var Sqlite = require(".nativescript-sqlite");

var page;

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

};