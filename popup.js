var tabUrl = "";
var qrcode;
$(function() {
    qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 256,
        height: 256,
        colorDark : '#000000',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(tabUrl);
})



chrome.tabs.query({'active':true,'currentWindow':true}, function(tabs) {
    tabUrl = tabs[0].url;
})