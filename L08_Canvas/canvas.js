"use strict";
var FirstCanvas;
(function (FirstCanvas) {
    document.addEventListener("DOMContentLoaded", handleLoad);
    let crc;
    function handleLoad() {
        console.log("I am working");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc = canvas.getContext("2d");
        fillCanvas("#aaa");
    } //close HandleLoad
    function fillCanvas(_color) {
        crc.fillStyle = _color;
        crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    }
})(FirstCanvas || (FirstCanvas = {})); //close Namespace
//# sourceMappingURL=canvas.js.map