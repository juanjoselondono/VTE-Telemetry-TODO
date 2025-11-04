"use strict";
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 7214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ mqttClient),
/* harmony export */   "T": () => (/* binding */ connectionPromise)
/* harmony export */ });
/* harmony import */ var mqtt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8323);
/* harmony import */ var mqtt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mqtt__WEBPACK_IMPORTED_MODULE_0__);
// src/lib/mqttClient.js

// ***********************************************
// ⚠️ CONFIGURACIÓN CLAVE
// ***********************************************
const MQTT_BROKER_URL = process.env.MQTT_BROKER_URL;
const MQTT_USER = process.env.MQTT_USER;
const MQTT_PASSWORD = process.env.MQTT_PASSWORD;
const SUBSCRIPTION_TOPIC = process.env.SUBSCRIPTION_TOPIC;
// ***********************************************
let mqttClient = null;
let connectionPromise = null;
// --- Lógica de Inicialización Singleton ---
if (!mqttClient) {
    connectionPromise = new Promise((resolve, reject)=>{
        // --- Opciones de Conexión ---
        const options = {
            username: MQTT_USER,
            password: MQTT_PASSWORD,
            // Aseguramos un ID único para evitar que el broker cierre otras sesiones
            clientId: "nextjs_backend_" + Math.random().toString(16).substr(2, 8),
            keepalive: 60,
            reconnectPeriod: 1000 // Tiempo en ms para intentar reconectar
        };
        // 1. Conectar al broker
        mqttClient = mqtt__WEBPACK_IMPORTED_MODULE_0___default().connect(MQTT_BROKER_URL, options);
        // 2. Manejo del evento de CONEXIÓN EXITOSA
        mqttClient.on("connect", ()=>{
            console.log("✅ Cliente MQTT conectado al broker");
            mqttClient.subscribe(SUBSCRIPTION_TOPIC, {
                qos: 1
            }, (err)=>{
                if (err) {
                    console.error("❌ Error al suscribirse:", err);
                } else {
                    console.log(`Suscrito a tema: ${SUBSCRIPTION_TOPIC}`);
                }
            });
            // Resolvemos la promesa para desbloquear las API Routes que están en "await connectionPromise"
            resolve(mqttClient);
        });
        // 3. Manejo de ERRORES
        mqttClient.on("error", (error)=>{
            console.error("❌ Error de conexi\xf3n MQTT:", error);
            // Rechazamos la promesa solo si es un error fatal de inicio (como "Not Authorized")
            // Después del inicio, el cliente intenta reconectar automáticamente
            if (mqttClient && !mqttClient.connected) {
                // Si la promesa aún no se ha resuelto, la rechazamos
                // Esto permite que el try/catch en publish.js lo capture en el primer intento.
                reject(error);
            }
        });
        // 4. Manejo de MENSAJES RECIBIDOS (datos entrantes)
        mqttClient.on("message", (topic, message)=>{
            console.log(`[MQTT RECIBIDO] Tema: ${topic.toString()}, Payload: ${message.toString()}`);
        });
        // 5. Manejo de CIERRE de conexión
        mqttClient.on("close", ()=>{
            // El cliente intentará reconectar automáticamente
            console.log("⚠️ Conexi\xf3n MQTT cerrada. Reconexi\xf3n en curso...");
        });
    });
}
// --- Fin de Inicialización Singleton ---
// Exportamos el cliente y la promesa para que la API Route los utilice.
 // NOTA: No necesitamos la bandera 'isConnected' si usamos 'mqttClient.connected' 
 // y la lógica de la promesa para el primer chequeo.


/***/ })

};
;