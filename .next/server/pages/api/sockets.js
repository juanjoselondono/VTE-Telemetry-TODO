"use strict";
(() => {
var exports = {};
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 8323:
/***/ ((module) => {

module.exports = require("mqtt");

/***/ }),

/***/ 9505:
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ 5320:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9505);
/* harmony import */ var _lib_mqttClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7214);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);
socket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ioHandler = (req, res)=>{
    if (res.socket.server.io) {
        console.log("Socket.IO ya est\xe1 corriendo.");
        res.end();
        return;
    }
    const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server, {
        path: "/api/sockets",
        addTrailingSlash: false
    });
    res.socket.server.io = io;
    console.log("Socket.IO Server inicializado.");
    // Vincular MQTT → Socket.IO (solo una vez)
    if (_lib_mqttClient__WEBPACK_IMPORTED_MODULE_1__/* .mqttClient */ .O && !_lib_mqttClient__WEBPACK_IMPORTED_MODULE_1__/* .mqttClient.__socket_io_hooked */ .O.__socket_io_hooked) {
        _lib_mqttClient__WEBPACK_IMPORTED_MODULE_1__/* .mqttClient.on */ .O.on("message", (topic, message)=>{
            let data;
            try {
                const str = message.toString();
                data = JSON.parse(str);
            } catch  {
                data = message;
            }
            // Tomar los datos del interior si vienen dentro de "message"
            const inner = data.message || data;
            const WHEEL_DIAMETER = 0.6; // en metros
            const payload = {
                rpm: inner.rpm,
                potencia: inner.potencia,
                battery: inner.battery,
                speed: parseInt(2 * Math.PI * (WHEEL_DIAMETER / 2) * inner.rpm * 60 / 1000),
                timestamp: new Date().toISOString()
            };
            io.emit("mqtt_data", payload);
            console.log("[Socket.IO] Nuevo mensaje MQTT recibido:");
            console.dir(payload, {
                depth: null
            });
        });
        _lib_mqttClient__WEBPACK_IMPORTED_MODULE_1__/* .mqttClient.__socket_io_hooked */ .O.__socket_io_hooked = true;
    }
    io.on("connection", (socket)=>{
        console.log(` Cliente web conectado: ${socket.id}`);
        socket.on("disconnect", ()=>{
            console.log(` Cliente web desconectado: ${socket.id}`);
        });
    });
    res.end();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ioHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [214], () => (__webpack_exec__(5320)));
module.exports = __webpack_exports__;

})();