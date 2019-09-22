(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scroller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '104a77h3G5F5IojbTiKwdXv', 'Scroller', __filename);
// Script/Scroller.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// import Global=;
var Scroller = /** @class */ (function (_super) {
    __extends(Scroller, _super);
    function Scroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.resetX = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Scroller.prototype.update = function (dt) {
        // if(Global.D.game.state!==Global.D.GameManager.State.Run){
        //     return;
        // }
        var x = this.node.x;
        x += this.speed * dt;
        if (x <= this.resetX) {
            x -= this.resetX;
        }
        this.node.x = x;
    };
    __decorate([
        property
    ], Scroller.prototype, "speed", void 0);
    __decorate([
        property
    ], Scroller.prototype, "resetX", void 0);
    Scroller = __decorate([
        ccclass
    ], Scroller);
    return Scroller;
}(cc.Component));
exports.default = Scroller;

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
        //# sourceMappingURL=Scroller.js.map
        