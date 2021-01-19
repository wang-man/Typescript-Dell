"use strict";
var DataManager = (function () {
    function DataManager(data) {
        this.data = data;
    }
    DataManager.prototype.getItem = function (index) {
        return this.data[index];
    };
    return DataManager;
}());
var data = new DataManager([{
        name: 'man'
    }]);
