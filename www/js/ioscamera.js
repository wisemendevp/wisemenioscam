var ioscamera = {
getPicture: function(success, failure){
    cordova.exec(success, failure, "ioscamera", "openCamera", []);
}
};
module.exports = ioscamera;
