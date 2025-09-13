import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";
const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  clearMocks: true,
  transform: {
    "^.+\\.test.ts$": ["ts-jest", { useESM: true }],
    ...tsJestTransformCfg,
  },
};

export default config;
