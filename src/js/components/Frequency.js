import React from "react"
import ReactDOM from "react-dom"
import MyAjax from "../Myajax.js"
export default class Frequency extends React.Component {
    constructor(){
        super()
    }
    render(){
        return <div className="frequency">{(this.state&&this.state.frequency)||''}</div>
    }
    
    componentWillMount (){
        var that= this
        /*new MyAjax({
            url:'',
            callback(data){
                that.setState({frequency:data})
            }
        })*/
    }
}