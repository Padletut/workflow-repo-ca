import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

describe("Storage functions", () => {
  beforeEach(() => {
    const storage = {};

    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  describe("getUserName", () => {
    it("Should return name from the user object in storage", () => {
      // Arrange: Set up the test data
      const user = JSON.stringify({ name: "Alice" });
      localStorage.setItem("user", user);

      // Act: Execute the code to test
      const result = getUsername();

      // Assert: Check the result
      expect(result).toBe("Alice");
    });

    it("Should return null when no user exists in storage", () => {
      // Act: Execute the code to test
      const result = getUsername();

      // Assert: Check the result
      expect(result).toBe(null);
    });
  });
});
