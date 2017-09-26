import React from "react"
import ReactDOM from "react-dom"
import "../../images/lottery-mask_get.png"
import "../../images/lottery-btn_close.png"
export default class MaskGet extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className="lottery-mask mask-get"  onClick={(e)=>this.close(e)}>
            <img width="66%" className="img" src="images/lottery-mask_get.png" />
            <div className="btn-close">
                <img src="images/lottery-btn_close.png" />
            </div>
        </div>
    }
    close(e){
        if(e.target.className!=="img"||e.target.className!=="get-now"){
            document.querySelector('.lottery-mask.mask-get').style.display='none'
        }
    }
}