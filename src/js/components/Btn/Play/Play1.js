import React from "react"
import ReactDOM from "react-dom"
import "../../../../images/lottery-btn_play.png"
export default class Play1 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="lock play1 hidden" onClick={()=>this.goto()}>
            <img width="100%" src="images/lottery-btn_play.png" />
        </div>
    }
    goto(){
        var cid = this.props.detail[0].contId
        window.location.href="http://m.miguvideo.com/wap/resource/migush/detail/Detail.jsp?cid="+cid
    }
    componentWillReceiveProps(n){
    }
}