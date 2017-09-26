import React from "react"
import ReactDOM from "react-dom"
import "../../../images/lottery-btn_lottery.png"
import "../../../images/lottery-btn_my.png"
import MyAjax from "../../Myajax.js"
import $ from "../../jQuery.md5.js"
class BtnLottery extends React.Component {
    constructor() {
        super()
    }
    render() {
        var PositionNode1 = {
            left: 0,
            top: 0,
            width: '35%'
        }
        var PositionNode2 = {
            left: "50%",
            top: '50%',
            width: '35%',
            marginLeft: "15%"
        }
        var PositionFather = {
            padding: "0 8%",
            width: document.body.offsetWidth,
            height: this.state && this.state.height || "0"
        }
        var str = <div className='btn-lottery clearf hidden' style={PositionFather}>
            <div style={PositionNode1} className="fl" onClick={() => this.lottery()}>
                <img width='100%' src="images/lottery-btn_lottery.png" />
            </div>
            <div style={PositionNode2} className="fl" onClick={() => this.myPrize()}>
                <img width='100%' src="images/lottery-btn_my.png" />
            </div>
        </div>
        return str
    }
    myPrize() {
        var that = this
        new MyAjax({
            url: '/publish/i_www/resource/lovev/subject/lottery_data.jsp',
            callback(data) {
                var myinfo = data.find((v) => {
                    return v.name == "抽奖"
                })
                document.querySelector('.lottery-mask-my-prize').style.display = 'block'
                that.setState({ data })
            }
        })
    }
    lottery() {
        var that = this
        new MyAjax({
            url: '/publish/i_www/resource/lovev/subject/lottery_data.jsp',
            callback(data) {
                that.setState({data})
                new MyAjax({
                    url: "/promactivity/activity/execute",
                    method: "POST",
                    data: `intfId=${that.state.intfId}&imei=${that.state.imei}&sign=${that.state.sign}&from=CMMOVIE&isDefault=0`,
                    callback(data) {
                        var src
                        switch (data.code) {
                            case '1':
                                //中奖
                                console.log(that.state.data.find((v)=>v.name=="抽奖"))
                                src = "/publish/i_www"+that.state.data.find((v)=>v.name=="抽奖").detail[1].imgSrc2
                                break
                            case '4':
                                //不是会员
                                src = "/publish/i_www"+that.state.data.find((v)=>v.name=="抽奖").detail[1].imgSrc4
                                document.querySelector('.get-now').src = "images/btn_pay.png"
                                break
                            case '6':
                                //没有中奖
                                src = "/publish/i_www"+that.state.data.find((v)=>v.name=="抽奖").detail[1].imgSrc
                                document.querySelector('.get-now').src = "images/btn_pay.png"
                                break
                            case '1014':
                                //没有登录
                                var href = window.location.href
                                document.querySelector('.get-now').src = "images/btn_pay.png"
                                window.location.href = "https://passport.migu.cn/login?sourceid=203004&apptype=2&forceAuthn=true&isPassive=false&authType=&display=&callbackURL=" + href
                                break
                            case '1052':
                                return
                                break
                        }
                        document.querySelector('.lottery-mask').style.display = 'block'
                        data.code != 1 ? document.querySelector('.get-now').style.display = "none" : ''
                        src ? document.querySelector('.lottery-mask').children[0].src = src : ' '
                        document.querySelector('.get-now').style.display = "block"
                    }
                })
            }
        })
        
    }
    componentWillMount() {
        this.setState(
            {
                imei: 10000,
                key: 'af2a2e7a-03bf-4a1c-a8a6-8566a1dfead9',
                intfId: '15048635172494859260551162961676'
            }
        )
        var that = this
        new MyAjax({
            url: "/promactivity/queryAct/getToken",
            method: "POST",
            data: "intfId=15051855095140726738774557100302&isDefault=0",
            callback(data) {
                var str = `userId=${data.userId}&intfId=${that.state.intfId}&imei=${that.state.imei}&idfa=&token=${data.tag}&signKey=${that.state.key}`
                var sign = $.md5(str)
                that.setState({ sign, intfId: data.intfId, code: data.code })
            }

        })
        
    }
    componentDidMount() {
        var img = document.getElementsByClassName('btn-lottery')[0].children[0].children[0]
        img.onload = () => {
            this.setState({ height: img.height })
        }
    }
}
export default BtnLottery