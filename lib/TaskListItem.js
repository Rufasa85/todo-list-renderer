const Component = require("./Component")


class TaskListItem extends Component{
    constructor(children,priority){
        super(children);
        this.priority = priority
    }
    render(){
        if(this.priority){
            return `<li class="tasks-item tasks-item-priority">${this.renderInnerHTML()}</li>`
        } else {
            return `<li class="tasks-item">${this.renderInnerHTML()}</li>`
        }
    }
}

module.exports = TaskListItem