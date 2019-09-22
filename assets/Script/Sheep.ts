import Global from "./Global";

const {ccclass, property} = cc._decorator;

/**sheep的状态 */
let SheepState = cc.Enum({
    None:-1,
    Run:-1,
    Jump:-1,
    Drop:-1,
    DropEnd:-1,
    Dead:-1
})
@ccclass
export default class Sheep extends cc.Component {

    @property
    maxY:number=0;
    @property
    groundY:number=0;
    @property
    gravity:number=0;
    @property
    initJumpSpeed:number=0;
    @property({
        type:cc.Enum(SheepState),
        visible:true,
    })
    private _state;
    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }
    @property(cc.AnimationClip)
    jumpAudio=null;
    @property(cc.Prefab)
    dustPrefab: cc.Prefab;
    @property({
        tooltip: '每秒在地上恢复的能量值'
    })
    addEnergyOnGround=0.5
    @property({
        tooltip: '每次跳跃消耗的能量值'
    },)
    jumpEnergyCost=0.3
    @property(cc.ProgressBar)
    energyBar:cc.ProgressBar;
    @property(cc.Boolean)
    invincible=false;
    @property(cc.Integer)
    invincibleTime=3;
    @property(cc.Integer)
    invincibleSpeed=-600;
    @property(cc.Integer)
    normalSpeed=-300;


    anim:cc.Animation=null;
    currentSpeed=0;
    sprite:cc.Sprite=null;
    energy=1;
    init(){
        Global.D.sheep = this;
        this.anim = this.node.getComponent(cc.Animation);
        this.currentSpeed = 0;
        this.sprite = this.node.getComponent(cc.Sprite)
        this.registerInput();
        this.energy = 1;
    }
    start () {
        this.init();
    }

    // update (dt) {}
    registerInput(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,()=>{
            this.jump();
        },this.node);
    }

    jump(){
        if(this.energy>=this.jumpEnergyCost){
            this.energy -= this.jumpEnergyCost;
            this.state = State.Jump;
        }
    }
}

