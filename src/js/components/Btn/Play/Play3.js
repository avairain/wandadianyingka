import React from "react"
import ReactDOM from "react-dom"
import "../../../../images/lottery-btn_play.png"
export default class Play1 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className="lock play1 play2 play3 hidden" onClick={() => this.goto()}>
            <img width="100%" src="images/lottery-btn_play.png" />
        </div>
    }
    goto() {
        var cid = this.props.detail[2].contId
        window.location.href = "http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/detail/detail.jsp?cid=" + cid
    }
}