"use strict";
var Components;
(function (Components) {
    var Aside = (function () {
        function Aside() {
            var aside = document.createElement('aside');
            aside.innerText = '这是其他部分';
            document.body.appendChild(aside);
        }
        return Aside;
    }());
    Components.Aside = Aside;
})(Components || (Components = {}));
