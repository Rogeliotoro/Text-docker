const print= require ("./sum.js")
const supertest = require ("supertest")
const {server} = require ("../../index.js")
const app = supertest(server);

beforeEach (()=>{
    console.log("despues del tex")
})

afterEach (()=>{
    console.log("ante del text")
})

beforeAll (()=>{
    console.log("despues del tex otra vez")
})

afterAll (()=>{
    console.log("ante del text otra vez")
})



test('texteo 0', () => {
expect(print(0)).toBe(0);
});
test('texteo 1', () => {
expect(print(1)).toBe(1);
});
test('texteo % 3', () => {
expect(print(3)).toBe("fizz");
});
test('texteo % 5', () => {
expect(print(5)).toBe("buzz");
});
test('texteo % 3,5', () => {
expect(print(15)).toBe("FizzBuzz");
});


test("prueba del endpoint" , async ()=>{
    const res = await app.get("/test");
    expect(res.body.clave).toBe(10)
})