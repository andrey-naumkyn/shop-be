module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@libs/api-gateway$": "<rootDir>/src/libs/api-gateway.ts",
    "^@libs/lambda$": "<rootDir>/src/libs/lambda.ts",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@mocks/(.*)$": "<rootDir>/src/mocks/$1",
  },
  collectCoverage: true,
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "coverage",
};
