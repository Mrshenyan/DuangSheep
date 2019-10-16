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
    private _state=null;
    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }
    @property(cc.AnimationClip)
    jumpAudio=null;
    @property(cc.Prefab)
    dustPrefab: cc.Prefab=null;
    @property({
        type:cc.Float,
        tooltip: '每秒在地上恢复的能量值'
    })
    addEnergyOnGround=0.5
    @property({
        type:cc.Float,
        tooltip: '每次跳跃消耗的能量值'
    },)
    jumpEnergyCost=0.3
    @property(cc.ProgressBar)
    energyBar:cc.ProgressBar=null;
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
            this.state = SheepState.Jump;
            this.currentSpeed = this.initJumpSpeed;
            this.spawnDust("DustUp");
            cc.audioEngine.playEffect(this.jumpAudio,false);
        }else{
            // cc.audioEngine.playEffect(/)
        }
    }
    spawnDust(animName:string){
        let dustType = "Dust";
        let dust = Global.D.sceneManager.spawn(this.dustPrefab,dustType,this.node);
        dust.node.position = cc.v2(0,0);
        dust.playAnim(animName);
    }
}

