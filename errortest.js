const testError = (a, b) => {
    console.log(typeof a, typeof b)
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("a or b is not valid type")
    }
    return a + b;
};

module.exports = testError;