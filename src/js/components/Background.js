import React from "react"
import ReactDOM from "react-dom"
import MyAjax from "../Myajax.js"
class Background extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <section className="bg">
            
        </section>
    }
    componentWillReceiveProps(n){
        var that = this
        var data = n.data
        var str = ''
        data.forEach((v) => {
            if (v.detail.length > 2) {
                v.detail.forEach((v) => {
                    str += `<img width="100%" onclick="return false" src="${v.imgSrc}">`
                })
                return
            }
            str += v.images?`<img width="100%" src="${v.images}">`:''
        });
        document.querySelector("section.bg").innerHTML = str
        var img = document.querySelector('section.bg').children
        for (let i = 1; i < img.length; i++) {
            var v = img[i]
            v.onload = () => {
                document.querySelector("#app").style.height = document.querySelector('section.bg').offsetHeight + "px"
                document.querySelector("#app").style.overflow = "hidden"
            }
        }
    }
}
export default Background
