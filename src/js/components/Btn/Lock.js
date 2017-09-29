import React from "react"
import ReactDOM from "react-dom"
import "../../../images/lottery-btn_lock.png"
export default class Lock extends React.Component {
    constructor(){
        super()
    }
    render(){
        
        return <div className="lock hidden" onClick={()=>this.goto()} >
            <img width="100%" src = "images/lottery-btn_lock.png"/>
        </div>
    }
    goto() {
        console.log(this.props)
        var cid
        for (let key in this.props) {
            if (this.props[key].name=="蜘蛛侠预告片") {
                cid = this.props[key].cid;
            }
        }
        console.log(cid)
        window.location.href = "http://m.miguvideo.com/wap/resource/migush/detail/Detail.jsp?cid=" + cid
    }
}