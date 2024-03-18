const Header = require("../lib/Header");
const {formatDate} = require("../lib/date")

describe('initialization', () => { 
    it('should create a header', () => {
        const myHeader = new Header();
        expect(myHeader instanceof Header).toEqual(true);
    });
    it('should create a header with an array of children', () => {
        const myHeader = new Header();
        expect(myHeader.children instanceof Array).toEqual(true);
    });
    it('should default children to an empty array', () => {
        const myHeader = new Header();
        expect(myHeader.children).toEqual([]);
    });
 })
describe('render', () => { 
    it('should render a header with todays date', () => {
        const myHeader = new Header(["one","two","three"]);
        const result = myHeader.render();
        const expected = `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>.`


        expect(result).toEqual(expected);
    }); 
 })