"use strict";
var Status;
(function (Status) {
    Status[Status["offline"] = 0] = "offline";
    Status[Status["online"] = 1] = "online";
    Status[Status["error"] = 2] = "error";
})(Status || (Status = {}));
console.log(Status.offline, Status.online, Status.error);
function getResult(status) {
    var result = '';
    switch (status) {
        case Status.offline:
            result = 'offline';
            break;
        case Status.online:
            result = 'online';
            break;
        case Status.error:
            result = 'err';
            break;
    }
    return result;
}
var result = getResult(1);
console.log(result);
