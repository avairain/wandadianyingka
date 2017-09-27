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
            url: '/wap/resource/migu/subject/lottery_data.jsp',
            callback(data) {
                var myinfo
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name == "抽奖") {
                        myinfo = data[i]
                    }
                }
                document.querySelector('.lottery-mask-my-prize').style.display = 'block'
                document.querySelector(".frequency").style.display = "none"
                that.setState({ data })
            }
        })
    }
    lottery() {
        var that = this
        var n = 3
        n--
        new MyAjax({
            url: '/wap/resource/migu/subject/lottery_data.jsp',
            callback(data) {
                that.setState({ data })
                new MyAjax({
                    url: "/promactivity/activity/execute",
                    method: "POST",
                    data: `intfId=${that.state.intfId}&imei=${that.state.imei}&sign=${that.state.sign}&from=CMMOVIE&isDefault=0`,
                    callback(data) {
                        var code = data.code || data.result_code
                        var src
                        switch (code) {
                            case '1':
                                //中奖
                                for (var i = 0; i < that.state.data.length; i++) {
                                    if (that.state.data[i].name == "抽奖") {
                                        src = that.state.data[i].detail[1].imgSrc2
                                        break;
                                    }
                                }

                                break
                            case '4':
                                //不是会员
                                for (var i = 0; i < that.state.data.length; i++) {
                                    if (that.state.data[i].name == "抽奖") {
                                        document.querySelector('.get-now').src = "images/btn_pay.png"
                                        src = that.state.data[i].detail[1].imgSrc4
                                        break;
                                    }
                                }
                                break
                            case '6':
                                //没有中奖
                                for (var i = 0; i < that.state.data.length; i++) {
                                    if (that.state.data[i].name == "抽奖") {
                                        document.querySelector('.get-now').src = "images/btn_pay.png"
                                        src = that.state.data[i].detail[1].imgSrc
                                        break;
                                    }
                                }
                                break
                            case '1014':
                                //没有登录
                                for (var i = 0; i < that.state.data.length; i++) {
                                    if (that.state.data[i].name == "抽奖") {
                                        var href = window.location.href
                                        document.querySelector('.get-now').src = "images/btn_pay.png"
                                        location.href = "https://passport.migu.cn/login?sourceid=203004&apptype=2&forceAuthn=true&isPassive=false&authType=&display=&callbackURL=" + href
                                        src = that.state.data[i].detail[1].imgSrc4
                                        break;
                                    }
                                }


                                break
                            case '1052':
                                return
                                break
                        }
                        if (n <= -1 && code!="1014") {
                            n = 0;
                            return alert("次数用完了哦");
                        }
                        document.querySelector(".frequency").innerHTML = n;
                        data.code != 1 ? document.querySelector('.get-now').style.display = "none" : ''
                        src ? document.querySelector('.lottery-mask').children[0].children[0].src = src : ' '
                        document.querySelector('.get-now').style.display = "block"
                        document.querySelector('.lottery-mask').style.display = 'block'
                    }
                })
            }
        })

    }
    componentWillMount() {
        this.setState(
            {
                imei: 10000,
                key: '3a72b140-d5d9-480d-bf1f-b11523943ebb',
                intfId: '15065001688055506530264090806290'
            }
        )
        var that = this
        new MyAjax({
            url: "/promactivity/queryAct/getToken",
            method: "POST",
            data: "intfId="+that.state.intfId+"&isDefault=0",
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