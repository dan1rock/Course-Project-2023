module.exports = {
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
        "!node_modules/(!?d3)"
    ],
    "testEnvironment": "jsdom"
};