import React from "react"
import ReactDOM from "react-dom"
import BtnLottery from "./Btn/BtnLottery.js"
import Lock from "./Btn/Lock.js"
import Get from "./Btn/Get.js"
import MyAjax from "../Myajax.js"
import Play1 from "./Btn/Play/Play1.js"
import Play2 from "./Btn/Play/Play2.js"
import Play3 from "./Btn/Play/Play3.js"
import Buy from "./Btn/Buy.js"
class Btn extends React.Component {
    constructor() {
        super()
    }
    render() {
        if (this.state) {
            var moive = this.state.moive
            var data = this.state.data
        }
        return <div style={{ position: 'relative', height: this.state && this.state.height || "0", }}>
            <BtnLottery {...this.state}/>
            <Lock {...data}/>
            <Get />
            <Play1  {...moive}/>
            <Play2  {...moive}/>
            <Play3  {...moive}/>
            <Buy />
        </div>
    }
    componentDidMount() {
        var img = document.getElementsByClassName('btn-lottery')[0].children[0].children[0]
        img.onload = () => {
            this.setState({ height: img.height })
        }
    }
    componentWillReceiveProps(n) {
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
}
export default Btn