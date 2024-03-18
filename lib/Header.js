const Component = require("./Component")
const {formatDate} = require("./date")

class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`
    }
}

module.exports = Header