import React from "react"
import ReactDOM from "react-dom"
import MyAjax from "../Myajax.js"
import "../../less/Myprize.less"
export default class MaxkMyPrize extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className="lottery-mask-my-prize" onClick={(e) => this.close(e)}>
            <div className="img2">
                <img width="56%" className="mask-my-prize" src="images/myprize-null.png" />
                <img className="mask-my-prize-get" width="36%" src="images/btn_getnow.png" />
            </div>

            <div className="btn-close" >
                <img src="images/lottery-btn_close.png" />
            </div>
        </div>
    }
    componentWillMount() {
        var intfId="15065001688055506530264090806290"
        var endDate = ''
        var date = new Date()
        endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}`
        var that = this
        new MyAjax({
            url: '/promactivity/queryAct/getOrders',
            method: "POST",
            data: "intfId="+intfId+"&isDefault=0&startDate=2017-07-31&endDate=" + endDate,
            callback(data) {
                new MyAjax({
                    url: '/wap/resource/migu/subject/lottery_data.jsp',
                    callback(data1) {
                        var moive
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].name == "相关影片") {
                                moive = data[i];
                            }

                        }
                        that.setState({ moive, data1 })
                        data.tag && data.tag.length == 0 ? document.querySelector('.mask-my-prize-get').style.display = "none" : ''
                        if (data.tag && data.tag.length) {
                            document.querySelector('.lottery-mask-my-prize').children[0].innerHTML = `
                            <img width="70%" class="mask-my-prize" src="images/myprize.png" />
                            <img width="60%" class="prize1" src="images/prize.png">
                            <img width="60%" class="prize2" src="images/prize.png">
                            <img class="mask-my-prize-get" onclick="window.location.href = "http://movie.miguvideo.com/lovev/miguMovie/bookTicket/film.jsp"
                        }" width="36%" src="images/btn_getnow.png" />`
                        }
                    }
                })

            }
        })
    }
    componentDidMount() {
        document.querySelector(".lottery-mask-my-prize").style.height = 200 + "px"
    }
    close(e) {
        var intfId="15065001688055506530264090806290"
        var endDate = ''
        var date = new Date()
        endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        var that = this
        new MyAjax({
            url: '/promactivity/queryAct/getOrders',
            method: "POST",
            data: "intfId="+intfId+"&isDefault=0&startDate=2017-07-31&endDate=" + endDate,
            callback(data) {
                console.log(data)
                data.tag && data.tag.length == 0 ? document.querySelector('.mask-my-prize-get').style.display = "none" : ''
                if (data.tag && data.tag.length) {
                    document.querySelector('.lottery-mask-my-prize').children[0].innerHTML = `
                    <img width="70%" class="mask-my-prize" src="images/myprize.png" />
                    <img width="60%" class="prize1" src="images/prize.png">
                    <img width="60%" class="prize2" src="images/prize.png">
                    <img class="mask-my-prize-get" onclick="window.location.href = 'http://movie.miguvideo.com/lovev/miguMovie/bookTicket/film.jsp'" width="36%" src="images/btn_getnow.png" />`
                }
            }
        })
        if (!(e.target.className == "mask-my-prize" || e.target.className == "mask-my-prize-get"||e.target.className == "prize2"||e.target.className == "prize1")) {
            document.querySelector(".frequency").style.display="block"
            document.querySelector(".lottery-mask-my-prize").style.display = "none"
        }
    }
    goto() {
        window.location.href = "http://movie.miguvideo.com/lovev/miguMovie/bookTicket/film.jsp"
    }
}