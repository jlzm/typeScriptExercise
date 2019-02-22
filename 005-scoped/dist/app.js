"use strict";
var printLabel = function (labelledObj) {
    console.log('labelledObj.label :', labelledObj.label);
};
var myObj = { size: 10, label: 'Size 10 object' };
printLabel(myObj);
