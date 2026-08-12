import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns the API key from a valid authorization header", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey abc123",
      }),
    ).toBe("abc123");
  });

  test("returns null when authorization header is invalid", () => {
    expect(
      getAPIKey({
        authorization: "Bearer abc123",
      }),
    ).toBeNull();
  });

  test("returns null when the authorization header has no API key", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey",
      }),
    ).toBeNull();
  });

  test("returns an empty string when the API key is empty", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey ",
      }),
    ).toBe("");
  });
});
