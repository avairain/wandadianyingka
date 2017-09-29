import React from "react"
import ReactDOM from "react-dom"
import MyAjax from "./Myajax.js"
import Background from "./components/Background.js"
import Btn from "./components/Btn.js"
import MaskLottery from "./components/MaskLottery.js"
import MaskGet from "./components/MaskGet.js"
import MaskMyPrize from "./components/MaskMyPrize.js"
import Frequency from "./components/Frequency.js"
class Page extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div style={{ position: 'relative' }}>
            <Background  {...this.state} />
            <Btn {...this.state} />
            <MaskLottery {...this.state} />
            <MaskGet />
            <MaskMyPrize {...this.state} />
            <Frequency {...this.state} />
        </div>
    }
    componentWillMount() {
        var _this = this

        

        new MyAjax({
            url: '/wap/resource/migu/subject/lottery_data.jsp',
            callback(data) {
                window.data = data
                _this.setState({ data })
            }
        })
        //setTimeout(()=>_this.setState({ data }),500)
    }
    
}
export default Page