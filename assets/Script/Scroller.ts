import Global from "./Global";

const {ccclass, property} = cc._decorator;
// import Global=;
@ccclass
export default class Scroller extends cc.Component {


    @property
    speed:number=0;
    @property
    resetX:number=0;
    // LIFE-CYCLE CALLBACKS:

    update(dt){
        // if(Global.D.game.state!==Global.D.GameManager.State.Run){
        //     return;
        // }
        let x = this.node.x;
        x+= this.speed*dt;
        if(x<=this.resetX){
            x-=this.resetX;
        }
        this.node.x = x;
    }
}
