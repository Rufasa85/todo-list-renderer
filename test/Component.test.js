const Component = require("../lib/Component");

describe('initialization', () => { 
    it('should create a component with an array of children', () => {
        const myComp = new Component(["one","two","three"]);
        expect(myComp.children instanceof Array).toEqual(true);
    });
    it('should create a component with provided children', () => {
        const myComp = new Component(["one","two","three"]);
        expect(myComp.children.length).toEqual(3);
        expect(myComp.children).toEqual(["one","two","three"]);
    });
    it('should default children to an empty array', () => {
        const myComp = new Component();
        expect(myComp.children.length).toEqual(0);
        expect( myComp.children).toEqual([]);
    });
 })
describe('render', () => { 
    it('should throw if render() is called', () => {
        const myComp = new Component(["one","two","three"]);
        const cb = ()=>{
            myComp.render()
        }
        expect(cb).toThrowError(new Error("Child class must implement render() method."));
    }); 
 })
describe('renderInnerHTML', () => { 
    it('should return all children as one string', () => {
        const myComp = new Component(["one","two","three"]);
       const output = "one two three"
        expect(myComp.renderInnerHTML()).toEqual(output);
    }); 
    // it('should return rendered result if not a string', () => {
    //     const myComp = new Component(["one","two","three"]);
    //    const output = "one two three"
    //     expect(myComp.renderInnerHTML()).toEqual(output);
    // }); 
 })