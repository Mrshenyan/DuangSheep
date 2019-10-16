(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Dust.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1cef7/tE1xAH4jQ3rONeue/', 'Dust', __filename);
// Script/Dust.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Dust = /** @class */ (function (_super) {
    __extends(Dust, _super);
    function Dust() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
    }
    Dust.prototype.playAnim = function (animName) {
        this.anim.play(animName);
    };
    Dust.prototype.finish = function () {
        this.node.removeFromParent();
        Global_1.default.D.sceneManager.putIntoPool(this); //回收节点
    };
    __decorate([
        property(cc.Animation)
    ], Dust.prototype, "anim", void 0);
    Dust = __decorate([
        ccclass
    ], Dust);
    return Dust;
}(cc.Component));
exports.default = Dust;

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
        //# sourceMappingURL=Dust.js.map
        