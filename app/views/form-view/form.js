var page;

exports.loadForm = function(args){
    console.log("oi");
    page = args.object;
    var gotData=page.navigationContext;
    console.log(gotData.textboxes);
    console.log(gotData.checkboxes);
    console.log(gotData.comboboxes);
    console.log(gotData.radiobutton);
    console.log(gotData.datepick);
}