var Observable = require("data/observable").Observable;

function ola() {
    alert("OLA");
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.email = "random_mail@gmail.live.yahoo";
    viewModel.btn1text = "Isto é o texto do butao";
    var sigma = "ola";
    viewModel.onTap = ola();

    return viewModel;
}

exports.createViewModel = createViewModel;