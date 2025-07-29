module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testMatch: [
        '<rootDir>/tests/**/*.test.js',
        '<rootDir>/stories/**/*.test.js'
    ],
    collectCoverageFrom: [
        'blocks/**/*.js',
        'stories/**/*.js',
        '!**/node_modules/**',
        '!**/coverage/**'
    ],
    coverageReporters: ['text', 'lcov', 'html'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
};