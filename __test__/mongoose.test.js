import supertest from "supertest";
import app from "../app";

const request = supertest;
describe("GET /api/v1", () => {
  it("should return status code === 200", async () => {
    const res = await request(app).get("/api/v1/");

    expect(res.statusCode).toBe(200);
  });
  it("should return response status success", async () => {
    const res = await request(app).get("/api/v1/");

    expect(res.statusCode).toBe(200);
  });
});
