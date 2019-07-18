module.exports = {
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  }
};
