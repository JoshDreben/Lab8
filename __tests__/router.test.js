/**
 * @jest-environment jsdom
 */
import { pushToHistory } from "../scripts/router.js";

describe("pushToHistory", () => {
  test("settings", () => {
    var prevLength = history.length;
    pushToHistory("settings");
    expect(history.length).toBe(prevLength + 1);
    expect(history.state).toStrictEqual(
      { page: "settings" },
      "",
      "./#settings"
    );
  });
  test("entry", () => {
    var prevLength = history.length;
    pushToHistory("entry", 2);
    expect(history.length).toBe(prevLength + 1);
    expect(history.state).toStrictEqual({ page: "entry2" }, "", "./#entry2");
  });
  test("default", () => {
    var prevLength = history.length;
    pushToHistory("/");
    expect(history.length).toBe(prevLength + 1);
    expect(history.state).toStrictEqual({}, "", "./");
  });
});
