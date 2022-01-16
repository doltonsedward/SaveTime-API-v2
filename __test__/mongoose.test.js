import db from "../src/config/db";
import mongoose from "mongoose";

describe("Check mongoose connection status", () => {
  it("should return 2 || connecting", () => {
    db.connection.on("error", (err) => {
      console.log(err);
    });

    expect(mongoose.connection.readyState).toBeTruthy();
    expect(mongoose.connection.readyState).toBe(2);
  });
});
