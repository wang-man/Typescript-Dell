"use strict";
var Homepage;
(function (Homepage) {
    var SubPage;
    (function (SubPage) {
        var Test = (function () {
            function Test() {
            }
            return Test;
        }());
        SubPage.Test = Test;
    })(SubPage = Homepage.SubPage || (Homepage.SubPage = {}));
    var Header = (function () {
        function Header() {
            var header = document.createElement('header');
            header.innerText = '这是头部';
            document.body.appendChild(header);
        }
        return Header;
    }());
    var Main = (function () {
        function Main() {
            var main = document.createElement('main');
            main.innerText = '这是主内容';
            document.body.appendChild(main);
        }
        return Main;
    }());
    var Footer = (function () {
        function Footer() {
            var footer = document.createElement('footer');
            footer.innerText = '这是尾部';
            document.body.appendChild(footer);
        }
        return Footer;
    }());
    var CreatePage = (function () {
        function CreatePage() {
            new Header();
            new Main();
            new Footer();
            new Components.Aside();
        }
        return CreatePage;
    }());
    Homepage.CreatePage = CreatePage;
})(Homepage || (Homepage = {}));
