import React from "react"
import ReactDOM from "react-dom"
import Background from "./components/Background.js"
import Btn from "./components/Btn.js"
import MaskLottery from "./components/MaskLottery.js"
import MaskGet from "./components/MaskGet.js"
import MaskMyPrize from "./components/MaskMyPrize.js"
import Frequency from "./components/Frequency.js"
class Page extends React.Component {
    constructor(){
        super()
    }
    render(){
        return <div style={{position:'relative'}}>
            <Background />
            <Btn />
            <MaskLottery />
            <MaskGet />
            <MaskMyPrize />
            <Frequency />
        </div>
    }
}
export default Page