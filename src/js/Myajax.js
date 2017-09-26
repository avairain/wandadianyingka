class MyAjax {
    constructor(option) {
        this.option = option
        this.ajax(option)
    }
    ajax(option) {
        window.fetch1 ? (window.fetch(option.url, option.method == "POST" ? {
            method: option.method || "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: option.data
        } : '')
            .then(res => res.json())
            .then(data => {
                this.render(data)
            })
            .catch(e => console.log(e))) : this.xml(option)
    }
    xml(option) {
        var xml = new XMLHttpRequest()
        xml.open(option.method || "get", option.url)
        if (option.method == "POST") {
            xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
        }
        xml.onreadystatechange = () => {
            if (xml.readyState == 4) {
                this.render(JSON.parse(xml.responseText))
            }
        }
        xml.send(option.method == "POST" ? option.data : '')
    }
    render(data) {
        this.option.callback(data)
    }
}
export default MyAjax