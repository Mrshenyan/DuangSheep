import Global from "./Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Dust extends cc.Component {

    @property(cc.Animation)
    anim:cc.Animation=null;

    playAnim(animName){
        this.anim.play(animName);
    }
    finish(){
        this.node.removeFromParent();
        Global.D.sceneManager.putIntoPool(this);//回收节点
    }
}
