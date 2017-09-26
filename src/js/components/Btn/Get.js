import React from "react"
import ReactDOM from "react-dom"
import "../../../images/lottery-btn_get.png"
export default class Get extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="lock get hidden" onClick={()=>this.get()}>
            <img width="100%" src= "images/lottery-btn_get.png"/>
        </div>
    }
    get(){
        document.querySelector('.lottery-mask.mask-get').style.display='block'
    }
}