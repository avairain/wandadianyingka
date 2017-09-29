import React from "react"
import ReactDOM from "react-dom"
import "../../images/lottery-alertNoMember.png"
import "../../images/lottery-btn_close.png"
import "../../images/btn_get-now.png"
import MyAjax from "../Myajax.js"
export default class MaskLottery extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className="lottery-mask" onClick={(e) => this.close(e)}>
                <div className="box">
                    <img width="56%" className="img" src="images/lottery-alertNoMember.png" />
                    <img className="get-now" onClick={() => this.get()} src="images/btn_get-now.png" />
                </div>
            <div className="btn-close" >
                <img src="images/lottery-btn_close.png" />
            </div>
        </div>
    }
    close(e) {
        if (e.target.className !== "img" && e.target.className !== "get-now") {
            document.querySelector(".frequency").style.display="block"
            document.querySelector('.lottery-mask').style.display = 'none'
        }
    }
    componentWillReceiveProps(n){
        var that = this
        var data = n.data
        var moive
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == "相关影片") {
                moive = data[i]
            }
        }
        that.setState({ moive, data })
    
    }
    componentWillMount() {
        var that = this
        
    }
    get() {
        /*/publish/i_www/image/70/209/868.png */
        console.log(this.state)
        if (!document.querySelector("img.get-now").src.indexOf("images/btn_pay.png") != -1) {
            window.location.href = "http://m.miguvideo.com/wap/resource/migu/VIP/pay_order.jsp"
            return
        }
        var src
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == "抽奖") {
                src = data[i].detail[1].imgSrc3
            }
        }
        document.querySelector('.lottery-mask').children[0].src = src
        document.querySelector("img.get-now").style.display = "none"
    }
}