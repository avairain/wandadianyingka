import React from "react"
import ReactDOM from "react-dom"
import "../../../images/lottery-btn_buy.png"
export default class Buy extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="buy hidden" onClick={()=>{this.goto()}}>
            <img width="100%" src="images/lottery-btn_buy.png" />
        </div>
    }
    goto(){
        window.location.href="http://movie.miguvideo.com/lovev/miguMovie/bookTicket/film.jsp"
    }
}