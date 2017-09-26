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
            <img width="56%" className="img" src="images/lottery-alertNoMember.png" />
            <img className="get-now" onClick={() => this.get()} src="images/btn_get-now.png" />
            <div className="btn-close" >
                <img src="images/lottery-btn_close.png" />
            </div>
        </div>
    }
    close(e) {
        if (e.target.className !== "img" && e.target.className !== "get-now") {
            document.querySelector('.lottery-mask').style.display = 'none'
        }
    }
    componentWillMount() {
        var that = this
        new MyAjax({
            url: '/publish/i_www/resource/lovev/subject/lottery_data.jsp',
            callback(data) {
                var moive = data.find(v => {
                    return v.name == "相关影片"
                })
                that.setState({ moive, data })
            }
        })
    }
    get() {
        /*/publish/i_www/image/70/209/868.png */
        console.log(this.state)
        if(!document.querySelector("img.get-now").src.indexOf("images/btn_pay.png")!=-1){
            return
        }
        document.querySelector('.lottery-mask').children[0].src = "/publish/i_www/"+this.state.data.find(v=>v.name=="抽奖").detail[1].imgSrc3
        document.querySelector("img.get-now").style.display = "none"
    }
}