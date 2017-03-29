var observable = require("data/observable").Observable;

function viewModel(){
    var newViewModel = new Observable();

    newViewModel.textbox1 = "aaa";
}

exports.viewModel = viewModel;