"use strict";
/* ECMASCRIPT AVANZADO Y TYPESCRIPT
-------------------------------------------------- */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function operacion(num1, num2, eleccion) {
    switch (eleccion) {
        case "suma": {
            return new Promise(function (res, rej) {
                var moduleSuma = "./suma";
                Promise.resolve().then(function () { return __importStar(require(moduleSuma)); }).then(function (Suma) {
                    var operacionCalculo = new Suma(num1, num2);
                    res(operacionCalculo.resultado(num1, num2));
                })
                    .catch(function () {
                    rej(console.error);
                });
            });
        }
        case "resta": {
            return new Promise(function (res, rej) {
                var moduleResta = "./resta";
                Promise.resolve().then(function () { return __importStar(require(moduleResta)); }).then(function (Resta) {
                    var operacionCalculo = new Resta(num1, num2);
                    res(operacionCalculo.resultado(num1, num2));
                })
                    .catch(function () {
                    rej(console.error);
                });
            });
        }
        default: {
            console.log("No se importo ning\u00FAn archivo y no se realizo ninguna operaci\u00F3n");
        }
    }
}
function operaciones(operac) {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, _i, operac_1, datos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function (datos) {
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, setTimeout(function () {
                                        operacion(datos.num1, datos.num2, datos.eleccion);
                                    }, 1000)];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, operac_1 = operac;
                    _a.label = 1;
                case 1:
                    if (!(_i < operac_1.length)) return [3 /*break*/, 4];
                    datos = operac_1[_i];
                    return [5 /*yield**/, _loop_1(datos)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function ingresoDatos() {
    return __awaiter(this, void 0, void 0, function () {
        var lote1, lote2, lote3, lotesDePrueba;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lote1 = {
                        num1: 7,
                        num2: 3,
                        eleccion: "suma",
                    };
                    lote2 = {
                        num1: 50,
                        num2: 8,
                        eleccion: "resta",
                    };
                    lote3 = {
                        num1: 4,
                        num2: 2,
                        eleccion: "dividi",
                    };
                    lotesDePrueba = [lote1, lote2, lote3];
                    return [4 /*yield*/, operaciones(lotesDePrueba)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
ingresoDatos();
