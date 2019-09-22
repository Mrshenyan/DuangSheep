(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '12062Z72e5NnZi2Xn8E2yTf', 'Global', __filename);
// Script/Global.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.D = {
        // types
        GameManager: null,
        // singletons
        game: null,
        pipeManager: null,
        sceneManager: null,
        starManager: null,
        drillerManager: null,
        sheep: null,
    };
    return Global;
}());
exports.default = Global;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Global.js.map
        