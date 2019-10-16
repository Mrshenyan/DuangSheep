(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Sheep.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2f9darQUdBGka1nIrS9IggK', 'Sheep', __filename);
// Script/Sheep.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**sheep的状态 */
var SheepState = cc.Enum({
    None: -1,
    Run: -1,
    Jump: -1,
    Drop: -1,
    DropEnd: -1,
    Dead: -1
});
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxY = 0;
        _this.groundY = 0;
        _this.gravity = 0;
        _this.initJumpSpeed = 0;
        _this._state = null;
        _this.jumpAudio = null;
        _this.dustPrefab = null;
        _this.addEnergyOnGround = 0.5;
        _this.jumpEnergyCost = 0.3;
        _this.energyBar = null;
        _this.invincible = false;
        _this.invincibleTime = 3;
        _this.invincibleSpeed = -600;
        _this.normalSpeed = -300;
        _this.anim = null;
        _this.currentSpeed = 0;
        _this.sprite = null;
        _this.energy = 1;
        return _this;
    }
    Object.defineProperty(Sheep.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Sheep.prototype.init = function () {
        Global_1.default.D.sheep = this;
        this.anim = this.node.getComponent(cc.Animation);
        this.currentSpeed = 0;
        this.sprite = this.node.getComponent(cc.Sprite);
        this.registerInput();
        this.energy = 1;
    };
    Sheep.prototype.start = function () {
        this.init();
    };
    // update (dt) {}
    Sheep.prototype.registerInput = function () {
        var _this = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function () {
            _this.jump();
        }, this.node);
    };
    Sheep.prototype.jump = function () {
        if (this.energy >= this.jumpEnergyCost) {
            this.energy -= this.jumpEnergyCost;
            this.state = SheepState.Jump;
            this.currentSpeed = this.initJumpSpeed;
            this.spawnDust("DustUp");
            cc.audioEngine.playEffect(this.jumpAudio, false);
        }
        else {
            // cc.audioEngine.playEffect(/)
        }
    };
    Sheep.prototype.spawnDust = function (animName) {
        var dustType = "Dust";
        var dust = Global_1.default.D.sceneManager.spawn(this.dustPrefab, dustType, this.node);
        dust.node.position = cc.v2(0, 0);
        dust.playAnim(animName);
    };
    __decorate([
        property
    ], Sheep.prototype, "maxY", void 0);
    __decorate([
        property
    ], Sheep.prototype, "groundY", void 0);
    __decorate([
        property
    ], Sheep.prototype, "gravity", void 0);
    __decorate([
        property
    ], Sheep.prototype, "initJumpSpeed", void 0);
    __decorate([
        property({
            type: cc.Enum(SheepState),
            visible: true,
        })
    ], Sheep.prototype, "_state", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], Sheep.prototype, "jumpAudio", void 0);
    __decorate([
        property(cc.Prefab)
    ], Sheep.prototype, "dustPrefab", void 0);
    __decorate([
        property({
            type: cc.Float,
            tooltip: '每秒在地上恢复的能量值'
        })
    ], Sheep.prototype, "addEnergyOnGround", void 0);
    __decorate([
        property({
            type: cc.Float,
            tooltip: '每次跳跃消耗的能量值'
        })
    ], Sheep.prototype, "jumpEnergyCost", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Sheep.prototype, "energyBar", void 0);
    __decorate([
        property(cc.Boolean)
    ], Sheep.prototype, "invincible", void 0);
    __decorate([
        property(cc.Integer)
    ], Sheep.prototype, "invincibleTime", void 0);
    __decorate([
        property(cc.Integer)
    ], Sheep.prototype, "invincibleSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], Sheep.prototype, "normalSpeed", void 0);
    Sheep = __decorate([
        ccclass
    ], Sheep);
    return Sheep;
}(cc.Component));
exports.default = Sheep;

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
        //# sourceMappingURL=Sheep.js.map
        