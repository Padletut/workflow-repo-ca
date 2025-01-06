import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("should return true when current path matches href exactly", () => {
    // Arrange: Set up the test data
    const href = "/";
    const currentPath = "/";
    // Act: Execute the code to test
    const result = isActivePath(href, currentPath);
    // Assert: Check the result
    expect(result).toBe(true);
  });

  it("Should return true for root path when path is '/' or '/index.html'", () => {
    // Arrange: Set up the test data
    const href = "/";
    const currentPath = "/index.html";
    // Act: Execute the code to test
    const result = isActivePath(href, currentPath);
    // Assert: Check the result
    expect(result).toBe(true);
  });

  it("Should return true when current path includes href", () => {
    // Arrange: Set up the test data
    const href = "/about";
    const currentPath = "/about";
    // Act: Execute the code to test
    const result = isActivePath(href, currentPath);
    // Assert: Check the result
    expect(result).toBe(true);
  });

  it("Should return false when paths do not match", () => {
    // Arrange: Set up the test data
    const href = "/about";
    const currentPath = "/";
    // Act: Execute the code to test
    const result = isActivePath(href, currentPath);
    // Assert: Check the result
    expect(result).toBe(false);
  });
});
