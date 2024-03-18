const TaskListItem = require("../lib/TaskListItem")
const Component = require("../lib/Component")
describe('Initialziion', () => { 
    it('should create a TaskListItem instance extended from Component', () => {
        const item = new TaskListItem(["meow"],true);
        expect(item instanceof TaskListItem).toEqual(true)
        expect(item instanceof Component).toEqual(true)
    });
    it('should pass provided children', () => {
        const item = new TaskListItem(["meow"],true);
        expect(item.children).toEqual(["meow"])
    });
    it('should should default children to empty array', () => {
        const item = new TaskListItem();
        expect(item.children).toEqual([])
    });
 })

 describe("Render",()=>{
    it("should render an li",()=>{
        const item = new TaskListItem(["meow"],false);
        const result = item.render();
        const expected=`<li class="tasks-item">meow</li>.`;
        expect(result).toEqual(expected);
    })
    it("should render an li with priority",()=>{
        const item = new TaskListItem(["bork"],true);
        const result = item.render();
        const expected=`<li class="tasks-item tasks-item-priority">bork</li>.`;
        expect(result).toEqual(expected);
    })
 })