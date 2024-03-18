class Component {
    constructor(children = []){
        this.children = children;
    }
    render(){
        throw new Error("Child class must implement render() method.")
    }
    renderInnerHTML(){
        const result = this.children.map(thing=>{
            if(typeof thing ==="string"){
                return thing
            } else {
                return thing.render();
            }
        })
        return result.join(" ")
    }
}

module.exports = Component