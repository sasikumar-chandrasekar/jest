
const addFun = require("./add");
const errorTest = require("./errortest");
const fetchData = require("./fetchData");
const fetchSomeData = require("./promise");

test("Add 1 + 2 is equal to 3", () => {
    expect(addFun(1, 2)).toBe(3);
});

test("Is the two object are equal", () => {
    const data = { one: 1 }
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test("Null is falsy", () => {
    const value = null;
    expect(value).toBeFalsy();
});

test("Is not falsy", () => {
    const value = 1;
    expect(value).toBeTruthy();
});

test("Throw an error is valid input", () => {
    expect(errorTest(1, 3)).toBe(4);
    expect(() => errorTest(2, "3")).toThrow();
});

test("Fetch data", (done) => {
    async function callback(data) {
        try {
            await expect(data).toBe("Hello World");
            done()
        } catch (error) {
            done(error)
        }
    }
    fetchData(callback)
})

test("Get data", async () => {
    const data = await fetchSomeData();
    expect(data).toBe("hello world");
})

test("Mack function", () => {
    const data = jest.fn((x) => x + 1);
    data(3)
    expect(data(3)).toBe(4);
})

test("Mack function with basic test", () => {
    const add = jest.fn((x) => x + 1);
    expect(add(3)).toBe(4);
    expect(add).toHaveBeenCalledWith(3);
})

test("spying the event dippent on specific object", () => {
    const video = {
        play() {
            return true;
        }
    }

    const spy = jest.spyOn(video, "play");
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})
