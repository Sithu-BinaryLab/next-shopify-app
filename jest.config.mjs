import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "^next/router$": "<rootDir>/__mocks__/next/router.ts",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/__tests__/test-utils.tsx",
  ],
};

export default createJestConfig(config);
