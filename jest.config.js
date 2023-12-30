module.exports = {
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        "^.+\\.[tj]s$": "ts-jest"
    },
    transformIgnorePatterns: [
        "!node_modules/"
    ],
    "testEnvironment": "jsdom"
};