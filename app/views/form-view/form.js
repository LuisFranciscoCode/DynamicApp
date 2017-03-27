function onNavigatingTo(args) {
    console.log("oi");
    var page = args.object;
    
    var gotData=page.navigationContext;
    console.log(gotData.textboxes);
    console.log(gotData.checkboxes);
}
exports.loadForm = function(){
exports.onNavigatingTo = onNavigatingTo;

}